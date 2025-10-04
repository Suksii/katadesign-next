import React from "react";
import { twMerge } from "tailwind-merge";

const CustomButton = ({
  onClick,
  type = "button",
  disabled = false,
  label,
  classNameBg = "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-800 hover:to-gray-700",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={twMerge(
        "px-8 py-3 w-full md:w-32  text-white shadow-lg active:scale-95 transition-all duration-300 ease-in-out font-semibold text-sm uppercase tracking-wider cursor-pointer border-0 focus:outline-none relative rounded overflow-hidden group",
        classNameBg
      )}
    >
      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded pointer-events-none"></span>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {label}
      </span>
    </button>
  );
};

export default CustomButton;
