import GalleryHover from "@/components/GalleryHover";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import React from "react";

const ProjectsPage = () => {
  const t = useTranslations("ProjectPage");

  return (
    <PagesWrapper title={t("projekti")}>
      <GalleryHover />
    </PagesWrapper>
  );
};

export default ProjectsPage;
