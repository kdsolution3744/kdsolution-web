"use server";

import { createTransport } from "nodemailer";

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
    const { name, email, company, phone, message } =
      Object.fromEntries(formData);
    const resp = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      replyTo: email as string,
      subject: `[문의] ${company} : ${name}`,
      html: `
      <p>보낸 이 : ${name}</p>
      <p>이메일 : ${email}</p>
      <p>회사 : ${company}</p>
      <p>번호 : ${phone}</p>
      <p>----------------------------------------------</p>
      <div>${(message as string).replace(/(<([^>]+)>)/gi, "")}</div>
      <br/>
      
      `,
    });
    return resp;
  } catch (error) {
    console.error(error);
  }
};
