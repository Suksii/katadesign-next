import React from "react";

const PagesWrapper = ({ children, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="max-w-6xl mx-auto pt-12 md:pt-20">{children}</div>
    </div>
  );
};

export default PagesWrapper;
