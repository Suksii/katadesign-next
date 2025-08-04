"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

const ContactSection = () => {
  const t = useTranslations("ContactPage");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSuccess = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="w-full lg:w-[80%] mx-auto" onSubmit={handleSuccess}>
      <p className="text-lg pb-6">{t("pozdravi_nas")}</p>
      <div className="flex md:flex-col lg:flex-row items-center gap-2 w-full">
        <div className="flex flex-col gap-0.5 w-full">
          <label className="uppercase font-medium">{t("ime")}</label>
          <input
            placeholder={t("ime_placeholder")}
            name="fullName"
            value={formData.fullName}
            className="focus:outline-none py-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0.5 w-full">
          <label className="uppercase font-medium">{t("tema")}</label>
          <input
            placeholder={t("tema_placeholder")}
            name="topic"
            value={formData.topic}
            className="focus:outline-none py-1"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex md:flex-col lg:flex-row items-center gap-2 w-full">
        <div className="flex flex-col gap-0.5 w-full">
          <label className="uppercase font-medium">{t("preduzece")}</label>
          <input
            placeholder={t("preduzece_placeholder")}
            name="company"
            value={formData.company}
            className="focus:outline-none py-1"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-0.5 w-full">
          <label className="uppercase font-medium">{t("mail")}</label>
          <input
            placeholder={t("mail_placeholder")}
            name="email"
            value={formData.email}
            className="focus:outline-none py-1"
            onChange={handleChange}
          />
        </div>
      </div>
      <hr className="my-6 h-0.5 bg-black" />
      <div className="flex flex-col gap-1">
        <label className="uppercase font-medium">{t("poruka")}</label>
        <textarea
          placeholder={t("pisite_ovdje")}
          name="message"
          value={formData.message}
          className="min-h-36 max-h-96 bg-gray-100 p-2"
          onChange={handleChange}
        />
      </div>
      <button className="my-4 border border-black py-1.5 min-w-28 cursor-pointer hover:bg-black hover:text-white transition-all ease-linear duration-200">
        {t("posalji")}
      </button>
    </form>
  );
};

export default ContactSection;
