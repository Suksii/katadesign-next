"use client";

import { useState } from "react";
import GalleryImage from "./GalleryImage";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const GalleryHover = ({ projects, categories }) => {
  const t = useTranslations("ProjectPage");
  const locale = useLocale();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProjects = selectedCategory === null
    ? projects
    : projects.filter((p) => p.categoryId === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-4 md:gap-x-16 md:gap-y-8 pb-8 md:w-2/3">
        <button
          onClick={() => setSelectedCategory(null)}
          className="relative cursor-pointer overflow-hidden text-nowrap text-xl group"
        >
          <span className="relative z-10">{t("kategorije.sve")}</span>
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
        </button>

        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className="relative cursor-pointer overflow-hidden text-nowrap text-xl group"
          >
            <span className="relative z-10">
              {locale === "mn" ? category.titleMn : category.titleEn}
            </span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Desktop */}
      <div onMouseLeave={() => setHoveredIndex(null)}>
        <div className="hidden md:flex overflow-hidden h-auto relative">
          {filteredProjects.map((project, index) => (
            <GalleryImage
              key={project.id}
              src={project.mainProjectImg}
              alt={locale === "mn" ? project.titleMn : project.titleEn}
              slug={project.slug}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {hoveredIndex !== null && filteredProjects[hoveredIndex] && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.1 }}
              className="py-4 bg-white"
            >
              <h3 className="font-bold">
                {locale === "mn" ? filteredProjects[hoveredIndex].subTitleMn : filteredProjects[hoveredIndex].subTitleEn}
              </h3>
              <p className="line-clamp-2">
                {locale === "mn" ? filteredProjects[hoveredIndex].descriptionMn : filteredProjects[hoveredIndex].descriptionEn}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-col gap-6 divide-y divide-gray-300">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col"
          >
            <GalleryImage
              src={project.mainProjectImg}
              slug={project.slug}
              alt={locale === "mn" ? project.titleMn : project.titleEn}
            />
            <div className="py-4">
              <h3 className="font-bold">
                {locale === "mn" ? project.subTitleMn : project.subTitleEn}
              </h3>
              <p className="line-clamp-3">
                {locale === "mn" ? project.descriptionMn : project.descriptionEn}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default GalleryHover;
