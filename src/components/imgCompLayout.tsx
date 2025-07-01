"use client";
import { ImgSource } from "@/constants/imgSource";
import { useState } from "react";
import AnimatedSection from "./animatedSection";
import ImageCard from "./imageCard";
import ImgModal from "./ImgModal";

interface prop {
  imgSourceList: ImgSource[];
  title: string;
  subTitle: string;
}

export default function ImgCompLayout({
  imgSourceList,
  title,
  subTitle,
}: prop) {
  const [currentTarget, setCurrentTarget] = useState<ImgSource | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setCurrentTarget(null);
    }, 100);
  };

  const handleOpenModal = (imgSource: ImgSource) => {
    setIsOpen(true);
    setCurrentTarget(imgSource);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
              {title.split(" ").map((word, index) => (
                <span key={index}>
                  {index === title.split(" ").length - 1 ? (
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {word}
                    </span>
                  ) : (
                    word
                  )}{" "}
                </span>
              ))}
            </h1>
            {subTitle && (
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {subTitle}
              </p>
            )}
          </div>
        </AnimatedSection>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imgSourceList.map((v, index) => (
            <AnimatedSection key={v.id} delay={index * 100}>
              <ImageCard equipment={v} onClick={() => handleOpenModal(v)} />
            </AnimatedSection>
          ))}
        </div>

        {/* Empty State */}
        {imgSourceList.length === 0 && (
          <AnimatedSection>
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                설비 정보가 없습니다
              </h3>
              <p className="text-gray-600">곧 업데이트될 예정입니다.</p>
            </div>
          </AnimatedSection>
        )}
      </div>

      {/* Modal */}
      <ImgModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        imgSource={currentTarget}
      />
    </div>
  );
}
