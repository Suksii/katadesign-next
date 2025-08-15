"use client";

import { useState } from "react";
import GalleryImage from "./GalleryImage";
import { AnimatePresence, motion } from "framer-motion";

const GalleryHover = () => {
  const images = [
    {
      src: "/pexels-1.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      src: "/pexels-2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      src: "/pexels-3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: "/pexels-4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",
    },
    {
      src: "/pexels-5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
    },
    {
      src: "/pexels-6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {/* Desktop View */}
      <div onMouseLeave={() => setHoveredIndex(null)}>
        <div className="hidden md:flex overflow-hidden h-auto relative">
          {images.map((image, index) => (
            <GalleryImage
              key={index}
              src={image.src}
              alt={`Image ${index + 1}`}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.1 }}
              className="flex justify-between gap-8 min-h-[100px] py-4 bg-white"
            >
              <p className="w-3/4 line-clamp-2">
                {images[hoveredIndex].description}
              </p>
              <button className="text-nowrap self-end cursor-pointer">
                Read more
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col gap-6 divide-y divide-gray-300">
        {images.map((image, index) => (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col"
          >
            <GalleryImage
              key={index}
              src={image.src}
              alt={`Image ${index + 1}`}
            />
            <div className="py-6">
              <p className=" line-clamp-3">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default GalleryHover;
