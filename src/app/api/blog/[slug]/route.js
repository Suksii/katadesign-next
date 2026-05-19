import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    const blog = await prisma.blog.findUnique({ where: { slug } });
    if (!blog) {
      return NextResponse.json({ error: "Blog nije pronađen" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Greška pri čitanju bloga" }, { status: 500 });
  }
}
