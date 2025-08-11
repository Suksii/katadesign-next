"use client";

import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/store/menuStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { socialMediaList } from "./utils/constants";
import { openLink } from "./utils/helpers";
import { useTranslations } from "next-intl";

export default function HamburgerMenu({ variant = "light" }) {
  const { isOpen, setIsOpen } = useMenuStore();
  const t = useTranslations("HamburgerMenu");

  const navMenu = [
    { name: t("nas_rad"), link: "/projects" },
    { name: t("o_nama"), link: "/about" },
    { name: t("usluge"), link: "/services" },
    { name: t("kontakt"), link: "/contact" },
    { name: t("karijera"), link: "/careers" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.4 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.2 } },
  };

  const footerContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, when: "beforeChildren", staggerChildren: 0.15 },
    },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  const footerLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const isLight = variant === "light";
  const burgerColor = isOpen ? "bg-black" : isLight ? "bg-black" : "bg-white";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="relative w-6 h-6 cursor-pointer z-50"
      >
        <span
          className={`absolute left-0 top-1/2 w-6 h-0.5 rounded transition-all duration-300 ${
            isOpen
              ? `rotate-45 ${burgerColor}`
              : `-translate-y-2 ${burgerColor}`
          }`}
        ></span>
        <span
          className={`absolute left-0 top-1/2 w-6 h-0.5 rounded transition-all duration-300 ${
            isOpen ? `opacity-0 ${burgerColor}` : `${burgerColor}`
          }`}
          style={{ transform: isOpen ? "" : "translateY(-50%)" }}
        ></span>
        <span
          className={`absolute left-0 top-1/2 w-6 h-0.5 rounded transition-all duration-300 ${
            isOpen
              ? `-rotate-45 ${burgerColor}`
              : `translate-y-2 ${burgerColor}`
          }`}
        ></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-white text-black flex flex-col items-center justify-center gap-12 z-40"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col items-start gap-10 md:pl-40">
                {navMenu.map((item, index) => (
                  <motion.div key={index} variants={linkVariants}>
                    <Link
                      href={item.link}
                      onClick={() => setIsOpen(false)}
                      className="group relative block text-3xl sm:text-4xl md:text-5xl uppercase tracking-wider transition-all duration-300 w-[10ch] mx-auto"
                    >
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-0 group-hover:h-full transition-all duration-300 bg-black"></span>

                      <span className="pl-6 block transition-transform duration-300 group-hover:translate-x-2 group-hover:font-semibold">
                        {item.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="w-[80%] mx-auto fixed bottom-6 md:bottom-20 left-0 right-0 flex flex-col-reverse md:flex-row items-center gap-4 text-gray-600 z-50"
              variants={footerContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="tracking-wider font-medium flex-1 pt-4 md:pt-0">
                {new Date().getFullYear()}
              </p>
              <div className="flex-1 flex gap-12 md:gap-24 pt-12 md:pt-0">
                {socialMediaList.map((social) => (
                  <motion.p
                    key={social.name}
                    variants={footerLinkVariants}
                    onClick={() => openLink(social.link)}
                    className="text-lg cursor-pointer transition-colors duration-200"
                    whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  >
                    {social.name}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
