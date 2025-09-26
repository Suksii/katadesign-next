"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const Services = () => {
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

  const [openedItemId, setIsOpenedItemId] = useState(null);

  const handleOpen = (id) => {
    if (id === openedItemId) {
      setIsOpenedItemId(null);
    } else {
      setIsOpenedItemId(id);
    }
  };

  return (
    <div>
      {services.map((service) => {
        return (
          <div
            key={service.id}
            className={`py-6 ${
              service.id !== services.length ? "border-b border-gray-500" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-2xl tracking-wide py-4 pr-4">
                {service.name}
              </h3>
              {service.description && (
                <button
                  onClick={() => handleOpen(service.id)}
                  className="relative w-8 h-8 flex items-center justify-center cursor-pointer shrink-0"
                >
                  <span className="absolute w-6 h-[2px] bg-gray-400 transition-transform duration-300"></span>
                  <span
                    className={`absolute w-[2px] h-6 bg-gray-400 transition-transform duration-300 ${
                      openedItemId === service.id ? "scale-y-0" : "scale-y-100"
                    }`}
                  ></span>
                </button>
              )}
            </div>
            <p
              className={`overflow-hidden transition-all duration-300 text-lg text-gray-300 pr-12 ${
                openedItemId === service.id ? "max-h-40" : "max-h-0"
              }`}
            >
              {service.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
