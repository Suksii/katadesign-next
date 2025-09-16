import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const about = await prisma.aboutUs.findFirst();
    return NextResponse.json(about ?? {});
  } catch (error) {
    console.error("Error fetching AboutUs:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { contentMn, contentEn } = body;

    if (!contentMn && !contentEn) {
      return NextResponse.json(
        { error: "No content provided" },
        { status: 400 }
      );
    }

    const existing = await prisma.aboutUs.findFirst();
    
    console.log("Existing:", existing);
    const about = existing
      ? await prisma.aboutUs.update({
          where: { id: existing.id },
          data: { contentMn, contentEn },
        })
      : await prisma.aboutUs.create({
          data: { contentMn, contentEn },
        });
    console.log("About:", about);
    
    return NextResponse.json(about);
  } catch (error) {
    console.error("Error updating AboutUs:", error);
    return NextResponse.json(
      { error: "Failed to update content" },
      { status: 500 }
    );
  }
}