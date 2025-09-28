"use client";

import { useServices } from "@/hooks/useServices";
import { Edit, Trash2, X, Check } from "lucide-react";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import CustomInput from "@/components/forms/inputs/CustomInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CustomTextarea from "@/components/forms/inputs/CustomTextarea";
import ToggleLanguage from "../ToggleLanguage";

const PogledajUsluge = () => {
  const { data: services, isLoading, isError } = useServices();
  const queryClient = useQueryClient();

  const [language, setLanguage] = useState("mn");
  const [editingId, setEditingId] = useState(null);
  const [showModalId, setShowModalId] = useState(null);
  const [editValues, setEditValues] = useState({
    titleMn: "",
    titleEn: "",
    contentMn: "",
    contentEn: "",
  });

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "mn" ? "en" : "mn"));
  };

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete("/api/services", { data: { id } });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      alert("Usluga obrisana!");
    },
    onError: () => {
      alert("Greška pri brisanju usluge!");
    },
  });

  const editMutation = useMutation({
    mutationFn: async (service) => {
      const { data } = await axios.put("/api/services", service);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
      alert("Usluga izmijenjena!");
    },
    onError: () => {
      alert("Greška pri izmjeni usluge!");
    },
  });

  if (isLoading) return <p>Učitavanje...</p>;
  if (isError) return <p>Greška pri učitavanju usluga</p>;

  return (
    <div>
      <ToggleLanguage onClick={toggleLanguage} language={language} />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative group rounded p-6 shadow-md bg-white/5"
          >
            {editingId === service.id ? (
              <div className="flex flex-col gap-2">
                <CustomInput
                  label="Naslov (MN)"
                  value={editValues.titleMn}
                  onChange={(e) =>
                    setEditValues((prev) => ({
                      ...prev,
                      titleMn: e.target.value,
                    }))
                  }
                />
                <CustomInput
                  label="Naslov (EN)"
                  value={editValues.titleEn}
                  onChange={(e) =>
                    setEditValues((prev) => ({
                      ...prev,
                      titleEn: e.target.value,
                    }))
                  }
                />
                <CustomTextarea
                  label="Sadržaj (MN)"
                  value={editValues.contentMn}
                  onChange={(e) =>
                    setEditValues((prev) => ({
                      ...prev,
                      contentMn: e.target.value,
                    }))
                  }
                />
                <CustomTextarea
                  label="Sadržaj (EN)"
                  value={editValues.contentEn}
                  onChange={(e) =>
                    setEditValues((prev) => ({
                      ...prev,
                      contentEn: e.target.value,
                    }))
                  }
                />
              </div>
            ) : (
              <>
                <h3 className="text-lg font-semibold mb-2">
                  {language === "mn" ? service.titleMn : service.titleEn}
                </h3>
                <p className="text-sm leading-relaxed">
                  {language === "mn" ? service.contentMn : service.contentEn}
                </p>
              </>
            )}

            {showModalId === service.id && (
              <Modal
                modalContent={
                  <span>
                    Da li ste sigurni da želite da izbrišete uslugu{" "}
                    <span className="font-bold">
                      {language === "mn" ? service.titleMn : service.titleEn}
                    </span>
                    ?
                  </span>
                }
                setShowModal={setShowModalId}
                onDelete={() => deleteMutation.mutate(service.id)}
              />
            )}

            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
              {editingId === service.id ? (
                <>
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
                        ...editValues,
                      });
                      setEditingId(null);
                    }}
                    className="p-2 rounded-full bg-green-600 text-white cursor-pointer"
                  >
                    <Check size={18} />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setEditingId(service.id);
                      setEditValues({
                        titleMn: service.titleMn,
                        titleEn: service.titleEn,
                        contentMn: service.contentMn,
                        contentEn: service.contentEn,
                      });
                    }}
                    className="p-2 rounded-full bg-yellow-500 text-white cursor-pointer"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => setShowModalId(service.id)}
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

export default PogledajUsluge;
