"use client";

import React, { useEffect } from "react";
import Slider from "../Slider";
import Image from "next/image";
import GoBackButton from "../GoBackButton";
import ScrollToTopButton from "../ScrollToTopButton";
import { useProjectStore } from "@/store/projectStore";
import { useLocale, useTranslations } from "next-intl";
import ProjectInfo from "../ProjectInfo";
import GalleryRenderer from "../common/GalleryRenderer";

const SingleProject = ({ project }) => {
  const locale = useLocale();
  const t = useTranslations("ProjectPage");
  const { isProjectOpened, setIsProjectOpened } = useProjectStore();

  useEffect(() => {
    setIsProjectOpened(false);
  }, [project.slug]);

  const title = locale === "mn" ? project.titleMn : project.titleEn;
  const projectDesc = locale === "mn" ? project.projectDescMn : project.projectDescEn;
  const list = locale === "mn" ? project.listMn : project.listEn;
  const paragraphs = locale === "mn" ? project.paragraphsMn : project.paragraphsEn;

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
                  {isProjectOpened ? title : t("informacije_o_projektu")}
                </h4>
                <span className="relative w-4 sm:w-8 h-4 sm:h-8 flex items-center justify-center cursor-pointer shrink-0 z-[35]">
                  <span className={`absolute w-4 sm:w-6 h-[2px] transition-transform duration-300 ${isProjectOpened ? "bg-white" : "bg-black"}`}></span>
                  <span className={`absolute w-[2px] h-4 sm:h-6 transition-transform duration-300 ${isProjectOpened ? "scale-y-0" : "scale-y-100 bg-black"}`}></span>
                </span>
              </div>
            </button>
            <div className="absolute md:static right-10 top-24">
              <GoBackButton />
            </div>
          </div>

          <ProjectInfo isOpen={isProjectOpened} project={{ ...project, paragraphs }} />

          <div className="w-full mt-2">
            <Image src={project.mainBannerImg} alt={title} width={1920} height={855} className="object-cover" />
          </div>
        </section>

        <section className="section pb-8 sm:h-screen flex items-center bg-white">
          {projectDesc && list?.length > 0 && (
            <div className="sm:py-32 flex flex-col md:flex-row w-full lg:w-3/4">
              <div className="flex-1 flex flex-col gap-2 pb-8">
                <h3 className="font-semibold uppercase tracking-wide">{t("sta_smo_uradili")}</h3>
                <div>
                  {list.map((item, index) => (
                    <p key={index} className="text-2xl">{item}</p>
                  ))}
                </div>
              </div>
              <div className="flex-2 md:pl-12">
                <p className="text-2xl tracking-wider leading-10">{projectDesc}</p>
              </div>
            </div>
          )}
        </section>

        {project.galleryImages?.length > 0 && (
          <>
            <section className="pb-2 hidden lg:block">
              <GalleryRenderer gallery={project.galleryImages} layoutConfig={project.galleryLayout} />
            </section>
            <section className="pb-2 flex flex-col gap-2 lg:hidden w-full">
              {project.galleryImages.map((image, index) => (
                <Image key={index} src={image.src} alt={`Gallery image ${index + 1}`} width={1200} height={800} className="w-full h-auto object-cover" sizes="100vw" />
              ))}
            </section>
          </>
        )}

        {project.sliderImages?.length > 0 && (
          <section className="pt-2 lg:pt-[300px]">
            <Slider images={project.sliderImages} />
          </section>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
