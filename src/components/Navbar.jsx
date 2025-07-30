import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

const Navbar = ({ variant = "light" }) => {
  const t = useTranslations("Navbar");

  return (
    <nav className="flex justify-between items-center">
      <Logo variant={variant} />
      <div className="flex gap-14 items-center">
        <LocaleSwitcher />
        <Link href="/work" className="font-semibold hidden md:block z-10">
          {t("nas_rad")}
        </Link>
        <Link href="/about" className="font-semibold hidden md:block z-10">
          {t("o_nama")}
        </Link>
        <div>
          <HamburgerMenu variant={variant} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
