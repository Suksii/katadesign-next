import React from "react";

const PagesWrapper = ({ children, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="max-w-7xl mx-auto pt-24">{children}</div>
    </div>
  );
};

export default PagesWrapper;
