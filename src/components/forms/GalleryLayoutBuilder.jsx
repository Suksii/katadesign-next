"use client";

import { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp, ArrowUp, ArrowDown } from "lucide-react";

export const LAYOUT_CONFIGS = {
  one: {
    label: "Layout One",
    description: "Lijevo 1-2 slike, desno 1 velika",
    indices: [
      { key: "index3", label: "Desna slika", required: true },
      { key: "index1", label: "Lijevo donja", required: false },
      { key: "index2", label: "Lijevo gornja", required: false },
    ],
    hasType: true,
    hasFlexNum: true,
    hasCustomHeight: false,
  },
  two: {
    label: "Layout Two",
    description: "4 slike u 2×2 gridu (150vh)",
    indices: [
      { key: "index1", label: "Gore lijevo", required: true },
      { key: "index2", label: "Gore desno", required: true },
      { key: "index3", label: "Dolje lijevo", required: true },
      { key: "index4", label: "Dolje desno", required: true },
    ],
    hasType: false,
    hasFlexNum: false,
    hasCustomHeight: false,
  },
  three: {
    label: "Layout Three",
    description: "Prazno + centralna + 2 desno (ekran)",
    indices: [
      { key: "index3", label: "Centralna slika", required: true },
      { key: "index1", label: "Desno gornja", required: false },
      { key: "index2", label: "Desno donja", required: false },
    ],
    hasType: false,
    hasFlexNum: true,
    hasCustomHeight: false,
  },
  four: {
    label: "Layout Four",
    description: "2-3 slike horizontalno (fiksna visina)",
    indices: [
      { key: "index1", label: "Prva slika", required: true },
      { key: "index2", label: "Druga slika", required: true },
      { key: "index3", label: "Treća slika", required: false },
    ],
    hasType: true,
    hasFlexNum: true,
    hasCustomHeight: true,
  },
};

export const emptyBlock = () => ({
  layout: "one",
  type: "normal",
  flexNum: 1,
  spacing: "pb-2",
  customHeight: "",
  indices: { index1: "", index2: "", index3: "", index4: "" },
});

export function initGalleryLayout(raw) {
  if (!raw || !Array.isArray(raw)) return [];
  return raw.map((block) => ({
    layout: block.layout || "one",
    type: block.type || "normal",
    flexNum: block.flexNum || 1,
    spacing: block.spacing || "pb-2",
    customHeight: block.customHeight || "",
    indices: {
      index1: block.indices?.index1 ?? "",
      index2: block.indices?.index2 ?? "",
      index3: block.indices?.index3 ?? "",
      index4: block.indices?.index4 ?? "",
    },
  }));
}

export function serializeGalleryLayout(blocks) {
  if (!blocks.length) return null;
  return blocks.map((block) => ({
    ...block,
    indices: Object.fromEntries(
      Object.entries(block.indices)
        .filter(([, v]) => v !== "" && v !== null && v !== undefined)
        .map(([k, v]) => [k, Number(v)])
    ),
  }));
}

// Small image tile or placeholder box
const Thumb = ({ image, flex = 1, className = "" }) => (
  <div
    style={{ flex }}
    className={`min-h-0 overflow-hidden bg-gray-200 ${className}`}
  >
    {image?.src ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image.src} alt={image.alt || ""} className="w-full h-full object-cover" />
    ) : (
      <div className="w-full h-full bg-gray-100 border border-dashed border-gray-300" />
    )}
  </div>
);

// Live preview showing actual images in the correct layout shape
const LayoutPreview = ({ block, gallery }) => {
  const { layout, type, flexNum, indices } = block;
  const get = (key) => {
    const v = indices[key];
    if (v === "" || v === null || v === undefined) return null;
    return gallery[Number(v)] || null;
  };

  const reverse = type === "reverse";
  const flex = flexNum || 1;
  const base = "flex gap-1 h-36 overflow-hidden";

  if (layout === "one") {
    const i1 = get("index1");
    const i2 = get("index2");
    const i3 = get("index3");
    return (
      <div className={`${base} ${reverse ? "flex-row-reverse" : ""}`}>
        {(i1 || i2) && (
          <div className="flex-1 flex flex-col gap-1 min-h-0">
            {i2 && <Thumb image={i2} />}
            {i1 && <Thumb image={i1} />}
          </div>
        )}
        <Thumb image={i3} flex={flex} />
      </div>
    );
  }

  if (layout === "two") {
    return (
      <div className={`flex flex-col gap-1 h-36 overflow-hidden`}>
        <div className="flex gap-1 min-h-0 flex-1">
          <Thumb image={get("index1")} flex={2} />
          <Thumb image={get("index2")} flex={1} />
        </div>
        <div className="flex gap-1 min-h-0 flex-1">
          <Thumb image={get("index3")} flex={1} />
          <Thumb image={get("index4")} flex={2} />
        </div>
      </div>
    );
  }

  if (layout === "three") {
    const i1 = get("index1");
    const i2 = get("index2");
    return (
      <div className={base}>
        <div className="flex-1 min-h-0 bg-gray-50 border border-dashed border-gray-200 rounded flex items-center justify-center">
          <span className="text-[10px] text-gray-300 [writing-mode:vertical-rl]">prazno</span>
        </div>
        <div className="flex gap-1 min-h-0" style={{ flex: 2 }}>
          <Thumb image={get("index3")} flex={flex} />
          <div className="flex-1 flex flex-col gap-1 min-h-0">
            <Thumb image={i1 || null} />
            <Thumb image={i2 || null} />
          </div>
        </div>
      </div>
    );
  }

  if (layout === "four") {
    const i3 = get("index3");
    return (
      <div className={`${base} ${reverse ? "flex-row-reverse" : ""}`}>
        <Thumb image={get("index1")} flex={1} />
        <Thumb image={get("index2")} flex={flex} />
        {(i3 || indices.index3 !== "") && <Thumb image={i3} flex={1} />}
      </div>
    );
  }

  return null;
};

// Compact layout option card (CSS boxes, no real images)
const LayoutOptionPreview = ({ layoutKey }) => {
  const box = "bg-gray-300 rounded-sm";
  if (layoutKey === "one") {
    return (
      <div className="flex gap-1 h-10">
        <div className="flex-1 flex flex-col gap-1">
          <div className={`${box} flex-1`} />
          <div className={`${box} flex-1`} />
        </div>
        <div className={`${box} flex-2`} style={{ flex: 2 }} />
      </div>
    );
  }
  if (layoutKey === "two") {
    return (
      <div className="flex flex-col gap-1 h-10">
        <div className="flex gap-1 flex-1">
          <div className={`${box}`} style={{ flex: 2 }} />
          <div className={`${box} flex-1`} />
        </div>
        <div className="flex gap-1 flex-1">
          <div className={`${box} flex-1`} />
          <div className={`${box}`} style={{ flex: 2 }} />
        </div>
      </div>
    );
  }
  if (layoutKey === "three") {
    return (
      <div className="flex gap-1 h-10">
        <div className="flex-1 border border-dashed border-gray-300 rounded-sm" />
        <div className={`${box}`} style={{ flex: 2 }} />
        <div className="flex-1 flex flex-col gap-1">
          <div className={`${box} flex-1`} />
          <div className={`${box} flex-1`} />
        </div>
      </div>
    );
  }
  if (layoutKey === "four") {
    return (
      <div className="flex gap-1 h-10">
        <div className={`${box} flex-1`} />
        <div className={`${box}`} style={{ flex: 2 }} />
      </div>
    );
  }
  return null;
};

const LayoutBlock = ({ block, index, onChange, onRemove, onMoveUp, onMoveDown, isFirst, isLast, galleryImages }) => {
  const [expanded, setExpanded] = useState(true);
  const cfg = LAYOUT_CONFIGS[block.layout];

  const set = (field, val) => onChange({ ...block, [field]: val });
  const setIndex = (key, val) =>
    onChange({ ...block, indices: { ...block.indices, [key]: val } });

  return (
    <div className="border border-gray-300 rounded p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-700">
          Blok {index + 1} — {cfg.label}
        </span>
        <div className="flex gap-2 items-center">
          <button
            type="button"
            onClick={onMoveUp}
            disabled={isFirst}
            className="text-gray-400 hover:text-gray-700 disabled:opacity-30"
          >
            <ArrowUp size={14} />
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={isLast}
            className="text-gray-400 hover:text-gray-700 disabled:opacity-30"
          >
            <ArrowDown size={14} />
          </button>
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-gray-500 hover:text-gray-800"
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Live preview — always visible */}
      <LayoutPreview block={block} gallery={galleryImages} />

      {expanded && (
        <>
          {/* Layout selector */}
          <div>
            <label className="block mb-2 text-sm font-semibold uppercase tracking-wider text-gray-800">
              Tip layouta
            </label>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(LAYOUT_CONFIGS).map(([key, c]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => set("layout", key)}
                  className={`text-left p-3 border rounded transition-colors ${
                    block.layout === key
                      ? "border-gray-800 bg-gray-50"
                      : "border-gray-200 hover:border-gray-400"
                  }`}
                >
                  <LayoutOptionPreview layoutKey={key} />
                  <span className="text-xs font-semibold text-gray-800 mt-2 block">{c.label}</span>
                  <p className="text-[11px] text-gray-500 mt-0.5">{c.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cfg.hasType && (
              <div>
                <label className="block mb-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Smjer
                </label>
                <select
                  value={block.type}
                  onChange={(e) => set("type", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-700 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option value="normal">Normal</option>
                  <option value="reverse">Reverse</option>
                </select>
              </div>
            )}
            {cfg.hasFlexNum && (
              <div>
                <label className="block mb-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Flex broj
                </label>
                <input
                  type="number"
                  min={1}
                  max={5}
                  value={block.flexNum}
                  onChange={(e) => set("flexNum", Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-700 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            )}
            <div>
              <label className="block mb-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
                Spacing
              </label>
              <input
                type="text"
                value={block.spacing}
                onChange={(e) => set("spacing", e.target.value)}
                placeholder="pb-2"
                className="w-full px-3 py-2 border border-gray-700 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            {cfg.hasCustomHeight && (
              <div>
                <label className="block mb-1 text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Custom visina
                </label>
                <input
                  type="text"
                  value={block.customHeight}
                  onChange={(e) => set("customHeight", e.target.value)}
                  placeholder="lg:h-[85vh]"
                  className="w-full px-3 py-2 border border-gray-700 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            )}
          </div>

          {/* Indices */}
          <div>
            <label className="block mb-2 text-sm font-semibold uppercase tracking-wider text-gray-800">
              Indeksi slika{" "}
              <span className="text-gray-400 font-normal normal-case tracking-normal text-xs">
                (0 = prva slika u galeriji)
              </span>
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {cfg.indices.map(({ key, label, required }) => {
                const v = block.indices[key];
                const img = v !== "" && v !== null && v !== undefined ? galleryImages[Number(v)] : null;
                return (
                  <div key={key}>
                    <label className="block mb-1 text-xs text-gray-600">
                      {label}
                      {required ? (
                        <span className="text-red-400"> *</span>
                      ) : (
                        <span className="text-gray-400"> (opt.)</span>
                      )}
                    </label>
                    <input
                      type="number"
                      min={0}
                      value={block.indices[key]}
                      onChange={(e) => setIndex(key, e.target.value)}
                      placeholder={required ? "0" : "—"}
                      className="w-full px-3 py-2 border border-gray-700 rounded bg-transparent text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    {img?.src && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={img.src}
                        alt={img.alt || ""}
                        className="mt-1 w-full h-12 object-cover rounded border border-gray-200"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function GalleryLayoutBuilder({ items, onChange, galleryImages = [] }) {
  const add = () => onChange([...items, emptyBlock()]);
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const update = (i, updated) =>
    onChange(items.map((v, idx) => (idx === i ? updated : v)));
  const moveUp = (i) => {
    if (i === 0) return;
    const next = [...items];
    [next[i - 1], next[i]] = [next[i], next[i - 1]];
    onChange(next);
  };
  const moveDown = (i) => {
    if (i === items.length - 1) return;
    const next = [...items];
    [next[i], next[i + 1]] = [next[i + 1], next[i]];
    onChange(next);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((block, i) => (
        <LayoutBlock
          key={i}
          block={block}
          index={i}
          onChange={(updated) => update(i, updated)}
          onRemove={() => remove(i)}
          onMoveUp={() => moveUp(i)}
          onMoveDown={() => moveDown(i)}
          isFirst={i === 0}
          isLast={i === items.length - 1}
          galleryImages={galleryImages}
        />
      ))}
      <button
        type="button"
        onClick={add}
        className="flex items-center justify-center gap-2 py-3 border border-dashed border-gray-400 rounded text-sm text-gray-600 hover:text-gray-900 hover:border-gray-700 transition-colors"
      >
        <Plus size={16} /> Dodaj layout blok
      </button>
    </div>
  );
}
