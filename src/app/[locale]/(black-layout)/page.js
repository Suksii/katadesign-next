import Home from "@/components/webpages/Home";
import { seoAlternates, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations("Metadata.home_page");
  return {
    title: t("title"),
    description: t("description"),
    alternates: seoAlternates(locale),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://kataagency.com/${locale}`,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

const HomePage = () => {
  return <Home />;
};
1;

export default HomePage;
