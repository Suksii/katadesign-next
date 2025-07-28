import PagesWrapper from "@/components/wrappers/PagesWrapper";
import React from "react";

function HomePage() {
  return (
    <div className="min-h-[calc(100vh-291.06px)] flex flex-col md:justify-end relative pb-12">
      <h1 className="mb-12 md:mb-32">Who we are</h1>
      <div className="flex flex-col md:flex-row justify-between w-full">
        <p className="flex-1 flex flex-col text-6xl md:text-[130px] uppercase font-bold tracking-widest font-mono">
          <span className="typewriter-line text-gray-200 animate-typewriter1">
            GLOBAL
          </span>
          <span className="typewriter-line text-gray-300 animate-typewriter2">
            DESIGN
          </span>
          <span className="typewriter-line text-gray-400 animate-typewriter3">
            AGENCY
          </span>
        </p>
        <p className="flex-1 flex justify-end pt-16 md:pt-0 md:text-lg">
          Branding & Creative Direction / Product and Packaging,
          <br />
          Editorial & Photography / Digital Media & Animation /
          <br />
          Spatial Design & Experiential
        </p>
      </div>
      <p className="absolute right-0 bottom-2 border-r border-gray-500 text-xl pr-4 leading-12">
        What we do
      </p>
    </div>
  );
}

export default HomePage;
