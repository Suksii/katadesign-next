"use client";

import Image from "next/image";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const newsData = [
  {
    title: "Brskut – Tradicionalno i savremeno.",
    subtitle:
      "Brskut je brend koji spaja tradiciju i inovaciju u organskim delicijama i prirodnim proizvodima iz Crne Gore. Naš tim je kreirao kompletan identitet – od imena i ambalaže do digitalnog prostora – kako bi svaki proizvod postao priča o ukusu, kvalitetu i emociji.",
    main_paragraphs: [
      "Brskut je crnogorski brend organskih delikatesa i prirodnih proizvoda koji spajaju tradiciju i inovaciju. Njihova ponuda – od džemova i meda, preko sirupa, rakija i turšija, do suhomesnatih proizvoda i prirodne kozmetike – svaki artikal čini malim ambasadorom ukusa i mirisa Crne Gore. Iako raznolika, njihova priča ima zajednički imenitelj: prirodnost, pažnja i domaći ukus.",
      "Naš zadatak bio je da tu raznolikost pretočimo u prepoznatljiv vizuelni identitet. Krenuli smo od samog imena, razvili kreativni pravac i art direkciju, oblikovali branding i dizajn ambalaže, ilustrovali motive koji prate proizvode, osmislili komunikaciju kroz riječi i kreirali digitalni prostor – web sajt koji sve povezuje u jednu cjelinu. Svaki sloj dizajna građen je s namjerom da naglasi prirodni kvalitet i posebnost proizvoda, ali i da stvori emotivnu povezanost sa ljudima, pričajući priču o autentičnom ukusu Crne Gore.",
      "Brskut pokazuje kako dizajn može biti most između prošlosti i budućnosti, između tradicije i inovacije. Pažljivo oblikovana strategija, kreativni impuls i promišljena naracija zajedno stvaraju vizuelni identitet koji je više od estetike – on postaje iskustvo, gradi povjerenje i prenosi vrijednosti brenda na iskren i savremen način. ",
    ],
    paragraphs: [
      "U procesu smo razmišljali o tome kako tradiciju predstaviti kroz savremen dizajn, kako bogatstvo domaćih recepata i sastojaka dobije vizuelni izraz koji je jednako snažan kao i sam proizvod. Ambalaža i ilustracije postale su produžetak priče o zemlji iz koje brend dolazi, dok je digitalna platforma osmišljena da korisnicima pruži intuitivno i estetski privlačno iskustvo.",
      "Za nas je Brskut podsjetnik zašto radimo ono što radimo: da pomažemo ambicioznim brendovima da rastu, izraze se i pronađu svoje mjesto na tržištu, ostavljajući utisak koji traje.",
    ],
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

const NewsPage = () => {
  const t = useTranslations("NewsPage");

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
