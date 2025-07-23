import Image from "next/image";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex-shrink-0">
        <Image
          src="/logo_b_140-01.png"
          width={150}
          height={47}
          alt="Kata logo"
        />
      </div>
      <div className="flex gap-6 items-center">
        <Link href="/work" className="font-semibold">
          Work
        </Link>
        <Link href="/about" className="font-semibold">
          About
        </Link>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
