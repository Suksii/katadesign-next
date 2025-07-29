"use client";

import React from "react";
import { motion } from "framer-motion";

const PagesWrapper = ({
  children,
  title,
  layoutClassName = "",
  titleClassName = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h1 className={titleClassName}>{title}</h1>
      <div className={`${layoutClassName} max-w-6xl mx-auto pt-12 md:pt-20`}>
        {children}
      </div>
    </motion.div>
  );
};

export default PagesWrapper;
