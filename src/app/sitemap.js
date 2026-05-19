import { getProjects, getBlogs } from "@/lib/data";

const BASE = "https://kataagency.com";
const LOCALES = ["mn", "en"];

export default async function sitemap() {
  const [projects, blogs] = await Promise.all([getProjects(), getBlogs()]);

  const staticRoutes = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "projects", priority: 0.9, freq: "monthly" },
    { path: "news", priority: 0.9, freq: "monthly" },
    { path: "services", priority: 0.8, freq: "monthly" },
    { path: "about", priority: 0.7, freq: "monthly" },
    { path: "contact", priority: 0.6, freq: "monthly" },
  ];

  const staticEntries = staticRoutes.flatMap(({ path, priority, freq }) =>
    LOCALES.map((locale) => ({
      url: path ? `${BASE}/${locale}/${path}` : `${BASE}/${locale}`,
      lastModified: new Date(),
      changeFrequency: freq,
      priority,
    }))
  );

  const projectEntries = projects.flatMap((p) =>
    LOCALES.map((locale) => ({
      url: `${BASE}/${locale}/projects/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    }))
  );

  const blogEntries = blogs.flatMap((b) =>
    LOCALES.map((locale) => ({
      url: `${BASE}/${locale}/news/${b.slug}`,
      lastModified: b.updatedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
