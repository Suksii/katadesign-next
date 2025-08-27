"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

const SingleProject = ({ params }) => {
  const t = useTranslations("ProjectPage");
  const [open, setOpen] = useState(false);

  const projects = [
    {
      src: "/explore_mne-06-19-60.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      alt: "Slika1",
      category: t("kategorije.digital"),
      slug: "explore-montenegro",
    },
    {
      src: "/pexels-2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      alt: "Slika2",
      category: t("kategorije.komunikacije"),
      slug: "",
    },
    {
      src: "/pexels-3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      alt: "Slika3",
      category: t("kategorije.film_mediji"),
      slug: "",
    },
    {
      src: "/pexels-4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis",
      alt: "Slika4",
      category: t("kategorije.prostori"),
      slug: "",
    },
    {
      src: "/pexels-5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ",
      alt: "Slika5",
      category: t("kategorije.identitet"),
      slug: "",
    },
    {
      src: "/pexels-6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
      alt: "Slika1",
      category: t("kategorije.produkti"),
      slug: "",
    },
  ];

  const slug = params.slug;
  const project = projects.find((p) => (p.slug = slug));

  console.log("Project:", project);

  return (
    <div>
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="relative w-8 h-8 flex items-center justify-center cursor-pointer shrink-0">
          <span className="absolute w-6 h-[2px] bg-gray-400 transition-transform duration-300"></span>
          <span
            className={`absolute w-[2px] h-6 bg-gray-400 transition-transform duration-300 ${
              open ? "scale-y-0" : "scale-y-100"
            }`}
          ></span>
        </span>
        <h4 className="text-xl">Projects informations</h4>
      </button>
      <div className="w-full h-screen relative mt-2">
        <Image
          src={project.src}
          alt={project.alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default SingleProject;
