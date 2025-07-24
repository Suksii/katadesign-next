"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenuStore } from "@/store/menuStore";

export default function HamburgerMenu({ variant = "light" }) {
  const [open, setOpen] = useState(false);
  const setIsOpen = useMenuStore((state) => state.setIsOpen);

  useEffect(() => {
    setIsOpen(open);
  }, [open, setIsOpen]);

  const navMenu = [
    { name: "Work", link: "/work" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Contact", link: "/contact" },
    { name: "Careers", link: "/careers" },
  ];
  const socialMediaList = [
    { name: "Instagram", icon: "" },
    { name: "Vimeo", icon: "" },
    { name: "Linkedin", icon: "" },
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
  const burgerClosedColor = isLight ? "bg-black" : "bg-white";
  const burgerOpenColor = isLight ? "bg-white" : "bg-black";

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="relative w-6 h-6 flex flex-col gap-1 items-center cursor-pointer z-50"
      >
        <span
          className={`block w-6 h-0.5 rounded transition-all duration-300 ${
            open
              ? `rotate-45 translate-y-2 ${burgerOpenColor}`
              : burgerClosedColor
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 rounded transition-all duration-300 ${
            open
              ? `opacity-0 ${burgerOpenColor}`
              : `opacity-100 ${burgerClosedColor}`
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 rounded transition-all duration-300 ${
            open
              ? `-rotate-45 -translate-y-2 ${burgerOpenColor}`
              : burgerClosedColor
          }`}
        ></span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className={`fixed inset-0 ${
                isLight ? "bg-black text-white" : "bg-white text-black"
              }  flex flex-col items-center justify-center gap-8 z-40`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {navMenu.map((item, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  whileHover={{ scale: 1.1, color: "#3b82f6" }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="text-4xl font-semibold"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="fixed bottom-10 left-0 right-0 flex flex-col items-center gap-4 text-center text-gray-600 z-50"
              variants={footerContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <p className="text-sm tracking-wider">
                {new Date().toDateString()}
              </p>
              <div className="flex gap-6">
                {socialMediaList.map((social) => (
                  <motion.a
                    key={social.name}
                    variants={footerLinkVariants}
                    href="#"
                    className="text-lg hover:text-black transition-colors duration-200"
                    whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
