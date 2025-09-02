"use client";

import { AnimatePresence, motion } from "framer-motion";
import { containerVariants } from "./utils/motions";
import { useEffect } from "react";

const ProjectInfo = ({ isOpen, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black text-white z-40 pt-12 flex items-end pb-12"
          variants={containerVariants("+", "+", 0.3, 0.3)}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="w-[90%] max-w-4xl mx-auto h-3/4 overflow-y-auto custom-scroll">
            <div className="w-[90%] mx-auto">
              <div className="flex flex-col gap-6 justify-center">
                {project.paragraphs.map((p, index) => (
                  <p key={index} className="text-xl">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectInfo;
