"use client";

import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CustomInput from "./inputs/CustomInput";
import CustomTextarea from "./inputs/CustomTextarea";
import CustomButton from "../buttons/CustomButton";
import GalleryLayoutBuilder, { initGalleryLayout, serializeGalleryLayout } from "./GalleryLayoutBuilder";
import { Plus, Trash2 } from "lucide-react";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/č/g, "c").replace(/ć/g, "c").replace(/š/g, "s")
    .replace(/ž/g, "z").replace(/đ/g, "dj")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const SectionLabel = ({ children }) => (
  <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 border-b border-gray-200 pb-2 mt-6 mb-4">
    {children}
  </h3>
);

const DynamicList = ({ label, items, onChange, placeholder = "Unesite stavku" }) => {
  const add = () => onChange([...items, ""]);
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const update = (i, val) => onChange(items.map((v, idx) => (idx === i ? val : v)));

  return (
    <div>
      <label className="block mb-2 text-sm font-semibold uppercase tracking-wider text-gray-800">
        {label}
      </label>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              value={item}
              onChange={(e) => update(i, e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-4 py-3 border border-gray-700 placeholder-gray-400 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-500 hover:text-red-700">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={add}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mt-1"
        >
          <Plus size={14} /> Dodaj stavku
        </button>
      </div>
    </div>
  );
};

const DynamicImageList = ({ label, items, onChange }) => {
  const add = () => onChange([...items, { src: "", alt: "" }]);
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const update = (i, field, val) =>
    onChange(items.map((v, idx) => (idx === i ? { ...v, [field]: val } : v)));

  return (
    <div>
      <label className="block mb-2 text-sm font-semibold uppercase tracking-wider text-gray-800">
        {label}
      </label>
      <div className="flex flex-col gap-3">
        {items.map((img, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              value={img.src}
              onChange={(e) => update(i, "src", e.target.value)}
              placeholder="/folder/slika.jpg"
              className="flex-1 px-4 py-3 border border-gray-700 placeholder-gray-400 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              value={img.alt}
              onChange={(e) => update(i, "alt", e.target.value)}
              placeholder="Alt tekst"
              className="w-32 px-4 py-3 border border-gray-700 placeholder-gray-400 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-500 hover:text-red-700">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={add}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mt-1"
        >
          <Plus size={14} /> Dodaj sliku
        </button>
      </div>
    </div>
  );
};

const DynamicTeam = ({ items, onChange }) => {
  const add = () => onChange([...items, { name: "", role: "" }]);
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const update = (i, field, val) =>
    onChange(items.map((v, idx) => (idx === i ? { ...v, [field]: val } : v)));

  return (
    <div>
      <label className="block mb-2 text-sm font-semibold uppercase tracking-wider text-gray-800">
        Tim
      </label>
      <div className="flex flex-col gap-3">
        {items.map((member, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input
              value={member.name}
              onChange={(e) => update(i, "name", e.target.value)}
              placeholder="Ime i prezime"
              className="flex-1 px-4 py-3 border border-gray-700 placeholder-gray-400 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              value={member.role}
              onChange={(e) => update(i, "role", e.target.value)}
              placeholder="Uloga"
              className="flex-1 px-4 py-3 border border-gray-700 placeholder-gray-400 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-500 hover:text-red-700">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={add}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mt-1"
        >
          <Plus size={14} /> Dodaj člana tima
        </button>
      </div>
    </div>
  );
};

const emptyForm = {
  slug: "",
  categoryId: "",
  titleMn: "",
  titleEn: "",
  subTitleMn: "",
  subTitleEn: "",
  descriptionMn: "",
  descriptionEn: "",
  projectDescMn: "",
  projectDescEn: "",
  listMn: [],
  listEn: [],
  team: [],
  paragraphsMn: [],
  paragraphsEn: [],
  mainProjectImg: "",
  mainBannerImg: "",
  galleryImages: [],
  sliderImages: [],
  galleryLayout: [],
};

export default function ProjectForm({ initialData }) {
  const isEdit = !!initialData;

  const [form, setForm] = useState(() =>
    initialData
      ? {
          slug: initialData.slug,
          categoryId: String(initialData.categoryId),
          titleMn: initialData.titleMn,
          titleEn: initialData.titleEn,
          subTitleMn: initialData.subTitleMn,
          subTitleEn: initialData.subTitleEn,
          descriptionMn: initialData.descriptionMn,
          descriptionEn: initialData.descriptionEn,
          projectDescMn: initialData.projectDescMn,
          projectDescEn: initialData.projectDescEn,
          listMn: initialData.listMn || [],
          listEn: initialData.listEn || [],
          team: initialData.team || [],
          paragraphsMn: initialData.paragraphsMn || [],
          paragraphsEn: initialData.paragraphsEn || [],
          mainProjectImg: initialData.mainProjectImg,
          mainBannerImg: initialData.mainBannerImg,
          galleryImages: initialData.galleryImages || [],
          sliderImages: initialData.sliderImages || [],
          galleryLayout: initGalleryLayout(initialData.galleryLayout),
        }
      : emptyForm
  );

  const queryClient = useQueryClient();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get("/api/categories");
      return data;
    },
  });

  const set = (field) => (val) =>
    setForm((prev) => ({ ...prev, [field]: val }));

  const setInput = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleTitleMnChange = (e) => {
    const val = e.target.value;
    setForm((prev) => ({
      ...prev,
      titleMn: val,
      slug: prev.slug === slugify(prev.titleMn) ? slugify(val) : prev.slug,
    }));
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const galleryLayout = serializeGalleryLayout(form.galleryLayout);

      const payload = {
        ...form,
        categoryId: Number(form.categoryId),
        sliderImages: form.sliderImages.length ? form.sliderImages : null,
        galleryLayout,
      };

      if (isEdit) {
        const { data } = await axios.put("/api/projects", { id: initialData.id, ...payload });
        return data;
      } else {
        const { data } = await axios.post("/api/projects", payload);
        return data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      if (!isEdit) setForm(emptyForm);
      alert(isEdit ? "Izmjene sačuvane!" : "Projekat dodat!");
    },
  });

  return (
    <form
      className="flex flex-col gap-4 w-full max-w-4xl mx-auto py-8"
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate();
      }}
    >
      <SectionLabel>Osnovno</SectionLabel>
      <CustomInput
        label="Slug"
        placeholder="npr. fort-kosmac"
        value={form.slug}
        onChange={setInput("slug")}
      />
      <div>
        <label className="block mb-2 text-sm font-semibold uppercase tracking-wider text-gray-800">
          Kategorija
        </label>
        <select
          value={form.categoryId}
          onChange={setInput("categoryId")}
          className="w-full px-4 py-3 border border-gray-700 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Odaberi kategoriju</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.titleMn}
            </option>
          ))}
        </select>
      </div>
      <CustomInput
        label="Naslov (MN)"
        placeholder="Unesite naslov projekta"
        value={form.titleMn}
        onChange={handleTitleMnChange}
      />
      <CustomInput
        label="Naslov (EN)"
        placeholder="Enter project title"
        value={form.titleEn}
        onChange={setInput("titleEn")}
      />
      <CustomInput
        label="Podnaslov (MN)"
        placeholder="Unesite podnaslov"
        value={form.subTitleMn}
        onChange={setInput("subTitleMn")}
      />
      <CustomInput
        label="Podnaslov (EN)"
        placeholder="Enter subtitle"
        value={form.subTitleEn}
        onChange={setInput("subTitleEn")}
      />

      <SectionLabel>Opisi</SectionLabel>
      <CustomTextarea
        label="Teaser opis (MN)"
        placeholder="Kratki opis koji se prikazuje na listi projekata"
        value={form.descriptionMn}
        onChange={setInput("descriptionMn")}
      />
      <CustomTextarea
        label="Teaser opis (EN)"
        placeholder="Short description shown on projects list"
        value={form.descriptionEn}
        onChange={setInput("descriptionEn")}
      />
      <CustomTextarea
        label="Glavni opis projekta (MN)"
        placeholder="Detaljni opis projekta"
        value={form.projectDescMn}
        onChange={setInput("projectDescMn")}
      />
      <CustomTextarea
        label="Glavni opis projekta (EN)"
        placeholder="Detailed project description"
        value={form.projectDescEn}
        onChange={setInput("projectDescEn")}
      />
      <DynamicList
        label="Paragrafi (MN)"
        items={form.paragraphsMn}
        onChange={set("paragraphsMn")}
        placeholder="Unesite paragraf"
      />
      <DynamicList
        label="Paragrafi (EN)"
        items={form.paragraphsEn}
        onChange={set("paragraphsEn")}
        placeholder="Enter paragraph"
      />

      <SectionLabel>Šta smo uradili</SectionLabel>
      <DynamicList
        label="Lista (MN)"
        items={form.listMn}
        onChange={set("listMn")}
        placeholder="npr. Logo & brendiranje"
      />
      <DynamicList
        label="Lista (EN)"
        items={form.listEn}
        onChange={set("listEn")}
        placeholder="e.g. Logo & branding"
      />

      <SectionLabel>Tim</SectionLabel>
      <DynamicTeam items={form.team} onChange={set("team")} />

      <SectionLabel>Slike</SectionLabel>
      <CustomInput
        label="Glavna slika projekta (src)"
        placeholder="/folder/slika.jpg"
        value={form.mainProjectImg}
        onChange={setInput("mainProjectImg")}
      />
      <CustomInput
        label="Banner slika (src)"
        placeholder="/folder/banner.jpg"
        value={form.mainBannerImg}
        onChange={setInput("mainBannerImg")}
      />

      <SectionLabel>Galerija</SectionLabel>
      <DynamicImageList
        label="Slike galerije"
        items={form.galleryImages}
        onChange={set("galleryImages")}
      />
      <DynamicImageList
        label="Slider slike (opcionalno)"
        items={form.sliderImages}
        onChange={set("sliderImages")}
      />
      <GalleryLayoutBuilder
        items={form.galleryLayout}
        onChange={set("galleryLayout")}
        galleryImages={form.galleryImages}
      />

      {mutation.isError && (
        <p className="text-red-500 text-sm">{mutation.error.message}</p>
      )}

      <CustomButton
        type="submit"
        label={mutation.isPending ? "Čuvanje..." : "Sačuvaj"}
        disabled={mutation.isPending}
      />
    </form>
  );
}
