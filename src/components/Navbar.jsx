import Image from "next/image";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar = ({ variant = "light" }) => {
  const logoSrc =
    variant === "light" ? "/logo_b_140-01.png" : "/logo_w_140.png";

  return (
    <nav className="flex justify-between items-center">
      <Link href="/" className="flex-shrink-0">
        <Image src={logoSrc} width={150} height={47} alt="Kata logo" />
      </Link>
      <div className="flex gap-14 items-center">
        <Link href="/work" className="font-semibold">
          Work
        </Link>
        <Link href="/about" className="font-semibold">
          About
        </Link>
        <div>
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
