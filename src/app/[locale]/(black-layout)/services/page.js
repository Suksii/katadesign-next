import Services from "@/components/webpages/Services";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { seoAlternates, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations("Metadata.services_page");
  return {
    title: t("title"),
    description: t("description"),
    alternates: seoAlternates(locale, "services"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://kataagency.com/${locale}/services`,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

const ServicesPage = () => {
  const t = useTranslations("ServicesPage");
  return (
    <PagesWrapper title={t("usluge")}>
      <div className="py-20">
        <h2>{t("uslugeNaslov")}</h2>
        <div>
          <Services />
        </div>
      </div>
    </PagesWrapper>
  );
};

export default ServicesPage;
