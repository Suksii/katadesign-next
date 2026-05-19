import Contact from "@/components/webpages/Contact";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { seoAlternates, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations("Metadata.contact_page");
  return {
    title: t("title"),
    description: t("description"),
    alternates: seoAlternates(locale, "contact"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://kataagency.com/${locale}/contact`,
      images: [DEFAULT_OG_IMAGE],
    },
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
