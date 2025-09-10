"use client";

import Image from "next/image";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const NewsPage = () => {
  const t = useTranslations("NewsPage");

  const newsData = [
    {
      title: t("brskut_naslov"),
      subtitle: t("brskut_teaser"),
      main_paragraphs: t.raw("brskut_desc_1"),
      paragraphs: t.raw("brskut_desc_2"),
      banner_image: { src: "/1.jpg", alt: "1", width: 400, height: 800 },
      main_images: [
        { src: "/1.jpg", alt: "1", width: 400, height: 800 },
        { src: "/2.jpg", alt: "2", width: 400, height: 800 },
      ],
      slider_images: [
        { src: "/1.jpg", alt: "1", width: 400, height: 800 },
        { src: "/1.jpg", alt: "2", width: 400, height: 800 },
        { src: "/1.jpg", alt: "3", width: 400, height: 800 },
        { src: "/1.jpg", alt: "4", width: 400, height: 800 },
        { src: "/1.jpg", alt: "5", width: 400, height: 800 },
        { src: "/1.jpg", alt: "6", width: 400, height: 800 },
      ],
      date: "28.08.2025",
      slug: "brskut",
    },
  ];

  const formatDateParts = (dateStr) => {
    const [day, month, year] = dateStr.split(".");
    return {
      month: month.padStart(2, "0"),
      year: year.slice(-2),
    };
  };

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
                alt={news.title}
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
                  {news.title}
                </Link>
                <p className="text-lg line-clamp-3 md:line-clamp-4">
                  {news.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PagesWrapper>
  );
};

export default NewsPage;
