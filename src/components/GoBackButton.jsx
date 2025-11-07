"use client";

import { useRouter } from "@/i18n/navigation";
import ArrowLeft from "@/icons/ArrowLeft";
import { useTranslations } from "next-intl";

const GoBackButton = () => {
  const router = useRouter();
  const t = useTranslations('ProjectPage');

  return (
    <button
      type="button"
      className="flex items-center gap-1 cursor-pointer text-gray-600"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      <p className="text-xs sm:text-base text-nowrap">{t('nazad_na_sve')}</p>
    </button>
  );
};

export default GoBackButton;
