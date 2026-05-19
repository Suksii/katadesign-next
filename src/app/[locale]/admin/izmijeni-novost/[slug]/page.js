import NewsForm from "@/components/forms/NewsForm";
import { getBlog } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function IzmijeniNovost({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) notFound();

  return (
    <div>
      <h1>Izmijeni novost</h1>
      <NewsForm initialData={blog} />
    </div>
  );
}
