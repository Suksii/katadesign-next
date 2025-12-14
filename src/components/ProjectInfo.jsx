"use client";

import { AnimatePresence, motion } from "framer-motion";
import { containerVariants } from "./utils/motions";
import { useEffect } from "react";
import { useTranslations } from "next-intl";

const ProjectInfo = ({ isOpen, project }) => {
  const t = useTranslations("ProjectPage");

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
          className="fixed inset-0 bg-black text-white z-30 pt-12 flex items-end pb-12"
          variants={containerVariants("+", "+", 0.3, 0.3)}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="w-[90%] mx-auto h-3/4 overflow-y-auto custom-scroll">
            <div className="w-[90%] mx-auto">
              <div className="flex flex-col gap-6 justify-center">
                <div className="w-full flex flex-col lg:flex-row justify-between gap-14">
                  <div>
                    {project.team && (
                      <h3 className="font-semibold">{t("tim")}</h3>
                    )}
                    {project.team &&
                      project.team.map((t, index) => (
                        <p key={index} className="text-sm text-nowrap">
                          {t.name} - {t.role}
                        </p>
                      ))}
                  </div>
                  <div className="max-w-4xl">
                    {Array.isArray(project.paragraphs) ? (
                      project.paragraphs.map((p, index) => (
                        <p key={index} className="text-xl">
                          {p}
                        </p>
                      ))
                    ) : (
                      <p className="text-xl">{project.paragraphs}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectInfo;
