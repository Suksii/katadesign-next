"use client";

import Image from "next/image";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";

const newsData = [
  {
    id: 1,
    title: "Novi projekat u Podgorici",
    date: "16.08.2025",
    description:
      "Grad Podgorica započinje novi infrastrukturni projekat koji će poboljšati promet u centru grada.",

      
    mainImage: "/pexels-1.jpg",
  },
  {
    id: 2,
    title: "Digitalizacija javne uprave",
    date: "14.08.2025",
    description:
      "Novi plan digitalizacije javne uprave u Crnoj Gori donosi brže i transparentnije usluge za građane.",
    mainImage: "/pexels-2.jpg",
  },
  {
    id: 3,
    title: "Energetska efikasnost u firmama",
    date: "12.08.2025",
    description:
      "Vlada podstiče firme da primjene energetski efikasna rješenja kroz subvencije i grantove.",
    mainImage: "/pexels-3.jpg",
  },
  {
    id: 4,
    title: "Festival savremene umjetnosti",
    date: "10.08.2025",
    description:
      "Podgorica domaćin festivala savremene umjetnosti sa radionicama, izložbama i performansima.",
    mainImage: "/pexels-4.jpg",
  },
  {
    id: 5,
    title: "Tehnološki startup u Crnoj Gori",
    date: "08.08.2025",
    description:
      "Mladi poduzetnici lansirali startup fokusiran na AI rješenja za lokalno tržište.",
    mainImage: "/pexels-5.jpg",
  },
  {
    id: 6,
    title: "Održavanje lokalnih puteva",
    date: "06.08.2025",
    description:
      "Radovi na održavanju lokalnih puteva u toku, sa fokusom na sigurnost saobraćaja.",
    mainImage: "/pexels-6.jpg",
  },
];

const NewsPage = () => {
  const t = useTranslations("NewsPage");
  return (
    <PagesWrapper title={t("novosti")}>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white flex flex-col">
            <div className="relative w-full h-[300px] overflow-hidden">
              <Image
                src={news.mainImage}
                alt={news.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="py-2 flex flex-col md:flex-row gap-4">
              <p>{news.date}</p>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-medium">{news.title}</h3>
                <p className="text-lg line-clamp-3 md:line-clamp-4">
                  {news.description}
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