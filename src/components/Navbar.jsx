import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";

const Navbar = ({ variant = "light" }) => {
  return (
    <nav className="flex justify-between items-center">
      <Logo variant={variant} />
      <div className="flex gap-14 items-center">
        <Link href="/work" className="font-semibold hidden md:block z-10">
          Work
        </Link>
        <Link href="/about" className="font-semibold hidden md:block z-10">
          About
        </Link>
        <div>
          <HamburgerMenu variant={variant} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
