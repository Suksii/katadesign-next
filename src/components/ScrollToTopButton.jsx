"use client";

import ArrowTop from "@/icons/ArrowTop";
import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-0 right-0 m-4 cursor-pointer z-50"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
            <ArrowTop />
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
