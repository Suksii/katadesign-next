import Image from "next/image";
import React from "react";

const CustomGallery = ({ gallery, layout = "two", type = "normal" }) => {
  return (
    <>
      {layout === "one" && (
        <div
          className={`flex flex-col md:${
            type === "reverse" ? "flex-row-reverse" : "flex-row"
          } gap-2 h-auto md:h-screen w-full`}
        >
          <div className="flex-1 flex flex-col gap-2">
            <div className="relative w-full h-[300px] md:h-1/2">
              <Image
                src={gallery[0].src}
                alt={gallery[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[300px] md:h-1/2">
              <Image
                src={gallery[1].src}
                alt={gallery[1].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-2">
            <div className="relative w-full h-[300px] md:h-full">
              <Image
                src={gallery[2].src}
                alt={gallery[2].alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {layout === "two" && (
        <div className="flex flex-col gap-2 h-auto md:h-[800px] w-full">
          <div className="flex flex-col md:flex-row gap-2 h-auto md:h-1/2">
            <div className="flex-2">
              <div className="relative w-full h-[300px] md:h-full">
                <Image
                  src={gallery[0].src}
                  alt={gallery[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[300px] md:h-full">
                <Image
                  src={gallery[1].src}
                  alt={gallery[1].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-2 h-auto md:h-1/2">
            <div className="flex-1">
              <div className="relative w-full h-[300px] md:h-full">
                <Image
                  src={gallery[2].src}
                  alt={gallery[2].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-2">
              <div className="relative w-full h-[300px] md:h-full">
                <Image
                  src={gallery[3].src}
                  alt={gallery[3].alt}
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
