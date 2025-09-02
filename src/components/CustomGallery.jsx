import Image from "next/image";
import React from "react";

const CustomGallery = ({
  gallery,
  layout = "one",
  type = "normal",
  flexNum = 1,
  index1,
  index2,
  index3,
  index4,
}) => {
  return (
    <>
      {layout === "one" && (
        <div
          className={`flex flex-col ${
            type === "reverse" ? "md:flex-row-reverse" : "md:flex-row"
          } gap-2 h-auto md:h-screen w-full`}
        >
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-full h-[300px] md:h-1/2">
              {index1 && (
                <Image
                  src={gallery[index1]?.src}
                  alt={gallery[index1]?.alt}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="relative w-full h-[300px] md:h-1/2">
              {index2 && (
                <Image
                  src={gallery[index2]?.src}
                  alt={gallery[index2]?.alt}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
          <div className={`flex-${flexNum}`}>
            <div className="relative w-full h-[300px] md:h-full">
              <Image
                src={gallery[index3]?.src}
                alt={gallery[index3]?.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {layout === "two" && (
        <div className="flex flex-col gap-2 h-auto md:h-screen w-full">
          <div className="flex flex-col md:flex-row gap-2 h-auto md:h-1/2">
            <div className="flex-2">
              <div className="relative w-full h-[400px] md:h-full">
                <Image
                  src={gallery[index1]?.src}
                  alt={gallery[index1]?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[400px] md:h-full">
                <Image
                  src={gallery[index2]?.src}
                  alt={gallery[index2]?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 h-auto md:h-1/2">
            <div className="flex-1">
              <div className="relative w-full h-[400px] md:h-full">
                <Image
                  src={gallery[index3]?.src}
                  alt={gallery[index3]?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-2">
              <div className="relative w-full h-[400px] md:h-full">
                <Image
                  src={gallery[index4]?.src}
                  alt={gallery[index4]?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomGallery;
