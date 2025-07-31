import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import React from "react";

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
