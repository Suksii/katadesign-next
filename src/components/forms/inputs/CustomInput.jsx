import React from "react";
import { twMerge } from "tailwind-merge";

const CustomInput = ({
  type = "text",
  placeholder = "",
  value,
  defaultValue,
  onChange,
  name,
  label,
  classNameInput = "",
  classNameLabel = "",
}) => {
  return (
    <div className="relative w-full">
      {label && (
        <label
          htmlFor={name}
          className={twMerge(
            "block mb-2 text-sm font-semibold uppercase tracking-wider text-gray-800",
            classNameLabel
          )}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={twMerge(
          "w-full px-4 py-3 border border-gray-700 placeholder-gray-400 rounded bg-transparent shadow-sm focus:border-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none text-sm transition-all duration-300 ease-in-out",
          classNameInput
        )}
      />
    </div>
  );
};

export default CustomInput;
