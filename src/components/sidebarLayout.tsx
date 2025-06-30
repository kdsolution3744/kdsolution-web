"use client";

import { IMenu } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SidebarLayout({
  children,
  imgSrc,
  targetItem,
}: Readonly<{
  children: React.ReactNode;
  imgSrc: string;
  targetItem: IMenu[];
}>) {
  const pathname = usePathname();
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    if (!pathname) return;
    const currentLast = pathname.split("/").filter(Boolean).pop();
    const foundIdx = targetItem.findIndex((v) => {
      const hrefLast = v.href.split("/").filter(Boolean).pop();
      return hrefLast === currentLast;
    });
    if (foundIdx !== -1) setSelectedIdx(foundIdx);
  }, [pathname, targetItem]);

  return (
    <div className="w-full">
      <div className="w-full h-120 md:80 relative">
        <Image
          src={imgSrc}
          fill
          className="object-cover -z-10 brightness-70"
          alt="layout-img"
        />
      </div>
      {/* 탭 섹션 */}
      <div className="min-h-[100vh] mb-4 flex flex-col lg:flex-row gap-4 lg:gap-8 bg-gray-50 lg:px-10">
        {/* 모바일/태블릿: 상단 탭바 */}
        <nav className="flex lg:hidden w-full overflow-x-auto justify-center bg-white/90 rounded-b-xl shadow-md px-2 py-2 gap-2 sticky top-0 z-20">
          {targetItem.map((v, idx) => (
            <Link
              key={`mobile-side-tabs-${v.title}`}
              href={v.href}
              onClick={() => setSelectedIdx(idx)}
              className={`flex items-center whitespace-nowrap px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200
                ${
                  selectedIdx === idx
                    ? "bg-blue-100 text-blue-700 shadow"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
            >
              <span
                className={`inline-block w-2 h-2 rounded-full mr-2 transition-all duration-200
                  ${
                    selectedIdx === idx
                      ? "bg-blue-500 scale-125"
                      : "bg-gray-300"
                  }`}
              />
              {v.title}
            </Link>
          ))}
        </nav>
        {/* 데스크톱: 사이드바 */}
        <aside className="hidden lg:flex w-56 min-h-[60vh] mt-[-3rem] rounded-xl shadow-xl bg-white/80 backdrop-blur-md flex-col items-center py-10 z-10 relative">
          <nav className="w-full flex flex-col gap-2">
            {targetItem.map((v, idx) => (
              <button
                key={`side-tabs-${v.title}`}
                onClick={() => setSelectedIdx(idx)}
                className={`group w-full flex items-center gap-3 rounded-lg transition-all duration-200 font-semibold text-lg
                  ${
                    selectedIdx === idx
                      ? "bg-blue-100 text-blue-700 shadow-md"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                style={{ outline: "none" }}
              >
                <Link
                  href={v.href}
                  className="flex items-center flex-1 px-6 py-3 text-left"
                >
                  {/* 인디케이터 */}
                  <span
                    className={`inline-block w-2 h-2 rounded-full mr-2 transition-all duration-200
                      ${
                        selectedIdx === idx
                          ? "bg-blue-500 scale-125"
                          : "bg-gray-300 group-hover:bg-blue-300"
                      }`}
                  />
                  {v.title}
                </Link>
              </button>
            ))}
          </nav>
        </aside>
        {/* Content */}
        <main className="flex-1 bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-10 mt-0 lg:mt-[-3rem] min-h-[60vh]">
          {children}
        </main>
      </div>
    </div>
  );
}
