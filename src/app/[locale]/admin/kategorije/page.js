"use client";

import CustomInput from "@/components/forms/inputs/CustomInput";
import { Link } from "@/i18n/navigation";
import { Edit, Trash2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const Kategorije = () => {
  const t = useTranslations("ProjectPage");
  const [showInput, setShowInput] = useState(null);

  const categories = [
    t("kategorije.sve"),
    t("kategorije.identitet"),
    t("kategorije.komunikacije"),
    t("kategorije.digital"),
    t("kategorije.film_mediji"),
    t("kategorije.produkti"),
    t("kategorije.prostori"),
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Kategorije</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group rounded-xl p-6 shadow-md bg-white/5"
          >
            {showInput === category ? (
              <CustomInput type="text" value={category} />
            ) : (
              <p>{category}</p>
            )}

            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
              {showInput === category ? (
                <button
                  onClick={() => setShowInput(null)}
                  className="p-2 rounded-full bg-yellow-500 text-white cursor-pointer"
                >
                  <X size={18} />
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setShowInput(category)}
                    className="p-2 rounded-full bg-yellow-500 text-white cursor-pointer"
                  >
                    <Edit size={18} />
                  </button>
                  <Link
                    href="/"
                    className="p-2 rounded-full bg-red-600 text-white"
                  >
                    <Trash2 size={18} />
                  </Link>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kategorije;
