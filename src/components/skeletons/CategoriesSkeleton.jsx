import React from "react";
import { shimmerStyle } from "../utils/constants";

const CategoriesSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-4 md:gap-x-16 md:gap-y-8 pb-8 md:w-2/3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          style={shimmerStyle}
          key={index}
          className="h-6 w-24 md:w-32 rounded"
        ></div>
      ))}
    </div>
  );
};

export default CategoriesSkeleton;
