"use client";

import { sendEmail } from "@/lib/mailAction";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";

function formatPhoneNumber(value: string) {
  // 숫자만 남기기
  const numbersOnly = value.replace(/[^0-9]/g, "");
  if (numbersOnly.length <= 3) return numbersOnly;
  if (numbersOnly.length <= 7)
    return numbersOnly.replace(/(\d{3})(\d{1,4})/, "$1-$2");
  return numbersOnly.replace(/(\d{3})(\d{4})(\d{1,4})/, "$1-$2-$3");
}

export default function EmailForm() {
  const [state, formAction] = useActionState(sendEmail, null);
  const { pending } = useFormStatus();
  const [phone, setPhone] = useState("");
  // const [isPending, setIsPending] = useState(false);
  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">문의하기</h2>

        <form className="space-y-6" action={formAction}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                이름 *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="홍길동"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                이메일 *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="example@company.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                회사명
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="회사명을 입력해주세요"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                연락처
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required={false}
                inputMode="numeric"
                value={phone}
                onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="010-1234-5678"
                maxLength={13}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              문의 내용 *
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="문의하실 내용을 자세히 작성해주세요..."
            />
          </div>

          <button
            type="submit"
            disabled={pending}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pending ? "전송 중..." : "문의 보내기"}
          </button>
          {state?.success ? (
            <div className="text-green-500 mt-4">
              메일이 성공적으로 전송되었습니다.
            </div>
          ) : (
            <div className="text-red-500 mt-4">{state?.message}</div>
          )}
        </form>
      </div>
    </>
  );
}
