"use client";

import React from "react";
import { socialMediaList } from "./utils/constants";
import { openLink } from "./utils/helpers";
import { motion } from "framer-motion";

const SocialLinks = ({
  containerClassName,
  linkClassName,
  isFullName = false,
  variants = null,
}) => {
  return (
    <div className={containerClassName}>
      {socialMediaList.map((social) => {
        return (
          <motion.p
            key={social.name}
            onClick={() => openLink(social.link)}
            className={linkClassName}
            variants={variants}
          >
            {isFullName ? social.name : social.twoLettersName}
          </motion.p>
        );
      })}
    </div>
  );
};

export default SocialLinks;
