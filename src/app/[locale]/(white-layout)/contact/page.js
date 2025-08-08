import ContactSection from "@/components/ContactSection";
import SocialLinks from "@/components/SocialLinks";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("ContactPage");
  return {
    title: t("kontakt"),
    description: "",
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
      <div className="flex gap-12 flex-col md:flex-row">
        <div className="flex-1 flex flex-col justify-between gap-6">
          <p>email@kata.design</p>
          <div className="flex justify-between md:w-[80%]">
            <div className="flex flex-col gap-4">
              <p className="uppercase font-medium">{t("pronadjite_nas")}</p>
              <SocialLinks
                containerClassName="flex justify-between gap-8 lg:gap-12"
                linkClassName="text-gray-600 font-medium uppercase cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">{t("crna_gora_evropa")}</p>
              <p className="font-medium">+382 1234567</p>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <ContactSection />
        </div>
      </div>
    </PagesWrapper>
  );
};

export default ContactPage;
