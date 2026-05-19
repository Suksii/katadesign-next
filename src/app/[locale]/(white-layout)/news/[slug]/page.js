import SingleBlog from "@/components/webpages/SingleBlog";
import { getBlog, getBlogs } from "@/lib/data";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) notFound();

  return <SingleBlog blog={blog} />;
}
