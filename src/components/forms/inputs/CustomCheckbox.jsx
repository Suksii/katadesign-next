import React from "react";

const CustomCheckbox = ({ isChecked, setIsChecked, label }) => {
  return (
    <label className="flex items-center cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 border-2 rounded transition-all duration-300 ${
            isChecked
              ? "bg-gradient-to-br from-red-600 to-red-700 border-red-600 shadow-lg shadow-red-600/30"
              : "bg-zinc-800/50 border-zinc-600 group-hover:border-zinc-500 group-hover:bg-zinc-800"
          }`}
        >
          {isChecked && (
            <svg
              className="w-full h-full text-white p-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="ml-2.5 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
        {label}
      </span>
    </label>
  );
};

export default CustomCheckbox;
