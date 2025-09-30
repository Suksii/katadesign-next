import AboutUs from "@/components/webpages/AboutUs";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.about_page");
  return {
    title: t("title"),
    description: t("description"),
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
