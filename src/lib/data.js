import { cache } from "react";
import prisma from "./prisma";

export const getProjects = cache(async () => {
  return prisma.project.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });
});

export const getProject = cache(async (slug) => {
  return prisma.project.findUnique({
    where: { slug },
    include: { category: true },
  });
});

export const getCategories = cache(async () => {
  return prisma.category.findMany();
});

export const getBlogs = cache(async () => {
  return prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
});

export const getBlog = cache(async (slug) => {
  return prisma.blog.findUnique({ where: { slug } });
});
