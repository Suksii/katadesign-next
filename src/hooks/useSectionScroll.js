import { useEffect, useRef } from "react";

export default function useFullPageScroll() {
  const containerRef = useRef(null);
  const isScrolling = useRef(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = Array.from(
      containerRef.current.querySelectorAll(".section")
    );

    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.length) return;
      isScrolling.current = true;
      currentIndex.current = index;

      sections[index].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    };

    const handleWheel = (e) => {
      if (isScrolling.current) return;

      const section = sections[currentIndex.current];
      if (!section) return;

      // ako sekcija ima unutrašnji scroll
      const canScrollInside = section.scrollHeight > section.clientHeight;
      const atTop = section.scrollTop <= 0;
      const atBottom =
        Math.ceil(section.scrollTop + section.clientHeight) >=
        section.scrollHeight;

      if (canScrollInside) {
        if (e.deltaY < 0 && !atTop) {
          // skrolaj gore unutar sekcije
          return;
        }
        if (e.deltaY > 0 && !atBottom) {
          // skrolaj dole unutar sekcije
          return;
        }
      }

      // full page scroll samo kad si na vrhu/dnu sekcije
      if (e.deltaY > 0 && atBottom && currentIndex.current < sections.length - 1) {
        scrollToSection(currentIndex.current + 1);
        e.preventDefault();
      } else if (e.deltaY < 0 && atTop && currentIndex.current > 0) {
        scrollToSection(currentIndex.current - 1);
        e.preventDefault();
      }
    };

    const updateCurrentIndex = () => {
      const scrollY = window.scrollY;
      let idx = sections.findIndex((sec) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        return scrollY >= top && scrollY < bottom;
      });
      if (idx === -1) idx = 0;
      currentIndex.current = idx;
    };

    updateCurrentIndex();
    window.addEventListener("scroll", updateCurrentIndex, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", updateCurrentIndex);
    };
  }, []);

  return containerRef;
}
