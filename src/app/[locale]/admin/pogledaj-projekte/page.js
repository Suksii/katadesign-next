import { newsData } from "@/components/utils/constants";
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
        <Link
          href={"/"}
          key={news.id}
          className="bg-white flex flex-col relative group"
        >
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

          <div className="relative w-full h-[300px] overflow-hidden">
            <Image
              src={news.banner_image}
              alt={t(news.titleKey)}
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-xl text-center font-medium">
            {t(news.titleKey)}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default PogledajNovosti;
