import TypewriterText from "@/components/Typewriter";
import { useTranslations } from "next-intl";
import Image from "next/image";

function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-[calc(100vh-288px)] flex flex-col md:justify-end relative pb-12">
      {/* <div className="fixed top-0 right-0 -translate-y-[8%] translate-x-[40%] sm:-translate-y-[15%] md:-translate-y-[15%] lg:-translate-y-[42%] inset-0 z-0">
        <Image
          src="/3s_logo_crveni.png"
          alt="3s_logo_crveni"
          width={3543}
          height={1341}
        />
      </div> */}
      <h1 className="mb-12 md:mb-32">{t("ko_smo_mi")}</h1>
      <div className="flex flex-col xl:flex-row justify-between w-full">
        <TypewriterText
          lines={["Global", "Design", "Agency."]}
          colors={["text-white", "text-white/85", "text-white/70"]}
        />
        <div className="flex flex-col justify-between">
          <p className="flex-1 flex justify-end pt-16 md:pt-0 md:text-lg">
            Branding & Creative Direction / Product and Packaging,
            <br />
            Editorial & Photography / Digital Media & Animation /
            <br />
            Spatial Design & Experiential
          </p>
          <p className="flex justify-end border-r border-gray-500 text-xl pr-8 mt-12 leading-12">
            {t("sta_radimo")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
