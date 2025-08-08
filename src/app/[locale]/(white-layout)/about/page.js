import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("AboutPage");
  return {
    title: t("o_nama"),
    description: "",
  };
}

const AboutPage = () => {
  const t = useTranslations("AboutPage");
  const paragraphs = t.raw("o_nama_paragrafi");

  return (
    <PagesWrapper title={t("o_nama")}>
      <div>
        <h2>{t("o_nama_naslov")}</h2>
        <div className="tracking-wide text-lg leading-8">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </PagesWrapper>
  );
};

export default AboutPage;
