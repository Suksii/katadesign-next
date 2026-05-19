import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri čitanju projekata" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      slug,
      titleMn,
      titleEn,
      subTitleMn,
      subTitleEn,
      descriptionMn,
      descriptionEn,
      projectDescMn,
      projectDescEn,
      listMn,
      listEn,
      team,
      paragraphsMn,
      paragraphsEn,
      mainProjectImg,
      mainBannerImg,
      galleryImages,
      sliderImages,
      galleryLayout,
      categoryId,
    } = body;

    if (!slug || !titleMn || !titleEn || !categoryId) {
      return NextResponse.json(
        { error: "Slug, naslov i kategorija su obavezni" },
        { status: 400 }
      );
    }

    const project = await prisma.project.create({
      data: {
        slug,
        titleMn,
        titleEn,
        subTitleMn: subTitleMn || "",
        subTitleEn: subTitleEn || "",
        descriptionMn: descriptionMn || "",
        descriptionEn: descriptionEn || "",
        projectDescMn: projectDescMn || "",
        projectDescEn: projectDescEn || "",
        listMn: listMn || [],
        listEn: listEn || [],
        team: team || [],
        paragraphsMn: paragraphsMn || [],
        paragraphsEn: paragraphsEn || [],
        mainProjectImg: mainProjectImg || "",
        mainBannerImg: mainBannerImg || "",
        galleryImages: galleryImages || [],
        sliderImages: sliderImages || null,
        galleryLayout: galleryLayout || null,
        categoryId: Number(categoryId),
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri dodavanju projekta" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, categoryId, ...data } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID projekta je obavezan" },
        { status: 400 }
      );
    }

    const updated = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        ...data,
        ...(categoryId && { categoryId: Number(categoryId) }),
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri izmjeni projekta" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "ID projekta je obavezan" },
        { status: 400 }
      );
    }

    await prisma.project.delete({ where: { id: Number(id) } });

    return NextResponse.json({ message: "Projekat obrisan" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Greška pri brisanju projekta" },
      { status: 500 }
    );
  }
}
