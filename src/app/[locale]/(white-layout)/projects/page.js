import GalleryHover from "@/components/GalleryHover";
import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { seoAlternates, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { getCategories, getProjects } from "@/lib/data";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations("Metadata.projects_page");
  return {
    title: t("title"),
    description: t("description"),
    alternates: seoAlternates(locale, "projects"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://kataagency.com/${locale}/projects`,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function ProjectsPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectPage" });
  const [projects, categories] = await Promise.all([getProjects(), getCategories()]);

  return (
    <PagesWrapper title={t("projekti")}>
      <GalleryHover projects={projects} categories={categories} />
    </PagesWrapper>
  );
}
