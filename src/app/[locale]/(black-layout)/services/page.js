import Services from "@/components/Services";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import React from "react";

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
