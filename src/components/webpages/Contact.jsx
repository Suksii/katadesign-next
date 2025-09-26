import React from "react";
import SocialLinks from "../SocialLinks";
import ContactSection from "../ContactSection";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("ContactPage");
  return (
    <div className="flex gap-12 flex-col md:flex-row md:pt-12">
      <div className="flex-1 flex flex-col justify-between gap-6">
        <p className="pb-8 md:pb-0">email@kata.design</p>
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
  );
};

export default Contact;
