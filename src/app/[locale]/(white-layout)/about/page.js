import AboutUs from "@/components/webpages/AboutUs";
import { seoAlternates, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations("Metadata.about_page");
  return {
    title: t("title"),
    description: t("description"),
    alternates: seoAlternates(locale, "about"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://kataagency.com/${locale}/about`,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

const AboutUsPage = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
