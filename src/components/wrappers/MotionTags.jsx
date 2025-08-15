"use client";

import { motion } from "framer-motion";

export function HeaderMotion({ children, className = "", animation }) {
  return (
    <motion.h1 {...animation} className={className}>
      {children}
    </motion.h1>
  );
}

export function TextMotion({ children, className = "", animation }) {
  return (
    <motion.p {...animation} className={className}>
      {children}
    </motion.p>
  );
}
