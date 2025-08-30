"use client";

import { useRouter } from "@/i18n/navigation";
import ArrowLeft from "@/icons/ArrowLeft";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      <p className="text-sm sm:text-base text-nowrap">Nazad na sve</p>
    </button>
  );
};

export default GoBackButton;
