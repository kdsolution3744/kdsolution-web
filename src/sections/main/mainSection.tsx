"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MainSection() {
  const imageList = ["/main-1.jpg", "/main-2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <h1 className="z-10 text-4xl text-white absolute top-1/2 left-[10%] flex flex-col space-y-4">
        <strong>신뢰를 넘어, 미래로</strong>
        <strong>KD SOLUTION</strong>
      </h1>
      <div className="realative w-full h-full absolute top-0 left-0 flex transition-transform duration-1000">
        {imageList.map((src, idx) => (
          <div
            key={src}
            style={{
              opacity: currentIndex === idx ? 100 : 0,
              transitionDuration: "800",
            }}
            className="absolute transition-all duration-700 w-full h-screen flex-shrink-0"
          >
            <Image
              src={src}
              className="brightness-60 object-cover"
              fill
              placeholder="blur"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              alt={`main0${idx + 1}`}
              priority={idx === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
