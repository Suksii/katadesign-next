"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ images }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const w = entry.contentRect.width;

        if (w < 650) {
          setSlidesToShow(1);
        } else if (w >= 650 && w < 1400) {
          setSlidesToShow(3);
        } else {
          setSlidesToShow(5);
        }
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const maxIndex = Math.max(images.length - slidesToShow, 0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [slidesToShow, maxIndex, currentIndex]);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center"
    >
      <button
        onClick={handlePrev}
        className="absolute left-2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 will-change-transform"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              <div className="relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={src}
                  alt={`Image ${index}`}
                  width={400}
                  height={500}
                  className="w-full h-[360px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
