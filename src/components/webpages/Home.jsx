import TypewriterText from "@/components/Typewriter";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { fadeIn, fadeInLeft, fadeInRight } from "@/components/utils/motions";
import { HeaderMotion, TextMotion } from "@/components/wrappers/MotionTags";

function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-[calc(100vh-288px)] flex flex-col md:justify-end relative pb-12">
      <div className="fixed top-0 right-0 max-w-[1000px] z-0">
        <Image
          src="/bg-header.png"
          alt="bg-header"
          width={1200}
          height={809}
          className="w-full h-auto"
        />
      </div>
      <div className="fixed bottom-0 max-w-[769px] right-0 z-0">
        <Image
          src="/bg-footer.png"
          alt="bg-footer"
          width={769}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <HeaderMotion animation={fadeInLeft(1)} className="mb-12 md:mb-32 z-10">
        {t("ko_smo_mi")}
      </HeaderMotion>

      <div className="flex flex-col xl:flex-row justify-between w-full">
        <TypewriterText
          lines={["Global", "Design", "Agency."]}
          colors={["text-white", "text-white/85", "text-white/70"]}
          textClassName="inline-block w-[10ch] font-bold text-6xl md:text-[110px] uppercase tracking-widest leading-none relative"
        />

        <div className="flex flex-col justify-between md:py-12 overflow-x-hidden">
          <TextMotion
            animation={fadeIn(3, 3.5)}
            className="flex-1 flex flex-col gap-1 pt-16 md:pt-0 md:text-lg z-10"
          >
            <span className="flex flex-col md:flex-row gap-1 md:gap-2">
              {" "}
              <span>Branding & Creative Direction</span>{" "}
              <span className="hidden md:block">/</span>{" "}
              <span>Product and Packaging</span>{" "}
            </span>{" "}
            <span className="flex flex-col md:flex-row gap-1 md:gap-2">
              {" "}
              <span>Editorial & Photography</span>{" "}
              <span className="hidden md:block">/</span>{" "}
              <span>Digital Media & Animation</span>{" "}
            </span>{" "}
            <span>Spatial Design & Experiential</span>
          </TextMotion>
          <TextMotion
            animation={fadeInRight(1, 3)}
            className="flex justify-end border-r border-gray-500 text-xl pr-8 mt-12 leading-12"
          >
            {t("sta_radimo")}
          </TextMotion>
        </div>
      </div>
    </div>
  );
}

export default Home;
