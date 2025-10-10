import Home from "@/components/webpages/Home";
import HomePageWrapper from "@/components/wrappers/HomePageWrapper";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.home_page");
  return {
    title: t("title"),
    description: t("description"),
  };
}

const HomePage = () => {
  return <Home />;
};
1;

export default HomePage;
