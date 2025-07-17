"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
import { createTransport } from "nodemailer";
import { getEmailHtml } from "./emailHtml";

// Upstash Redis 클라이언트 초기화
const redis = new Redis({
  url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
  token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_TOKEN,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"), // 1시간당 5회 제한
});

const fastLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(1, "1 s"),
});

const transporter = createTransport({
  host: "smtp.naver.com",
  port: 465,
  secure: true,
  requireTLS: true,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_PASS,
  },
});

export const sendEmail = async (prevState: any, formData: FormData) => {
  try {
    // 1. 클라이언트 IP 추출
    const headersList = headers();
    const ip =
      (await headersList).get("x-real-ip") ||
      (await headersList).get("x-forwarded-for") ||
      "unknown";
    const fastLimit = await fastLimiter.limit(`fast_${ip}`);

    if (!fastLimit.success) {
      return {
        success: false,
        error: "Too many requests",
        message: "잠시 후 다시 시도해주세요",
      };
    }
    // 2. Rate Limit 적용
    const { success } = await ratelimit.limit(`email_${ip}`);

    if (!success) {
      return {
        success: false,
        error: "Too many requests",
        message: "1시간에 최대 5회까지 요청 가능합니다.",
      };
    }

    // 3. 기존 메일 전송 로직
    const { name, email, company, phone, message } =
      Object.fromEntries(formData);

    const resp = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      replyTo: email as string,
      subject: `[문의] ${company} : ${name}`,
      html: getEmailHtml(
        name as string,
        email as string,
        company as string,
        phone as string,
        message as string
      ),
    });

    return { success: true, message: "메일 전송 성공" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "서버 오류",
      message: "메일 전송에 실패했습니다.",
    };
  }
};
