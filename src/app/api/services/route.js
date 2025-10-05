import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const services = await prisma.services.findMany();
    return NextResponse.json(services);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri čitanju usluga:", error },
      { status: 500 }
    );
  }
}

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

    const service = await prisma.services.create({
      data: { titleMn, titleEn, contentMn, contentEn },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri dodavanju usluge:", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID usluge je obavezan" },
        { status: 400 }
      );
    }

    await prisma.services.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Usluga obrisana" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri brisanju usluge", details: error },
      { status: 500 }
    );
  }
}
export async function PUT(req) {
  try {
    const { id, titleMn, titleEn, contentMn, contentEn } = await req.json();

    if (!id || !titleMn || !titleEn || !contentMn || !contentEn) {
      return NextResponse.json(
        { error: "Svi podaci su obavezni" },
        { status: 400 }
      );
    }

    const updatedService = await prisma.services.update({
      where: { id },
      data: { titleMn, titleEn, contentMn, contentEn },
    });

    return NextResponse.json(updatedService, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri izmjeni usluge" },
      { status: 500 }
    );
  }
}
