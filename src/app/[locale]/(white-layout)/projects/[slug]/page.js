import SingleProject from "@/components/webpages/SingleProject";
import { getProject, getProjects } from "@/lib/data";
import { seoAlternates } from "@/lib/seo";
import { notFound } from "next/navigation";

const BASE = "https://kataagency.com";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  const title = locale === "en" ? project.titleEn : project.titleMn;
  const description = locale === "en" ? project.descriptionEn : project.descriptionMn;
  const imageUrl = project.mainBannerImg
    ? `${BASE}${project.mainBannerImg}`
    : `${BASE}/home-page.png`;

  return {
    title,
    description,
    alternates: seoAlternates(locale, `projects/${slug}`),
    openGraph: {
      title,
      description,
      url: `${BASE}/${locale}/projects/${slug}`,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function SingleProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  return <SingleProject project={project} />;
}
