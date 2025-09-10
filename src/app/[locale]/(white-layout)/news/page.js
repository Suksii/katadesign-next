import Image from "next/image";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { formatDateParts } from "@/components/utils/helpers";
import { newsData } from "@/components/utils/constants";

export default function NewsPage() {
  const t = useTranslations("NewsPage");

  return (
    <PagesWrapper title={t("novosti")}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white flex flex-col">
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
    </PagesWrapper>
  );
}
