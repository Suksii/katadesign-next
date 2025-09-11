"use client";

import CustomInput from "@/components/forms/inputs/CustomInput";
import { Edit, Trash2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Modal from "./Modal";

const Categories = () => {
  const t = useTranslations("ProjectPage");
  const [showInput, setShowInput] = useState(null);
  const [showModal, setShowModal] = useState(null);

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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative group rounded-xl p-6 shadow-md bg-white/5"
        >
          {showInput === category ? (
            <CustomInput type="text" defaultValue={category} />
          ) : (
            <p>{category}</p>
          )}
          {showModal === category && (
            <Modal
              modalContent={
                <span>
                  Da li ste sigurni da želite da izbrišete kategoriju
                  <span className="font-bold"> {category}</span>?
                </span>
              }
              setShowModal={setShowModal}
            />
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
                <button
                  onClick={() => setShowModal(category)}
                  className="p-2 rounded-full bg-red-600 text-white cursor-pointer"
                >
                  <Trash2 size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
