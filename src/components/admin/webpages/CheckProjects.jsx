"use client";

import { useProjects } from "@/hooks/useProjects";
import { Edit, Trash2 } from "lucide-react";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import ToggleLanguage from "../ToggleLanguage";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

const CheckProjects = () => {
  const { data: projects, isLoading, isError } = useProjects();
  const queryClient = useQueryClient();
  const [language, setLanguage] = useState("mn");
  const [showModalId, setShowModalId] = useState(null);

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete("/api/projects", { data: { id } });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      alert("Projekat obrisan!");
    },
    onError: () => alert("Greška pri brisanju projekta!"),
  });

  if (isLoading) return <p>Učitavanje...</p>;
  if (isError) return <p>Greška pri učitavanju projekata</p>;

  return (
    <div>
      <ToggleLanguage onClick={() => setLanguage((p) => (p === "mn" ? "en" : "mn"))} language={language} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {projects.map((project) => (
          <div key={project.id} className="relative group bg-white shadow-md rounded overflow-hidden">
            {showModalId === project.id && (
              <Modal
                modalContent={
                  <span>
                    Da li ste sigurni da želite obrisati projekat{" "}
                    <span className="font-bold">{project.titleMn}</span>?
                  </span>
                }
                setShowModal={setShowModalId}
                onDelete={() => {
                  deleteMutation.mutate(project.id);
                  setShowModalId(null);
                }}
              />
            )}

            <div className="relative w-full h-[200px]">
              <Image
                src={project.mainProjectImg}
                alt={project.titleMn}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {language === "mn" ? project.titleMn : project.titleEn}
              </h3>
              <p className="text-sm text-gray-500">
                {language === "mn" ? project.category?.titleMn : project.category?.titleEn}
              </p>
            </div>

            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
              <Link
                href={`/admin/izmijeni-projekat/${project.slug}`}
                className="p-2 rounded-full bg-yellow-500 text-white"
              >
                <Edit size={18} />
              </Link>
              <button
                onClick={() => setShowModalId(project.id)}
                className="p-2 rounded-full bg-red-600 text-white cursor-pointer"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckProjects;
