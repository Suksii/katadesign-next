import AboutUs from "@/components/webpages/AboutUs";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("AboutPage");
  return {
    title: t("o_nama"),
    description: "",
  };
}

const page = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default page;
