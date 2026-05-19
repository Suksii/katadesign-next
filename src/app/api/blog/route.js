import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri čitanju blogova" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { slug, titleMn, titleEn, subtitleMn, subtitleEn, date, bannerImage, sections } = body;

    if (!slug || !titleMn || !titleEn) {
      return NextResponse.json(
        { error: "Slug i naslov su obavezni" },
        { status: 400 }
      );
    }

    const blog = await prisma.blog.create({
      data: {
        slug,
        titleMn,
        titleEn,
        subtitleMn: subtitleMn || "",
        subtitleEn: subtitleEn || "",
        date: date || "",
        bannerImage: bannerImage || "",
        sections: sections || [],
      },
    });

    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri dodavanju bloga" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID bloga je obavezan" },
        { status: 400 }
      );
    }

    const updated = await prisma.blog.update({
      where: { id: Number(id) },
      data,
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri izmjeni bloga" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID bloga je obavezan" },
        { status: 400 }
      );
    }

    await prisma.blog.delete({ where: { id: Number(id) } });

    return NextResponse.json({ message: "Blog obrisan" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri brisanju bloga" },
      { status: 500 }
    );
  }
}
