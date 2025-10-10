"use client";
import { useAbout } from "@/hooks/useAbout";
import { useLocale, useTranslations } from "next-intl";
import PagesWrapper from "../wrappers/PagesWrapper";
import AboutSkeleton from "../skeletons/AboutSkeleton";

const AboutUs = () => {
  const t = useTranslations("AboutPage");
  const paragraphs = t.raw("o_nama_paragrafi");
  const { data, isError } = useAbout();
  const locale = useLocale();
  if (isError)
    return (
      <PagesWrapper title={t("o_nama")}>Error loading content</PagesWrapper>
    );

  const content = locale === "en" ? data?.contentEn : data?.contentMn;

  //   const paragraphs = content ? content.split("\n") : [];

  return (
    <PagesWrapper title={t("o_nama")}>
      <div>
        <h2>{t("o_nama_naslov")}</h2>
        <div className="tracking-wide text-xl leading-8 flex flex-col gap-4">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </PagesWrapper>
  );
};

export default AboutUs;
