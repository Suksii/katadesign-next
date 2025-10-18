"use client";

import { useMenuStore } from "@/store/menuStore";
import { useProjectStore } from "@/store/projectStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ variant = "light", width = 140, height = 47 }) => {
  const isOpen = useMenuStore((state) => state.isOpen);
  const isProjectOpened = useProjectStore((state) => state.isProjectOpened);

  const logoSrc = isOpen
    ? "/logo_b_140-01.png"
    : variant === "light" && !isProjectOpened
    ? "/logo_b_140-01.png"
    : "/logo_w_140.png";

  return (
    <Link href="/" className="flex-shrink-0 z-50">
      <Image src={logoSrc} width={width} height={height} alt="Kata logo" priority unoptimized/>
    </Link>
  );
};

export default Logo;
