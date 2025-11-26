import Home from "@/components/webpages/Home";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.home_page");
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "https://kataagency.com/home-page.png",
          width: 1200,
          height: 630,
          alt: "Kata Design",
        },
      ],
    },
  };
}

const HomePage = () => {
  return <Home />;
};
1;

export default HomePage;
