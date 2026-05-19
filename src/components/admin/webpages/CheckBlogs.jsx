"use client";

import { useBlogs } from "@/hooks/useBlogs";
import { Edit, Trash2 } from "lucide-react";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import ToggleLanguage from "../ToggleLanguage";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { formatDateParts } from "@/components/utils/helpers";

const CheckBlogs = () => {
  const { data: blogs, isLoading, isError } = useBlogs();
  const queryClient = useQueryClient();
  const [language, setLanguage] = useState("mn");
  const [showModalId, setShowModalId] = useState(null);

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const { data } = await axios.delete("/api/blog", { data: { id } });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      alert("Blog obrisan!");
    },
    onError: () => alert("Greška pri brisanju bloga!"),
  });

  if (isLoading) return <p>Učitavanje...</p>;
  if (isError) return <p>Greška pri učitavanju blogova</p>;

  return (
    <div>
      <ToggleLanguage onClick={() => setLanguage((p) => (p === "mn" ? "en" : "mn"))} language={language} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative group bg-white shadow-md rounded overflow-hidden">
            {showModalId === blog.id && (
              <Modal
                modalContent={
                  <span>
                    Da li ste sigurni da želite obrisati novost{" "}
                    <span className="font-bold">{blog.titleMn}</span>?
                  </span>
                }
                setShowModal={setShowModalId}
                onDelete={() => {
                  deleteMutation.mutate(blog.id);
                  setShowModalId(null);
                }}
              />
            )}

            <div className="relative w-full h-[200px]">
              <Image src={blog.bannerImage} alt={blog.titleMn} fill className="object-cover" />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg line-clamp-2">
                {language === "mn" ? blog.titleMn : blog.titleEn}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {formatDateParts(blog.date).month} {formatDateParts(blog.date).year}
              </p>
            </div>

            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
              <Link
                href={`/admin/izmijeni-novost/${blog.slug}`}
                className="p-2 rounded-full bg-yellow-500 text-white"
              >
                <Edit size={18} />
              </Link>
              <button
                onClick={() => setShowModalId(blog.id)}
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

export default CheckBlogs;
