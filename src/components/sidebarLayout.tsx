"use client";

import { IMenu } from "@/constants/menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SidebarLayout({
  children,
  imgSrc,
  targetItem,
}: Readonly<{
  children: React.ReactNode;
  imgSrc: string;
  targetItem: IMenu[];
}>) {
  const [selectedIdx, setSelectedIdx] = useState(0);

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
      <div className="min-h-[100vh] mb-4 flex flex-row gap-8 bg-gray-50 md:px-10">
        {/* Sidebar */}
        <aside className="hidden md:flex w-56 min-h-[60vh] mt-[-3rem] rounded-xl shadow-xl bg-white/80 backdrop-blur-md flex-col items-center py-10 z-10 relative">
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
        <main className="flex-1 bg-white rounded-xl shadow-lg p-10 mt-[-3rem] min-h-[60vh]">
          {children}
        </main>
      </div>
    </div>
  );
}
