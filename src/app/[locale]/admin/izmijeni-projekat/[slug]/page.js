import ProjectForm from "@/components/forms/ProjectForm";
import { getProject } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function IzmijeniProjekat({ params }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <div>
      <h1>Izmijeni projekat</h1>
      <ProjectForm initialData={project} />
    </div>
  );
}
