"use client";

import { useState } from "react";
import GalleryImage from "./GalleryImage";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCategories } from "@/hooks/useCategories";
import CategoriesSkeleton from "./skeletons/CategoriesSkeleton";

const GalleryHover = () => {
  const t = useTranslations("ProjectPage");
  const locale = useLocale();

  const projects = [
    {
      title: "Explore Montenegro",
      main_project_img: {
        src: "/explore_mne-06-19-60.jpg",
        alt: "Slika1",
      },
      main_banner_img: {
        src: "/explore_mne-06-19-60.jpg",
        alt: "Slika1",
      },
      galery_row_images: [
        {
          src: "/explore_mne-06-19-123.jpg",
          alt: "1",
          width: 1500,
          height: 800,
        },
        {
          src: "/explore_mne-06-19-96.jpg",
          alt: "4",
          width: 1200,
          height: 800,
        },
        {
          src: "/explore_mne-06-19-79.jpg",
          alt: "3",
          width: 1200,
          height: 800,
        },
        {
          src: "/explore_mne-06-19-71.jpg",
          alt: "2",
          width: 1200,
          height: 800,
        },
      ],
      galery_images: [],
      slider_images: [
        {
          src: "/explore_mne/explore_mne-06-19-16.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-17.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-18.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-19.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-20.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-21.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-22.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-23.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-24.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-25.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-26.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-27.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-28.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-29.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-30.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-31.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-32.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-33.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-34.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-35.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-36.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-37.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-38.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-39.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-40.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-41.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-42.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-43.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-44.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-45.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
        {
          src: "/explore_mne/explore_mne-06-19-46.jpg",
          alt: "",
          width: 400,
          height: 800,
        },
      ],
      sub_title: t("explore_mne_podnaslov"),
      description: t.rich("explore_mne_teaser", {
        highlight: (chunks) => (
          <span className="underline decoration-2 underline-offset-4">
            {chunks}
          </span>
        ),
      }),
      category: {
        id: 10,
        title: t("kategorije.produkti"),
      },
      slug: "explore-montenegro",
      paragraphs: t.raw("explore_mne_paragrafi"),
      project_desc: t.rich("explore_mne_opis", {
        link: (chunks) => (
          <Link
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {chunks}
          </Link>
        ),
      }),
      list: [
        t("explore_mne_lista.koncept"),
        t("explore_mne_lista.naming"),
        t("explore_mne_lista.kopirajting"),
        t("explore_mne_lista.logo_brending"),
        t("explore_mne_lista.dizajn_ambalaze"),
        t("explore_mne_lista.strategija_komunikacije"),
      ],
    },
    {
      title: "Fort Kosmač",
      main_project_img: {
        src: "/4.jpg",
        alt: "Slika1",
      },
      main_banner_img: {
        src: "/1.jpg",
        alt: "Slika1",
      },
      galery_row_images: [],
      galery_images: [
        {
          src: "/1.jpg",
          alt: "1",
          width: 1500,
          height: 800,
        },
        {
          src: "/2.jpg",
          alt: "2",
          width: 1200,
          height: 800,
        },
        {
          src: "/3.jpg",
          alt: "3",
          width: 1200,
          height: 800,
        },
        {
          src: "/4.jpg",
          alt: "4",
          width: 1200,
          height: 800,
        },
        {
          src: "/5.jpg",
          alt: "5",
          width: 1200,
          height: 800,
        },
        {
          src: "/6.jpg",
          alt: "6",
          width: 1200,
          height: 800,
        },
        {
          src: "/7.jpg",
          alt: "7",
          width: 1200,
          height: 800,
        },
        {
          src: "/8.jpg",
          alt: "8",
          width: 1200,
          height: 800,
        },
        {
          src: "/9.jpg",
          alt: "9",
          width: 1200,
          height: 800,
        },
        {
          src: "/10.jpg",
          alt: "10",
          width: 1200,
          height: 800,
        },
        {
          src: "/11.jpg",
          alt: "11",
          width: 1200,
          height: 800,
        },
        {
          src: "/12.jpg",
          alt: "12",
          width: 1200,
          height: 800,
        },
        {
          src: "/13.jpg",
          alt: "13",
          width: 1200,
          height: 800,
        },
        {
          src: "/14.jpg",
          alt: "14",
          width: 1200,
          height: 800,
        },
        {
          src: "/15.jpg",
          alt: "15",
          width: 1200,
          height: 800,
        },
        {
          src: "/16.jpg",
          alt: "16",
          width: 1200,
          height: 800,
        },
        {
          src: "/17.jpg",
          alt: "17",
          width: 1200,
          height: 800,
        },
        {
          src: "/18.jpg",
          alt: "18",
          width: 1200,
          height: 800,
        },
        {
          src: "/19.jpg",
          alt: "19",
          width: 1200,
          height: 800,
        },
        {
          src: "/20.jpg",
          alt: "20",
          width: 1200,
          height: 800,
        },
        {
          src: "/21.jpg",
          alt: "21",
          width: 1200,
          height: 800,
        },
      ],
      sub_title: t("fort_kosmac_podnaslov"),
      description: t.rich("fort_kosmac_teaser", {
        highlight: (chunks) => (
          <span className="underline decoration-2 underline-offset-4">
            {chunks}
          </span>
        ),
      }),
      alt: "Slika1",
      category: {
        id: 9,
        title: t("kategorije.digital"),
      },
      slug: "fort-kosmac",
      paragraphs: t.raw("fort_kosmac_paragrafi"),
      project_desc: t("fort_kosmac_opis"),
      list: [
        t("fort_kosmac_lista.uredjivanje"),
        t("fort_kosmac_lista.kreativna_direkcija"),
        t("fort_kosmac_lista.art_direkcija"),
        t("fort_kosmac_lista.dizajn_layout"),
      ],
    },
  ];

  // const categories = [
  //   t("kategorije.sve"),
  //   t("kategorije.identitet"),
  //   t("kategorije.komunikacije"),
  //   t("kategorije.digital"),
  //   t("kategorije.film_mediji"),
  //   t("kategorije.produkti"),
  //   t("kategorije.prostori"),
  // ];

  // const categories = [
  //   t("kategorije.sve"),
  //   ...new Set(images.map((img) => img.category)),
  // ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(t("kategorije.sve"));

  const { data: categories, isLoading, error } = useCategories();
  // if (isLoading) return <CategoriesSkeleton />;
  if (error) return <p>Greška pri učitavanju kategorija</p>;

  const filteredProjects =
    selectedCategory === t("kategorije.sve")
      ? projects
      : projects.filter((img) => {
          return img.category.id === selectedCategory;
        });

  return (
    <>
      <div className="flex flex-wrap gap-x-10 gap-y-4 md:gap-x-16 md:gap-y-8 pb-8 md:w-2/3">
        <button
          onClick={() => setSelectedCategory(t("kategorije.sve"))}
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
      {/* Desktop View */}
      <div onMouseLeave={() => setHoveredIndex(null)}>
        <div className="hidden md:flex overflow-hidden h-auto relative">
          {filteredProjects.map((project, index) => (
            <GalleryImage
              key={index}
              src={project.main_project_img.src}
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
              <h3 className="font-bold">{projects[hoveredIndex].sub_title}</h3>
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
              src={project.main_project_img.src}
              slug={project.slug}
              alt={`Image ${index + 1}`}
            />
            <div className="py-4">
              <h3 className="font-bold">{project.sub_title}</h3>
              <p className=" line-clamp-3">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default GalleryHover;
