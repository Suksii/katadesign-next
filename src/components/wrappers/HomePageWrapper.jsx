"use client";

import { usePathname } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";

const HomePageWrapper = ({ children }) => {
  const pathname = usePathname();

  console.log(pathname);

  if (pathname !== "/") {
    return children;
  }

  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 right-0 w-3/4 md:max-w-[1200px] z-0">
        <Image
          src="/bg-header.png"
          alt="bg-header"
          priority
          width={1200}
          height={809}
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 max-w-[769px] right-0 z-0">
        <Image
          src="/bg-footer.png"
          alt="bg-footer"
          width={769}
          priority
          height={300}
          className="w-full h-auto"
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export default HomePageWrapper;
