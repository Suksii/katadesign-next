import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { titleMn, titleEn, contentMn, contentEn } = body;

    if (!titleMn || !titleEn) {
      return NextResponse.json({ error: "Naziv usluge je obavezan" });
    }
    if (!contentMn || !contentEn) {
      return NextResponse.json({ error: "Naziv usluge je obavezan" });
    }

    const category = await prisma.services.create({
      data: { titleMn, titleEn, contentMn, contentEn },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri dodavanju usluge:", error },
      { status: 500 }
    );
  }
}
