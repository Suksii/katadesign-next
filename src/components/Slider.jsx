"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CenteredSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 650) {
        setSlidesToShow(1);
      } else if (w >= 650 && w < 1400) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full flex items-center justify-center">
      <button
        onClick={handlePrev}
        className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <div className="flex overflow-hidden w-full justify-center items-center">
        <div
          className="flex transition-transform duration-500 items-center will-change-transform"
          style={{
            transform: `translateX(calc(50% - ${
              (currentIndex + 0.5) * (100 / slidesToShow)
            }%))`,
          }}
        >
          {images.map((src, index) => {
            const isActive = index === currentIndex;
            const containerWidth = isActive
              ? `${100 / slidesToShow}%`
              : `${100 / slidesToShow}%`;

            return (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center transition-all duration-500"
                style={{
                  width: containerWidth,
                  zIndex: isActive ? 10 : 1,
                }}
              >
                <div
                  className="relative shadow-lg transition-transform duration-500 will-change-transform"
                  style={{
                    transform: isActive ? "scale(1.1)" : "scale(0.9)",
                    transformOrigin: "center center",
                    width: "100%",
                  }}
                >
                  <Image
                    src={src}
                    alt={`Image ${index}`}
                    width={400}
                    height={800}
                    className={`w-full object-cover transition-transform duration-500 shrink-0 ${
                      isActive ? "h-[500px] object-bottom" : "h-[320px]"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
