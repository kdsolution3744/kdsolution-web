"use client";
import { IHistory } from "@/constants/history";
import { useEffect, useRef, useState } from "react";

interface prop {
  item: IHistory;
  idx: number;
}

export default function HistoryItem({ item, idx }: prop) {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const isEven = idx % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px",
      }
    );
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div className="py-4" ref={itemRef}>
      {/* history dot */}
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={`w-4 h-4 rounded-full bg-gray-800 transition-all duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        ></div>
      </div>
      {/* Content */}
      <div
        className={`w-fit md:w-5/12 ml-20 md:ml-0 ${
          isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
        }`}
      >
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 translate-x-0"
              : `opacity-0 translate-y-8 ${
                  isEven ? "md:-translate-x-8" : "md:translate-x-8"
                }`
          }`}
        >
          <div className="mb-4">
            <span className="text-3xl font-bold text-gray-800 block mb-2">
              {item.year}
            </span>
          </div>
          {item.desc.map((v) => (
            <p key={v} className="text-gray-600 leading-relaxed">
              <span className="font-bold"> · </span>
              {v}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
