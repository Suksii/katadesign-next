"use client";

import { useState } from "react";
import GalleryImage from "./GalleryImage";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const GalleryHover = () => {
  const t = useTranslations("ProjectPage");

  const projects = [
    {
      src: "/explore_mne-06-19-60.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      alt: "Slika1",
      category: t("kategorije.digital"),
      slug: "explore-montenegro",
    },
    {
      src: "/pexels-2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      alt: "Slika2",
      category: t("kategorije.komunikacije"),
      slug: "",
    },
    {
      src: "/pexels-3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      alt: "Slika3",
      category: t("kategorije.film_mediji"),
      slug: "",
    },
    {
      src: "/pexels-4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",
      alt: "Slika4",
      category: t("kategorije.prostori"),
      slug: "",
    },
    {
      src: "/pexels-5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
      alt: "Slika5",
      category: t("kategorije.identitet"),
      slug: "",
    },
    {
      src: "/pexels-6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
      alt: "Slika1",
      category: t("kategorije.produkti"),
      slug: "",
    },
  ];

  const categories = [
    t("kategorije.sve"),
    t("kategorije.identitet"),
    t("kategorije.komunikacije"),
    t("kategorije.digital"),
    t("kategorije.film_mediji"),
    t("kategorije.produkti"),
    t("kategorije.prostori"),
  ];

  // const categories = [
  //   t("kategorije.sve"),
  //   ...new Set(images.map((img) => img.category)),
  // ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(t("kategorije.sve"));

  const filteredProjects =
    selectedCategory === t("kategorije.sve")
      ? projects
      : projects.filter((img) => img.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap gap-x-16 gap-y-8 pb-8 md:w-2/3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="relative cursor-pointer overflow-hidden text-nowrap text-xl group"
          >
            <span className="relative z-10">{category}</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>
      {/* Desktop View */}
      <div onMouseLeave={() => setHoveredIndex(null)}>
        <div className="hidden md:flex overflow-hidden h-auto relative">
          {filteredProjects.map((project, index) => (
            <GalleryImage
              key={index}
              src={project.src}
              alt={`Image ${index + 1}`}
              slug={project.slug}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.1 }}
              className=" py-4 bg-white"
            >
              <p className="line-clamp-2">
                {projects[hoveredIndex].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden flex-col gap-6 divide-y divide-gray-300">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={`Image-${index}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col"
          >
            <GalleryImage
              key={index}
              src={project.src}
              slug={project.slug}
              alt={`Image ${index + 1}`}
            />
            <div className="py-6">
              <p className=" line-clamp-3">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default GalleryHover;
