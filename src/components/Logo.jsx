"use client";

import { useMenuStore } from "@/store/menuStore";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ variant = "light" }) => {
  const isOpen = useMenuStore((state) => state.isOpen);

  const logoSrc = isOpen
    ? variant === "light"
      ? "/logo_w_140.png"
      : "/logo_b_140-01.png"
    : variant === "light"
    ? "/logo_b_140-01.png"
    : "/logo_w_140.png";

  return (
    <Link href="/" className="flex-shrink-0 z-50">
      <Image src={logoSrc} width={150} height={47} alt="Kata logo" />
    </Link>
  );
};

export default Logo;
