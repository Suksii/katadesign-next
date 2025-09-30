import Contact from "@/components/webpages/Contact";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.contact_page");
  return {
    title: t("title"),
    description: t("description"),
  };
}

const ContactPage = () => {
  const t = useTranslations("ContactPage");

  return (
    <PagesWrapper
      title={t("kontakt")}
      titleClassName="!text-5xl"
      layoutClassName="max-w-full"
    >
      <Contact />
    </PagesWrapper>
  );
};

export default ContactPage;
