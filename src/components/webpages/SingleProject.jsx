"use client";

import React, { use } from "react";
import Slider from "../Slider";
import Image from "next/image";
import GoBackButton from "../GoBackButton";
import ScrollToTopButton from "../ScrollToTopButton";
import { useProjectStore } from "@/store/projectStore";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ProjectInfo from "../ProjectInfo";
import GalleryRenderer from "../common/GalleryRenderer";

const SingleProject = ({ params }) => {
  const t = useTranslations("ProjectPage");
  const { isProjectOpened, setIsProjectOpened } = useProjectStore();

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
      category: t("kategorije.produkti"),
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
      category: t("kategorije.digital"),
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
          alt: "1",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga3.jpg",
          alt: "2",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga4.jpg",
          alt: "3",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga5.jpg",
          alt: "4",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga6.jpg",
          alt: "5",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga7.jpg",
          alt: "6",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga8.jpg",
          alt: "7",
          width: 1200,
          height: 800,
        },
        {
          src: "/sloga/sloga9.jpg",
          alt: "8",
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
      category: t("kategorije.digital"),
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
          indices: { index3: 3 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          indices: { index3: 6 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          indices: { index1: 2, index2: 7, index3: 1 },
          type: "reverse",
          spacing: "pb-2",
        },
        {
          layout: "one",
          indices: { index3: 5 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          indices: { index3: 4 },
          spacing: "pb-2",
        },
        {
          layout: "one",
          flexNum: 2,
          indices: { index3: 0 },
          spacing: "pb-2",
        },
      ],
    },
  ];

  const { slug } = use(params);

  const project = projects.find((p) => p.slug === slug);
  return (
    <div>
      <ScrollToTopButton />
      <div>
        <section className="section pb-8">
          <div className="flex justify-between flex-col-reverse md:flex-row">
            <button
              className="cursor-pointer z-[35]"
              onClick={() => setIsProjectOpened(!isProjectOpened)}
            >
              <div className="flex gap-2 items-center z-[35]">
                <h4
                  className={`text-sm sm:text-base text-nowrap transition-colors duration-300 z-[35] ${
                    isProjectOpened ? "text-white" : "text-black"
                  }`}
                >
                  {isProjectOpened
                    ? project.title
                    : t("informacije_o_projektu")}
                </h4>
                <span className="relative w-4 sm:w-8 h-4 sm:h-8 flex items-center justify-center cursor-pointer shrink-0 z-[35]">
                  <span
                    className={`absolute w-4 sm:w-6 h-[2px] transition-transform duration-300 ${
                      isProjectOpened ? "bg-white" : "bg-black"
                    }`}
                  ></span>
                  <span
                    className={`absolute w-[2px] h-4 sm:h-6 transition-transform duration-300 ${
                      isProjectOpened ? "scale-y-0" : "scale-y-100 bg-black"
                    }`}
                  ></span>
                </span>
              </div>
            </button>
            <div className="absolute md:static right-10 top-24">
              <GoBackButton />
            </div>
          </div>

          <ProjectInfo isOpen={isProjectOpened} project={project} />
          <div className="w-full mt-2">
            <Image
              src={project.main_banner_img?.src}
              alt={project.main_banner_img?.alt}
              width={1920}
              height={855}
              className="object-cover"
            />
          </div>
        </section>
        <section className="section pb-8 sm:h-screen flex items-center bg-white">
          {project.project_desc && project.list && (
            <div className="sm:py-32 flex flex-col md:flex-row w-full lg:w-3/4">
              <div className="flex-1 flex flex-col gap-2 pb-8">
                <h3 className="font-semibold uppercase tracking-wide">
                  {t("sta_smo_uradili")}
                </h3>
                <div>
                  {project.list.map((item, index) => (
                    <p key={index} className="text-2xl">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex-2 md:pl-12">
                <p className="text-2xl tracking-wider leading-10">
                  {project.project_desc}
                </p>
              </div>
            </div>
          )}
        </section>
        {project.galery_images.length > 0 && (
          <>
            <section className="pb-2 hidden lg:block">
              <GalleryRenderer
                gallery={project.galery_images}
                layoutConfig={project.gallery_layout}
              />
            </section>

            <section className="pb-2 flex flex-col gap-2 lg:hidden relative w-full">
              {project?.galery_images.map((image, index) => (
                <div key={index} className="relative w-full aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              ))}
            </section>
          </>
        )}
        {project.slider_images && (
          <section className="pt-2 lg:pt-[300px]">
            <Slider images={project?.slider_images} />
          </section>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
