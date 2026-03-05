"use client";

import { useState } from "react";
import GalleryImage from "./GalleryImage";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCategories } from "@/hooks/useCategories";

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
      galery_images: [
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
      category: [5, 7],
      slug: "explore-montenegro",
      paragraphs: t.raw("explore_mne_paragrafi"),
      project_desc: t.rich("explore_mne_opis", {
        link: (chunks) => (
          <Link
            href="https://duskomiljanic.me"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            {chunks}
          </Link>
        ),
      }),
      team: [
        {
          name: t("tim_explore_mne.dusko_miljanic.name"),
          role: t("tim_explore_mne.dusko_miljanic.role"),
        },
      ],
      list: [
        t("explore_mne_lista.koncept"),
        t("explore_mne_lista.naming"),
        t("explore_mne_lista.kopirajting"),
        t("explore_mne_lista.logo_brending"),
        t("explore_mne_lista.dizajn_ambalaze"),
        t("explore_mne_lista.strategija_komunikacije"),
      ],
      gallery_layout: [
        {
          layout: "two",
          indices: { index1: 0, index2: 3, index3: 2, index4: 1 },
          spacing: "pb-2",
        },
      ],
    },
    {
      title: "Fort Kosmač",
      main_project_img: {
        src: "/4.jpg",
        alt: "Slika1",
      },
      main_banner_img: {
        src: "/Kosmac.jpg",
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
      category: [5, 7],
      slug: "fort-kosmac",
      paragraphs: t.raw("fort_kosmac_paragrafi"),
      project_desc: t("fort_kosmac_opis"),
      team: [
        {
          name: t("tim_kosmac.ivan_vratnica.name"),
          role: t("tim_kosmac.ivan_vratnica.role"),
        },
        {
          name: t("tim_kosmac.vuk_zecevic.name"),
          role: t("tim_kosmac.vuk_zecevic.role"),
        },
      ],
      list: [
        t("fort_kosmac_lista.uredjivanje"),
        t("fort_kosmac_lista.kreativna_direkcija"),
        t("fort_kosmac_lista.art_direkcija"),
        t("fort_kosmac_lista.dizajn_layout"),
      ],
      gallery_layout: [
        {
          layout: "one",
          indices: { index3: 0 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          type: "reverse",
          indices: { index1: 2, index2: 3, index3: 1 },
          spacing: "pb-2 lg:pb-[300px]",
        },
        {
          layout: "one",
          flexNum: 2,
          indices: { index1: 4, index2: 5, index3: 6 },
          spacing: "pb-2 lg:pb-[300px]",
        },
        {
          layout: "one",
          flexNum: 2,
          indices: { index1: 7, index3: 8 },
          spacing: "pb-2 lg:pb-[300px]",
        },
        {
          layout: "one",
          type: "reverse",
          flexNum: 2,
          indices: { index1: 10, index3: 9 },
          spacing: "pb-2 lg:pb-[500px]",
        },
        {
          layout: "one",
          flexNum: 2,
          indices: { index1: 11, index2: 12, index3: 13 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          flexNum: 2,
          type: "reverse",
          indices: { index1: 11, index2: 16, index3: 14 },
          spacing: "pb-2 lg:pb-[300px]",
        },
        {
          layout: "one",
          flexNum: 2,
          indices: { index2: 17, index3: 18 },
          spacing: "pb-2",
        },
        {
          layout: "three",
          indices: { index2: 20, index3: 19 },
          spacing: "pb-2 lg:pb-[500px]",
        },
      ],
    },
    {
      title: "Sloga",
      main_project_img: {
        src: "/sloga/sloga1.jpg",
        alt: "sloga1",
      },
      main_banner_img: {
        src: "/sloga/sloga1.jpg",
        alt: "Sloga 1",
      },
      galery_row_images: [],
      galery_images: [
        {
          src: "/sloga/sloga2.jpg",
          alt: "2",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga3.jpg",
          alt: "3",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga4.jpg",
          alt: "4",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga5.jpg",
          alt: "5",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga6.jpg",
          alt: "6",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga7.jpg",
          alt: "7",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga8.jpg",
          alt: "8",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga9.jpg",
          alt: "9",
          width: 1200,
          height: 800,
        },
      ],
      paragraphs: t("sloga_paragrafi"),
      sub_title: t("sloga_podnaslov"),
      description: t.rich("sloga_teaser", {
        bold: (chunks) => <span className="font-bold">{chunks}</span>,
      }),
      alt: "Slika1",
      category: [5],
      slug: "sloga",
      project_desc: t("sloga_opis"),
      list: [
        t("sloga_lista.redizajn_logotipa"),
        t("sloga_lista.art_direkcija"),
        t("sloga_lista.vizuelni_identitet"),
        t("sloga_lista.korporativna_tipografija"),
        t("sloga_lista.dizajn_layout"),
      ],
      gallery_layout: [
        {
          layout: "one",
          indices: { index3: 4 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          indices: { index3: 7 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          indices: { index1: 3, index2: 8, index3: 2 },
          type: "reverse",
          spacing: "pb-2",
        },
        {
          layout: "one",
          indices: { index3: 6 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          indices: { index3: 5 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          flexNum: 2,
          indices: { index3: 1 },
          spacing: "pb-2",
        },
      ],
    },
    {
      title: "IDEA",
      main_project_img: {
        src: "/idea/idea0.webp",
        alt: "Idea 1",
      },
      main_banner_img: {
        src: "/idea/idea2.jpg",
        alt: "Idea 2",
      },
      galery_row_images: [],
      galery_images: [
        {
          src: "/idea/idea34.jpg",
          alt: "1",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea5.jpg",
          alt: "2",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea6.jpg",
          alt: "3",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea7.jpg",
          alt: "4",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea8.jpg",
          alt: "5",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea9.jpg",
          alt: "6",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea10.jpg",
          alt: "7",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea11.jpg",
          alt: "8",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea12.jpg",
          alt: "9",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea13.jpg",
          alt: "10",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea14.jpg",
          alt: "14",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea15.jpg",
          alt: "8",
          width: 1200,
          height: 800,
        },
        {
          src: "/idea/idea4.jpg",
          alt: "8",
          width: 1200,
          height: 800,
        },
      ],
      paragraphs: t("sloga_paragrafi"),
      sub_title: t("idea_podnaslov"),
      description: t.rich("idea_teaser", {
        bold: (chunks) => <span className="font-bold">{chunks}</span>,
      }),
      alt: "Slika1",
      category: t("kategorije.digital"),
      slug: "idea",
      project_desc: t("idea_opis"),
      list: [
        t("idea_lista.redizajn_logotipa"),
        t("idea_lista.art_direkcija"),
        t("idea_lista.vizuelni_identitet"),
        t("idea_lista.korporativna_tipografija"),
        t("idea_lista.dizajn_layout"),
      ],
      gallery_layout: [
        {
          layout: "one",
          indices: { index3: 2 },
          spacing: "pb-2",
        },
        {
          layout: "four",
          indices: { index1: 3, index2: 4 },
          spacing: "pb-15",
        },
        {
          layout: "one",
          indices: { index3: 1 },
          spacing: "pb-15",
        },
        {
          layout: "one",
          indices: { index3: 2 },
          spacing: "pb-15",
        },
        {
          layout: "four",
          indices: { index1: 12, index2: 4 },
          spacing: "pb-15",
        },
        {
          layout: "four",
          indices: { index1: 5, index2: 6, index3: 7 },
          spacing: "pb-2",
        },
        {
          layout: "four",
          indices: { index1: 8, index2: 9 },
          spacing: "pb-2",
          customHeight: "lg:h-screen",
        },
        {
          layout: "four",
          flexNum: 2,
          indices: { index1: 10, index2: 11 },
          spacing: "pb-2",
        },
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
  if (isLoading) return <span></span>;
  if (error) return <p>Greška pri učitavanju kategorija</p>;

  const filteredProjects =
    selectedCategory === t("kategorije.sve")
      ? projects
      : projects.filter((project) => {
          return project.category.includes(selectedCategory);
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
