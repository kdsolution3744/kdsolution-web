"use client";
import iso14001_1 from "@/assets/인증서/ISO 14001 2015-1.webp";
import iso14001_2 from "@/assets/인증서/ISO 14001 2015-2.webp";
import iso9001_1 from "@/assets/인증서/ISO9001 2015-1.webp";
import iso9001_2 from "@/assets/인증서/ISO9001 2015-2.webp";
import AnimatedSection from "@/components/animatedSection";
import ImgModal from "@/components/ImgModal";
import type { ImgSource } from "@/constants/imgSource";
import Image from "next/image";
import { useState } from "react";

const certificateList: ImgSource[] = [
  {
    title: "ISO 9001",
    imageList: [iso9001_1, iso9001_2],
  },
  {
    title: "ISO 14001",
    imageList: [iso14001_1, iso14001_2],
  },
];

export default function CertificatePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTarget, setModalTarget] = useState<ImgSource | null>(null);

  const handleImageClick = (cert: ImgSource) => {
    setModalTarget(cert);
    setModalOpen(true);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
            인증서
          </h1>
          <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            KD Solution의 품질 및 환경 인증서 현황입니다.
          </p>
        </div>
        <div className="space-y-12">
          {certificateList.map((cert) => (
            <AnimatedSection key={cert.title}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-4">
                <h2 className="text-xl font-bold text-gray-900 text-center mb-4 md:mb-0 shrink-0">
                  {cert.title}
                </h2>
                <div className="flex flex-row gap-8 w-full justify-center">
                  {cert.imageList.map((img, i) => (
                    <button
                      key={i}
                      className="relative w-48 h-64 focus:outline-none"
                      onClick={() => handleImageClick(cert)}
                      type="button"
                    >
                      <Image
                        src={img}
                        alt={cert.title + " 이미지 " + (i + 1)}
                        fill
                        placeholder="blur"
                        className="object-contain rounded-lg shadow hover:scale-105 transition-transform duration-200"
                        sizes="192px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <ImgModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imgSource={modalTarget}
      />
    </section>
  );
}
