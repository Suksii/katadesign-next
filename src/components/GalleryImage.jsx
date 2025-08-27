"use client";

import { memo } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const GalleryImageComponent = ({
  src,
  alt,
  slug,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) => {
  const t = useTranslations("ProjectPage");

  return (
    <div
      className={`group flex-1 flex flex-col overflow-hidden transition-all duration-500 relative ${
        isHovered ? "flex-[8] md:flex-[12]" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="overflow-hidden h-[500px] w-full relative">
        <Link href={`/${t("projekti_slug")}/${slug}`}>
          <Image
            src={src}
            alt={alt}
            width={500}
            height={400}
            unoptimized
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
      </div>
    </div>
  );
};

const GalleryImage = memo(GalleryImageComponent);

export default GalleryImage;
