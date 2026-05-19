import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;
    const project = await prisma.project.findUnique({
      where: { slug },
      include: { category: true },
    });
    if (!project) {
      return NextResponse.json({ error: "Projekat nije pronađen" }, { status: 404 });
    }
    return NextResponse.json(project);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Greška pri čitanju projekta" }, { status: 500 });
  }
}
