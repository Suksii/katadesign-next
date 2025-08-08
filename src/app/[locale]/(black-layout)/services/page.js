import Services from "@/components/Services";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("ServicesPage");
  return {
    title: t("usluge"),
    description: "",
  };
}

const ServicesPage = () => {
  const t = useTranslations("ServicesPage");
  return (
    <PagesWrapper title={t("usluge")}>
      <h2>{t("uslugeNaslov")}</h2>
      <div>
        <Services />
      </div>
    </PagesWrapper>
  );
};

export default ServicesPage;
