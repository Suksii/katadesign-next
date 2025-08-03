"use client";

import Image1 from "../assets/pexels-1.jpg";
import Image2 from "../assets/pexels-2.jpg";
import Image3 from "../assets/pexels-3.jpg";
import Image4 from "../assets/pexels-4.jpg";
import Image5 from "../assets/pexels-5.jpg";
import Image6 from "../assets/pexels-6.jpg";
import { useState } from "react";
import GalleryImage from "./GalleryImage";
import { AnimatePresence, motion } from "framer-motion";

const GalleryHover = () => {
  const images = [
    {
      src: Image1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      src: Image2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      src: Image3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: Image4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",
    },
    {
      src: Image5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
    },
    {
      src: Image6,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div onMouseLeave={() => setHoveredIndex(null)}>
      <div className="flex overflow-hidden h-auto relative">
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
  );
};

export default GalleryHover;
