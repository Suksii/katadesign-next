import { Link } from "@/i18n/navigation";
import { Edit, Trash2 } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const PogledajUsluge = () => {
  const t = useTranslations("ServicesPage");

  const services = [
    {
      id: 1,
      name: t("kreativni_koncepti_i_umjetnička_direkcija.title"),
      description: t("kreativni_koncepti_i_umjetnička_direkcija.description"),
    },
    {
      id: 2,
      name: t("brending_i_stratesko_pozicioniranje.title"),
      description: t("brending_i_stratesko_pozicioniranje.description"),
    },
    {
      id: 3,
      name: t("vizuelni_identitet_i_dizajn_sistemi.title"),
      description: t("vizuelni_identitet_i_dizajn_sistemi.description"),
    },
    {
      id: 4,
      name: t("naming_i_komunikacijska_arhitektura.title"),
      description: t("naming_i_komunikacijska_arhitektura.description"),
    },
    {
      id: 5,
      name: t("produkt_i_dizajn_ambalaze.title"),
      description: t("produkt_i_dizajn_ambalaze.description"),
    },
    {
      id: 6,
      name: t("editorial_i_dizajn_publikacija.title"),
      description: t("editorial_i_dizajn_publikacija.description"),
    },
    {
      id: 7,
      name: t("prostorni_i_ambijentalni_dizajn.title"),
      description: t("prostorni_i_ambijentalni_dizajn.description"),
    },
    {
      id: 8,
      name: t("primijenjena_umjetnost.title"),
      description: t("primijenjena_umjetnost.description"),
    },
    {
      id: 9,
      name: t("digitalni_dizajn_i_razvoj.title"),
      description: t("digitalni_dizajn_i_razvoj.description"),
    },
    {
      id: 10,
      name: t("fotografija_i_video_produkcija.title"),
      description: t("fotografija_i_video_produkcija.description"),
    },
    {
      id: 11,
      name: t("animacija_i_pokretna_grafika.title"),
      description: t("animacija_i_pokretna_grafika.description"),
    },
    {
      id: 12,
      name: t("imerzivna_iskustva.title"),
      description: t("imerzivna_iskustva.description"),
    },
    {
      id: 13,
      name: t("dogadjaji_i_iskustveni_dizajn.title"),
      description: t("dogadjaji_i_iskustveni_dizajn.description"),
    },
  ];
  return (
    <>
      <h1>Usluge</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group rounded p-6 shadow-md"
          >
            <div className="absolute top-3 right-3 w-full flex gap-2 justify-end opacity-0 -translate-y-full group-hover:opacity-100 transition-all duration-200 group-hover:translate-y-0 z-10">
              <Link
                href={`/izmijeni-uslugu/${service.id}`}
                className="p-2 rounded-full bg-yellow-500 text-yellow-100"
              >
                <Edit />
              </Link>
              <Link
                href={"/"}
                className="p-2 rounded-full bg-red-600 text-red-100"
              >
                <Trash2 />
              </Link>
            </div>

            <h3 className="text-lg font-semibold mb-2">
              <span>{service.id}. </span>
              {service.name}
            </h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PogledajUsluge;
