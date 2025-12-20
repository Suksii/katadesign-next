// import { useEffect, useRef } from "react";

// export default function useFullPageScroll() {
//   const containerRef = useRef(null);
//   const isScrolling = useRef(false);
//   const currentIndex = useRef(0);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const sections = Array.from(
//       containerRef.current.querySelectorAll(".section")
//     );

//     const scrollToSection = (index) => {
//       if (index < 0 || index >= sections.length) return;
//       isScrolling.current = true;
//       currentIndex.current = index;

//       sections[index].scrollIntoView({ behavior: "smooth" });

//       setTimeout(() => {
//         isScrolling.current = false;
//       }, 800);
//     };

//     const handleWheel = (e) => {
//       if (isScrolling.current) return;

//       const section = sections[currentIndex.current];
//       if (!section) return;

//       // ako sekcija ima unutrašnji scroll
//       const canScrollInside = section.scrollHeight > section.clientHeight;
//       const atTop = section.scrollTop <= 0;
//       const atBottom =
//         Math.ceil(section.scrollTop + section.clientHeight) >=
//         section.scrollHeight;

//       if (canScrollInside) {
//         if (e.deltaY < 0 && !atTop) {
//           // skrolaj gore unutar sekcije
//           return;
//         }
//         if (e.deltaY > 0 && !atBottom) {
//           // skrolaj dole unutar sekcije
//           return;
//         }
//       }

//       // full page scroll samo kad si na vrhu/dnu sekcije
//       if (e.deltaY > 0 && atBottom && currentIndex.current < sections.length - 1) {
//         scrollToSection(currentIndex.current + 1);
//         e.preventDefault();
//       } else if (e.deltaY < 0 && atTop && currentIndex.current > 0) {
//         scrollToSection(currentIndex.current - 1);
//         e.preventDefault();
//       }
//     };

//     const updateCurrentIndex = () => {
//       const scrollY = window.scrollY;
//       let idx = sections.findIndex((sec) => {
//         const top = sec.offsetTop;
//         const bottom = top + sec.offsetHeight;
//         return scrollY >= top && scrollY < bottom;
//       });
//       if (idx === -1) idx = 0;
//       currentIndex.current = idx;
//     };

//     updateCurrentIndex();
//     window.addEventListener("scroll", updateCurrentIndex, { passive: true });
//     window.addEventListener("wheel", handleWheel, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("scroll", updateCurrentIndex);
//     };
//   }, []);

//   return containerRef;
// }

import { useEffect, useRef, useState } from 'react';


export const useScrollHook = (options = {}) => {
  const { threshold = 0.95, scrollBehavior = 'smooth' } = options;
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);
  const isScrollingRef = useRef(false);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    // Pronađi sve sekcije sa data-scroll-section atributom
    const sections = Array.from(
      document.querySelectorAll('[data-scroll-section]')
    );
    sectionsRef.current = sections;

    const handleWheel = (e) => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;

      // Sprečavamo prečesto trigerovanje
      if (timeSinceLastScroll < 100 || isScrollingRef.current) return;

      const sections = sectionsRef.current;
      if (sections.length === 0) return;

      const scrollingDown = e.deltaY > 0;
      const currentSectionEl = sections[currentSection];

      if (!currentSectionEl) return;

      const rect = currentSectionEl.getBoundingClientRect();
      const sectionHeight = currentSectionEl.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Provera da li je sekcija veća od ekrana
      const isSectionLargerThanViewport = sectionHeight > viewportHeight;

      if (isSectionLargerThanViewport) {
        // Ako je sekcija veća od ekrana, omogućavamo obično skrolovanje
        if (scrollingDown) {
          // Proveravamo da li smo stigli skoro do kraja sekcije
          const distanceToBottom = rect.bottom - viewportHeight;
          const sectionScrollProgress = 1 - distanceToBottom / sectionHeight;

          if (sectionScrollProgress >= threshold) {
            // Stigli smo do kraja sekcije, idemo na sledeću
            e.preventDefault();
            const nextSection = Math.min(currentSection + 1, sections.length - 1);
            if (nextSection !== currentSection) {
              scrollToSection(nextSection);
            }
          }
          // Inače, dozvoljavamo obično skrolovanje
        } else {
          // Skrolovanje nagore
          const distanceFromTop = -rect.top;
          const sectionScrollProgress = distanceFromTop / sectionHeight;

          if (sectionScrollProgress <= 1 - threshold) {
            // Stigli smo do vrha sekcije, idemo na prethodnu
            e.preventDefault();
            const prevSection = Math.max(currentSection - 1, 0);
            if (prevSection !== currentSection) {
              scrollToSection(prevSection, 'end');
            }
          }
          // Inače, dozvoljavamo obično skrolovanje
        }
      } else {
        // Sekcija stane u ekran - snap behavior
        e.preventDefault();
        if (scrollingDown) {
          const nextSection = Math.min(currentSection + 1, sections.length - 1);
          scrollToSection(nextSection);
        } else {
          const prevSection = Math.max(currentSection - 1, 0);
          scrollToSection(prevSection);
        }
      }

      lastScrollTime.current = now;
    };

    const scrollToSection = (index, position) => {
      const section = sectionsRef.current[index];
      if (!section) return;

      isScrollingRef.current = true;
      setCurrentSection(index);

      if (position === 'end') {
        // Skroluj na dno sekcije
        const sectionBottom = section.offsetTop + section.offsetHeight - window.innerHeight;
        window.scrollTo({
          top: sectionBottom,
          behavior: scrollBehavior,
        });
      } else {
        section.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    };

    // Observer za praćenje trenutne sekcije tokom običnog skrolovanja
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isScrollingRef.current) {
          const index = sections.indexOf(entry.target);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      observer.disconnect();
    };
  }, [currentSection, threshold, scrollBehavior]);

  return { currentSection };
};