"use client";

import CustomInput from "@/components/forms/inputs/CustomInput";
import { Check, Edit, Trash2, X } from "lucide-react";
import React, { useState } from "react";
import Modal from "./Modal";
import { useCategories } from "@/hooks/useCategories";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Categories = () => {
  const [editingId, setEditingId] = useState(null);
  const [showModalId, setShowModalId] = useState(null);
  const [language, setLanguage] = useState("mn");
  const [editValues, setEditValues] = useState({ titleMn: "", titleEn: "" });

  const queryClient = useQueryClient();
  const { data: categories, isLoading, error } = useCategories();

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete("/api/categories", { data: { id } });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      alert("Kategorija obrisana!");
    },
    onError: (err) => {
      console.error(err);
      alert("Greška pri brisanju kategorije!");
    },
  });

  const editMutation = useMutation({
    mutationFn: async ({ id, titleMn, titleEn }) => {
      const { data } = await axios.put("/api/categories", {
        id,
        titleMn,
        titleEn,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      alert("Kategorija izmijenjena!");
    },
    onError: (err) => {
      console.error(err);
      alert("Greška pri izmjeni kategorije!");
    },
  });

  if (isLoading) return <p>Učitavanje...</p>;
  if (error) return <p>Greška pri učitavanju kategorija</p>;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "mn" ? "en" : "mn"));
  };

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <span className="font-semibold">Jezik:</span>
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 bg-gray-700 text-white rounded cursor-pointer uppercase"
        >
          {language}
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group rounded-xl p-6 shadow-md bg-white/5"
          >
            {editingId === category.id ? (
              <div className="flex flex-col gap-2">
                <CustomInput
                  value={editValues.titleMn}
                  onChange={(e) =>
                    setEditValues((prev) => ({
                      ...prev,
                      titleMn: e.target.value,
                    }))
                  }
                  label="Naziv MN"
                />
                <CustomInput
                  value={editValues.titleEn}
                  onChange={(e) =>
                    setEditValues((prev) => ({
                      ...prev,
                      titleEn: e.target.value,
                    }))
                  }
                  label="Naziv EN"
                />
              </div>
            ) : (
              <p>{language === "mn" ? category.titleMn : category.titleEn}</p>
            )}

            {showModalId === category.id && (
              <Modal
                modalContent={
                  <span>
                    Da li ste sigurni da želite da izbrišete kategoriju{" "}
                    <span className="font-bold pl-1">
                      {language === "mn" ? category.titleMn : category.titleEn}
                    </span>
                    ?
                  </span>
                }
                setShowModal={setShowModalId}
                onDelete={() => deleteMutation.mutate(category.id)}
              />
            )}

            <div className="absolute top-0 right-0 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
              {editingId === category.id ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setEditingId(null)}
                    className="p-2 rounded-full bg-yellow-500 text-white cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                  <button
                    onClick={() => {
                      editMutation.mutate({
                        id: editingId,
                        titleMn: editValues.titleMn,
                        titleEn: editValues.titleEn,
                      })
                      setEditingId(null)
                    }
                  }
                    className="p-2 rounded-full bg-green-600 text-white cursor-pointer"
                  >
                    <Check size={18} />
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setEditingId(category.id);
                      setEditValues({
                        titleMn: category.titleMn,
                        titleEn: category.titleEn,
                      });
                    }}
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
