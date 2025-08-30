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
          className="fixed inset-0 bg-black text-white z-40 min-h-[calc(100vh-288px)] overflow-y-auto"
          variants={containerVariants("+", "+", 0.3, 0.3)}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="max-w-3xl mx-auto my-80">
            <div className="flex flex-col gap-6 justify-center px-8">
              {project.paragraphs.map((p, index) => (
                <p key={index} className="text-xl">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectInfo;
