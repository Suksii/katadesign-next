"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Notification from "./Notification";

const ContactSection = () => {
  const t = useTranslations("ContactPage");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [errors, setErrors] = useState({});
  const [isOpened, setIsOpened] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = t("errors.ime");
    if (!formData.email.trim()) {
      newErrors.email = t("errors.mail_prazan");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("errors.mail_format");
    }
    if (!formData.message.trim()) newErrors.message = t("errors.poruka");

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ message: "", type: "" });

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    setErrors({});
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setFormData({
          fullName: "",
          email: "",
          company: "",
          topic: "",
          message: "",
        });
        setStatus({
          message: data.message || t("notifications.success_poruka"),
          type: "success",
        });
      } else {
        setStatus({
          message: data.error || t("notifications.error_poruka"),
          type: "error",
        });
      }
    } catch (err) {
      setStatus({ message: t("notifications.server_error"), type: "error" });
    } finally {
      setIsOpened(true);
      setLoading(false);
    }
  };

  return (
    <form className="w-full lg:w-[80%] mx-auto" onSubmit={handleSubmit}>
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
          {errors.fullName && (
            <span className="text-red-500 text-sm">{errors.fullName}</span>
          )}
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
          {errors.topic && (
            <span className="text-red-500 text-sm">{errors.topic}</span>
          )}
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
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
      </div>
      <hr className="my-6 h-0.5 bg-black" />
      <div className="flex flex-col gap-1 mb-2">
        <label className="uppercase font-medium">{t("poruka")}</label>
        <textarea
          placeholder={t("pisite_ovdje")}
          name="message"
          value={formData.message}
          className="min-h-36 max-h-96 focus:outline-none bg-gray-100 p-2"
          onChange={handleChange}
        />

        {errors.message && (
          <span className="text-red-500 text-sm">{errors.message}</span>
        )}
      </div>
      {isOpened && (
        <Notification
          type={status.type}
          message={status.message}
          setIsOpened={setIsOpened}
        />
      )}
      <button
        disabled={loading}
        className="border border-black py-1.5 min-w-28 cursor-pointer font-medium tracking-wide hover:bg-black hover:text-white transition-all ease-linear duration-200"
      >
        {loading ? t("notifications.slanje") : t("posalji")}
      </button>
    </form>
  );
};

export default ContactSection;
