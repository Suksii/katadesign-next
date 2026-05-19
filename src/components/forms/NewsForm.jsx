"use client";

import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import CustomInput from "./inputs/CustomInput";
import CustomTextarea from "./inputs/CustomTextarea";
import CustomButton from "../buttons/CustomButton";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";

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

const DynamicList = ({ label, items, onChange, placeholder = "Unesite tekst" }) => {
  const add = () => onChange([...items, ""]);
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const update = (i, val) => onChange(items.map((v, idx) => (idx === i ? val : v)));

  return (
    <div>
      {label && (
        <label className="block mb-2 text-sm font-semibold uppercase tracking-wider text-gray-800">
          {label}
        </label>
      )}
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2 items-start">
            <textarea
              value={item}
              onChange={(e) => update(i, e.target.value)}
              placeholder={placeholder}
              rows={3}
              className="flex-1 px-4 py-3 border border-gray-700 placeholder-gray-400 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-500 hover:text-red-700 mt-3">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={add}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mt-1"
        >
          <Plus size={14} /> Dodaj paragraf
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
      {label && (
        <label className="block mb-2 text-sm font-semibold uppercase tracking-wider text-gray-800">
          {label}
        </label>
      )}
      <div className="flex flex-col gap-2">
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
              className="w-28 px-4 py-3 border border-gray-700 placeholder-gray-400 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
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

const emptySection = () => ({
  titleMn: "",
  titleEn: "",
  mainDescriptionMn: "",
  mainDescriptionEn: "",
  paragraphsMn: [],
  paragraphsEn: [],
  images: [],
  sliderImages: [],
  secondaryImages: [],
});

const BlogSection = ({ section, index, onChange, onRemove }) => {
  const [expanded, setExpanded] = useState(true);

  const set = (field) => (val) => onChange({ ...section, [field]: val });
  const setInput = (field) => (e) => onChange({ ...section, [field]: e.target.value });

  return (
    <div className="border border-gray-300 rounded p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-700">
          Sekcija {index + 1}
        </span>
        <div className="flex gap-2">
          <button type="button" onClick={() => setExpanded(!expanded)} className="text-gray-500 hover:text-gray-800">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button type="button" onClick={onRemove} className="text-red-500 hover:text-red-700">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {expanded && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput
              label="Naslov sekcije (MN)"
              placeholder="opcionalno"
              value={section.titleMn}
              onChange={setInput("titleMn")}
            />
            <CustomInput
              label="Naslov sekcije (EN)"
              placeholder="optional"
              value={section.titleEn}
              onChange={setInput("titleEn")}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomTextarea
              label="Glavni opis (MN)"
              placeholder="opcionalno"
              value={section.mainDescriptionMn}
              onChange={setInput("mainDescriptionMn")}
            />
            <CustomTextarea
              label="Glavni opis (EN)"
              placeholder="optional"
              value={section.mainDescriptionEn}
              onChange={setInput("mainDescriptionEn")}
            />
          </div>
          <DynamicList
            label="Paragrafi (MN)"
            items={section.paragraphsMn}
            onChange={set("paragraphsMn")}
            placeholder="Unesite paragraf"
          />
          <DynamicList
            label="Paragrafi (EN)"
            items={section.paragraphsEn}
            onChange={set("paragraphsEn")}
            placeholder="Enter paragraph"
          />
          <DynamicImageList
            label="Slike"
            items={section.images}
            onChange={set("images")}
          />
          <DynamicImageList
            label="Slider slike (opcionalno)"
            items={section.sliderImages}
            onChange={set("sliderImages")}
          />
          <DynamicImageList
            label="Sekundarne slike (opcionalno)"
            items={section.secondaryImages}
            onChange={set("secondaryImages")}
          />
        </>
      )}
    </div>
  );
};

const emptyForm = {
  slug: "",
  titleMn: "",
  titleEn: "",
  subtitleMn: "",
  subtitleEn: "",
  date: "",
  bannerImage: "",
  sections: [],
};

export default function NewsForm({ initialData }) {
  const isEdit = !!initialData;

  const [form, setForm] = useState(() =>
    initialData
      ? {
          slug: initialData.slug,
          titleMn: initialData.titleMn,
          titleEn: initialData.titleEn,
          subtitleMn: initialData.subtitleMn,
          subtitleEn: initialData.subtitleEn,
          date: initialData.date,
          bannerImage: initialData.bannerImage,
          sections: initialData.sections || [],
        }
      : emptyForm
  );

  const queryClient = useQueryClient();

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

  const addSection = () =>
    setForm((prev) => ({ ...prev, sections: [...prev.sections, emptySection()] }));

  const removeSection = (i) =>
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.filter((_, idx) => idx !== i),
    }));

  const updateSection = (i, updated) =>
    setForm((prev) => ({
      ...prev,
      sections: prev.sections.map((s, idx) => (idx === i ? updated : s)),
    }));

  const mutation = useMutation({
    mutationFn: async () => {
      if (isEdit) {
        const { data } = await axios.put("/api/blog", { id: initialData.id, ...form });
        return data;
      } else {
        const { data } = await axios.post("/api/blog", form);
        return data;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      if (!isEdit) setForm(emptyForm);
      alert(isEdit ? "Izmjene sačuvane!" : "Novost dodana!");
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
        placeholder="npr. brskut-hotel"
        value={form.slug}
        onChange={setInput("slug")}
      />
      <CustomInput
        label="Naslov (MN)"
        placeholder="Unesite naslov novosti"
        value={form.titleMn}
        onChange={handleTitleMnChange}
      />
      <CustomInput
        label="Naslov (EN)"
        placeholder="Enter news title"
        value={form.titleEn}
        onChange={setInput("titleEn")}
      />
      <CustomTextarea
        label="Podnaslov / teaser (MN)"
        placeholder="Kratki opis koji se prikazuje na listi novosti"
        value={form.subtitleMn}
        onChange={setInput("subtitleMn")}
      />
      <CustomTextarea
        label="Podnaslov / teaser (EN)"
        placeholder="Short description shown on news list"
        value={form.subtitleEn}
        onChange={setInput("subtitleEn")}
      />
      <CustomInput
        label="Datum"
        type="date"
        value={form.date}
        onChange={setInput("date")}
      />

      <SectionLabel>Banner slika</SectionLabel>
      <CustomInput
        label="Banner slika (src)"
        placeholder="/folder/banner.jpg"
        value={form.bannerImage}
        onChange={setInput("bannerImage")}
      />

      <SectionLabel>Sekcije sadržaja</SectionLabel>
      <div className="flex flex-col gap-4">
        {form.sections.map((section, i) => (
          <BlogSection
            key={i}
            section={section}
            index={i}
            onChange={(updated) => updateSection(i, updated)}
            onRemove={() => removeSection(i)}
          />
        ))}
        <button
          type="button"
          onClick={addSection}
          className="flex items-center justify-center gap-2 py-3 border border-dashed border-gray-400 rounded text-sm text-gray-600 hover:text-gray-900 hover:border-gray-700 transition-colors"
        >
          <Plus size={16} /> Dodaj sekciju
        </button>
      </div>

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
