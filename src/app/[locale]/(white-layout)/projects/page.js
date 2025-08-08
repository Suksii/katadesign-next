import GalleryHover from "@/components/GalleryHover";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import React from "react";

export async function generateMetadata() {
  const t = await getTranslations("ProjectPage");
  return {
    title: t("projekti"),
    description: "",
  };
}

const ProjectsPage = () => {
  const t = useTranslations("ProjectPage");

  return (
    <PagesWrapper title={t("projekti")}>
      <GalleryHover />
    </PagesWrapper>
  );
};

export default ProjectsPage;
