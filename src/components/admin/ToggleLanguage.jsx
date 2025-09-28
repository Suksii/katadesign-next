import React from "react";

const ToggleLanguage = ({ onClick, language }) => {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="font-semibold">Jezik:</span>
      <button
        onClick={onClick}
        className="px-4 py-2 bg-gray-700 text-white rounded cursor-pointer uppercase"
      >
        {language}
      </button>
    </div>
  );
};

export default ToggleLanguage;
