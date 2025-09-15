/*
  Warnings:

  - You are about to drop the column `title` on the `Category` table. All the data in the column will be lost.
  - Added the required column `titleEn` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleMn` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "title",
ADD COLUMN     "titleEn" TEXT NOT NULL,
ADD COLUMN     "titleMn" TEXT NOT NULL;
