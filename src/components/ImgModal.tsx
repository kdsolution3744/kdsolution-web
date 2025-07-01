"use client";

import { ImgSource } from "@/constants/imgSource";
import { useEffect } from "react";

export default function ImgModal({
  isOpen,
  onClose,
  imgSource,
}: {
  isOpen: boolean;
  onClose: () => void;
  imgSource: ImgSource | null;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
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
        className="absolute inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Image Section */}
          <div className="relative bg-gray-100 flex items-center justify-center p-8">
            <img
              src={imgSource.image || "/placeholder.svg"}
              alt={imgSource.title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 overflow-y-auto">
            <div className="space-y-6">
              {imgSource.category && (
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {imgSource.category}
                </span>
              )}

              <h2 className="text-3xl font-bold text-gray-900">
                {imgSource.title}
              </h2>

              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {imgSource.desc}
                </p>
              </div>

              {imgSource.specs && imgSource.specs.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    주요 사양
                  </h3>
                  <ul className="space-y-2">
                    {imgSource.specs.map((spec, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
