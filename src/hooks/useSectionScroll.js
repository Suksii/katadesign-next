import { useEffect, useRef } from "react";

export default function useFullPageScroll() {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const sections = Array.from(
      containerRef.current.querySelectorAll(".section")
    );
    const buffer = 20;

    const handleWheel = (e) => {
      if (isScrolling.current) return;

      const delta = e.deltaY;
      const scrollY = window.scrollY;

      let currentIndex = sections.findIndex((sec) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        return scrollY >= top && scrollY < bottom;
      });

      if (currentIndex === -1) currentIndex = 0;
      const currentSection = sections[currentIndex];
      const sectionTop = currentSection.offsetTop;
      const sectionBottom = sectionTop + currentSection.offsetHeight;

      if (delta > 0 && scrollY + window.innerHeight >= sectionBottom - buffer) {
        if (currentIndex < sections.length - 1) {
          isScrolling.current = true;
          sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
          setTimeout(() => (isScrolling.current = false), 700);
          e.preventDefault();
        }
      }
      else if (delta < 0 && scrollY <= sectionTop + buffer) {
        if (currentIndex > 0) {
          isScrolling.current = true;
          sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
          setTimeout(() => (isScrolling.current = false), 700);
          e.preventDefault();
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return containerRef;
}
