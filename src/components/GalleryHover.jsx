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
      alt: "Slika1",
      category: "3D",
    },
    {
      src: "/pexels-2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      alt: "Slika2",
      category: "2D",
    },
    {
      src: "/pexels-3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      alt: "Slika3",
      category: "Branding",
    },
    {
      src: "/pexels-4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",
      alt: "Slika4",
      category: "Live Action",
    },
    {
      src: "/pexels-5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
      alt: "Slika5",
      category: "2D",
    },
    {
      src: "/pexels-6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
      alt: "Slika1",
      category: "Live Action",
    },
  ];

  const categories = [
    "Everything",
    ...new Set(images.map((img) => img.category)),
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Everything");

  const filteredImages =
    selectedCategory === "Everything"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <>
      <div className="flex flex-wrap gap-x-16 gap-y-8 pb-8 md:w-1/2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="relative cursor-pointer overflow-hidden text-nowrap text-xl group"
          >
            <span className="relative z-10">{category}</span>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
          </button>
        ))}
      </div>
      {/* Desktop View */}
      <div onMouseLeave={() => setHoveredIndex(null)}>
        <div className="hidden md:flex overflow-hidden h-auto relative">
          {filteredImages.map((image, index) => (
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
      <div className="flex md:hidden flex-col gap-6 divide-y divide-gray-300">
        {filteredImages.map((image, index) => (
          <motion.div
            key={`Image-${index}`}
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
