"use client";
import { useState } from "react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen(!open)}
      className="relative w-6 h-6 flex flex-col gap-1.5 items-center cursor-pointer"
    >
      <span
        className={`block w-6 h-0.5 rounded transition-all duration-300 ${
          open ? "rotate-45 translate-y-2 bg-black" : "bg-white"
        }`}
      ></span>

      <span
        className={`block w-6 h-0.5 rounded transition-all duration-300 ${
          open ? "opacity-0 bg-black" : "opacity-100 bg-white"
        }`}
      ></span>

      <span
        className={`block w-6 h-0.5 rounded transition-all duration-300 ${
          open ? "-rotate-45 -translate-y-2 bg-black" : "bg-white"
        }`}
      ></span>
    </button>
  );
}
