-- CreateTable
CREATE TABLE "public"."Services" (
    "id" SERIAL NOT NULL,
    "titleMn" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "contentMn" TEXT NOT NULL,
    "contentEn" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Blog" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
