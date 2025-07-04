"use client";

import { ImgSource } from "@/constants/imgSource";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImgModal({
  isOpen,
  onClose,
  imgSource,
}: {
  isOpen: boolean;
  onClose: () => void;
  imgSource: ImgSource | null;
}) {
  const [idx, setIdx] = useState(0);

  const handleClose = () => {
    setIdx(0);
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!isOpen || !imgSource) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 brightness-20 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Section */}
        <div className="relative space-y-4 bg-gray-100 flex flex-col items-center justify-center p-8">
          <Image
            src={imgSource.imageList[idx] || "/placeholder.svg"}
            alt={imgSource.title}
            className="object-contain rounded-lg shadow-lg"
          />
          {/* 썸네일 리스트 */}
          <div className="flex justify-center gap-2 overflow-x-auto max-w-full">
            {imgSource.imageList.map((thumb, tIdx) => (
              <button
                key={thumb.src + tIdx}
                onClick={() => setIdx(tIdx)}
                className={`border-2 rounded-md p-0.5 transition-all duration-200
                    ${
                      idx === tIdx
                        ? "border-blue-500"
                        : "border-transparent hover:border-gray-400"
                    }`}
                style={{ minWidth: 48, minHeight: 48 }}
              >
                <Image
                  src={thumb}
                  alt={`subImg-${thumb}-${tIdx + 1}`}
                  width={144}
                  height={144}
                  className="w-36 h-36 object-cover rounded"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
