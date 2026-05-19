import SingleProject from "@/components/webpages/SingleProject";
import { getProject, getProjects } from "@/lib/data";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function SingleProjectPage({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  return <SingleProject project={project} />;
}
