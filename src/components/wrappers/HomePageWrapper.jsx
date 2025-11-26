"use client";

import { usePathname } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";
import { TextMotion } from "./MotionTags";

const HomePageWrapper = ({ children }) => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return children;
  }

  return (
    <div className="relative overflow-x-hidden">
      <TextMotion
        animation={{
          initial: { opacity: 0, x: 150 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1 },
        }}
        className="absolute top-0 right-0 w-full z-0"
      >
        <Image
          src="/bg-header.png"
          alt="bg-header"
          priority
          width={800}
          height={530}
          unoptimized
          className="w-full h-[80px] md:h-auto"
        />
      </TextMotion>
      <div className="relative">{children}</div>
    </div>
  );
};

export default HomePageWrapper;
