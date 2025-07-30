"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { useTransition } from "react";

const LocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();

  console.log("Current locale:", locale);
  const nextLocale = locale === "mn" ? "en" : "mn";
  console.log("Next locale:", nextLocale);
  const toggleLocale = () => {
    startTransition(() => {
      router.replace(
        {
          pathname,
          params,
        },
        { locale: nextLocale }
      );
    });
  };
  return (
    <button
      disabled={isPending}
      onClick={toggleLocale}
      className="z-10 uppercase font-medium cursor-pointer"
    >
      {locale}
    </button>
  );
};

export default LocaleSwitcher;
