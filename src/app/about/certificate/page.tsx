"use client";
import iso14001_1 from "@/assets/인증서/ISO 14001 2015-1.webp";
import iso14001_2 from "@/assets/인증서/ISO 14001 2015-2.webp";
import iso9001_1 from "@/assets/인증서/ISO9001 2015-1.webp";
import iso9001_2 from "@/assets/인증서/ISO9001 2015-2.webp";
import AnimatedSection from "@/components/animatedSection";
import CommonHeader from "@/components/commonHeader";
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
        <CommonHeader
          title="산업"
          titleBold="인증서"
          subTitle="KD Solution의 품질 및 환경 인증서입니다."
        />
        <div className="space-y-12">
          {certificateList.map((cert) => (
            <AnimatedSection key={cert.title}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col items-center gap-4">
                <div>
                  <h2 className="text-xl text-center shrink-0 font-bold mb-4">
                    {cert.title}
                  </h2>
                </div>
                <div className="flex md:flex-row flex-col gap-8 w-full justify-center">
                  {cert.imageList.map((img, i) => (
                    <button
                      key={i}
                      className="relative w-full min-h-64 md:w-90 md:h-124 focus:outline-none"
                      onClick={() => handleImageClick(cert)}
                      type="button"
                    >
                      <Image
                        src={img}
                        alt={cert.title + " 이미지 " + (i + 1)}
                        fill
                        placeholder="blur"
                        className="object-contain hover:scale-105 transition-transform duration-200"
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
