"use client";
import { MENU_ITEM } from "@/constants/menu";
import { Cog, Dribbble } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function LinkSection() {
  const ingridient = MENU_ITEM[1].subItems[0];
  const process = MENU_ITEM[2].subItems[3];

  // 애니메이션 상태 관리
  const headerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <div className="w-full min-h-[100vh] flex flex-col space-y-8 py-12">
      {/* Header */}
      <div ref={headerRef} className="w-full space-y-24 text-left p-16">
        <h1
          className={`text-4xl flex flex-col gap-6 transition-all duration-700 ease-out
            ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
        >
          <strong>{"Materials & Processing"}</strong>
        </h1>
        <h2
          className={`text-5xl text-right flex flex-col gap-6 transition-all duration-700 ease-out
            ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
        >
          <strong className="keep-all">KD Solution의</strong>
          <strong>업계를 선도하는</strong>
          <strong>소재와 가공 기술력을 확인해보세요</strong>
        </h2>
      </div>
      {/* Link Card */}
      <div className="flex flex-row w-full h-[80vh]">
        <Link
          href={ingridient.href}
          className="relative flex-1 group overflow-hidden transition-all duration-500 ease-in-out hover:flex-[1.3]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/link-section-1.jpg?height=800&width=600')`,
            }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-16">
            <div className="transform transition-all duration-500 group-hover:scale-110">
              <Dribbble className="w-16 h-16 mb-4 mx-auto group-hover:rotate-90 transition-all duration-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                소재
              </h2>
              <p className="text-lg mt-2 text-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                소재 소개 문구
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </Link>

        {/* Design Section */}
        <Link
          href={process.href}
          className="relative flex-1 group overflow-hidden transition-all duration-500 ease-in-out hover:flex-[1.3]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/link-section-2.png?height=800&width=600')`,
            }}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-8">
            <div className="transform transition-all duration-500 group-hover:scale-110">
              <Cog className="w-16 h-16 mb-4 mx-auto group-hover:rotate-180 transition-all duration-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                가공
              </h2>
              <p className="text-lg mt-2 text-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                가공 소개 문구
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </Link>
      </div>
    </div>
  );
}
