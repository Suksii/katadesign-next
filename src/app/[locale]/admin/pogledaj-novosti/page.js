import { newsData } from "@/components/utils/constants";
import { formatDateParts } from "@/components/utils/helpers";
import { Link } from "@/i18n/navigation";
import { Edit, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const PogledajNovosti = () => {
  const t = useTranslations("NewsPage");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsData.map((news) => (
        <div key={news.id} className="bg-white flex flex-col relative group">
          <div className="absolute top-0 w-full flex justify-between opacity-0 -translate-y-full group-hover:opacity-100 transition-all duration-200 group-hover:translate-y-0 z-10">
            <Link
              href={"/"}
              className="p-4 rounded-full bg-yellow-700/50 text-yellow-100"
            >
              <Edit />
            </Link>
            <Link
              href={"/"}
              className="p-4 rounded-full bg-red-700/50 text-red-100"
            >
              <Trash2 />
            </Link>
          </div>

          <Link
            href={`/${t("novosti_slug")}/${news.slug}`}
            className="relative w-full h-[300px] overflow-hidden"
          >
            <Image
              src={news.banner_image}
              alt={t(news.titleKey)}
              fill
              className="object-cover"
            />
          </Link>

          <div className="py-2 flex flex-col md:flex-row gap-4">
            <div className="text-sm text-gray-600">
              <p className="block md:hidden">{news.date}</p>
              <div className="hidden md:flex flex-col items-center justify-center leading-none">
                <span className="text-2xl font-semibold tracking-wide">
                  {formatDateParts(news.date).month}
                </span>
                <span className="w-6 border-b border-gray-800 my-1" />
                <span className="text-lg tracking-wide">
                  {formatDateParts(news.date).year}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href={`/${t("novosti_slug")}/${news.slug}`}
                className="text-xl font-medium"
              >
                {t(news.titleKey)}
              </Link>
              <p className="text-lg line-clamp-3 md:line-clamp-4">
                {t(news.subtitleKey)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PogledajNovosti;
