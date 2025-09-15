"use client";

import CustomInput from "@/components/forms/inputs/CustomInput";
import { Edit, Trash2, X } from "lucide-react";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Modal from "./Modal";
import { useCategories } from "@/hooks/useCategories";

const Categories = () => {
  const t = useTranslations("ProjectPage");
  const [editingId, setEditingId] = useState(null);
  const [showModalId, setShowModalId] = useState(null);
  const [language, setLanguage] = useState("mn"); // "mn" ili "en"

  const { data: categories, isLoading, error } = useCategories();

  if (isLoading) return <p>Učitavanje...</p>;
  if (error) return <p>Greška pri učitavanju kategorija</p>;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "mn" ? "en" : "mn"));
  };

  return (
    <div>
      {/* Switcher jezika */}
      <div className="mb-6 flex items-center gap-4">
        <span className="font-semibold">Jezik:</span>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-gray-700 text-white rounded cursor-pointer uppercase"
        >
          {language === "mn" ? "mn" : "en"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group rounded-xl p-6 shadow-md bg-white/5"
          >
            {editingId === category.id ? (
              <CustomInput
                type="text"
                defaultValue={language === "mn" ? category.titleMn : category.titleEn}
              />
            ) : (
              <p>{language === "mn" ? category.titleMn : category.titleEn}</p>
            )}

            {showModalId === category.id && (
              <Modal
                modalContent={
                  <span>
                    Da li ste sigurni da želite da izbrišete kategoriju{" "}
                    <span className="font-bold">
                      {language === "mn" ? category.titleMn : category.titleEn}
                    </span>
                    ?
                  </span>
                }
                setShowModal={setShowModalId}
              />
            )}

            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
              {editingId === category.id ? (
                <button
                  onClick={() => setEditingId(null)}
                  className="p-2 rounded-full bg-yellow-500 text-white cursor-pointer"
                >
                  <X size={18} />
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setEditingId(category.id)}
                    className="p-2 rounded-full bg-yellow-500 text-white cursor-pointer"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => setShowModalId(category.id)}
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
    </div>
  );
};

export default Categories;
