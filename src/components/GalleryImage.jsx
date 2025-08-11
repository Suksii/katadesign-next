"use client";

import { memo } from "react";
import Image from "next/image";

const GalleryImageComponent = ({
  src,
  alt,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) => {
  return (
    <div
      className={`group flex-1 flex flex-col overflow-hidden transition-all duration-500 relative ${
        isHovered ? "flex-[8] md:flex-[12]" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="overflow-hidden h-[500px] w-full relative">
        <Image
          src={src}
          alt={alt}
          width={500}
          height={400}
          unoptimized
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

const GalleryImage = memo(GalleryImageComponent);

export default GalleryImage;
