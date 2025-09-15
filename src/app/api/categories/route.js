import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri čitanju kategorija" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { titleMn, titleEn } = body;

    if (!titleMn || !titleEn) {
      return NextResponse.json({ error: "Naziv kategorije je obavezan" });
    }

    const category = await prisma.category.create({
      data: { titleMn, titleEn },
    });

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri dodavanju kategorije:", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID kategorije je obavezan" },
        { status: 400 }
      );
    }

    await prisma.category.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(
      { message: "Kategorija obrisana" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri brisanju kategorije", details: error },
      { status: 500 }
    );
  }
}
