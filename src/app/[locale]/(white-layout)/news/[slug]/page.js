import SingleBlog from "@/components/webpages/SingleBlog";
import { getBlog, getBlogs } from "@/lib/data";
import { seoAlternates } from "@/lib/seo";
import { notFound } from "next/navigation";

const BASE = "https://kataagency.com";

export const revalidate = 3600;

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};

  const title = locale === "en" ? blog.titleEn : blog.titleMn;
  const description = locale === "en" ? blog.subtitleEn : blog.subtitleMn;
  const imageUrl = blog.bannerImage
    ? `${BASE}${blog.bannerImage}`
    : `${BASE}/home-page.png`;

  return {
    title,
    description,
    alternates: seoAlternates(locale, `news/${slug}`),
    openGraph: {
      title,
      description,
      url: `${BASE}/${locale}/news/${slug}`,
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

export default async function SingleBlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) notFound();

  return <SingleBlog blog={blog} />;
}
