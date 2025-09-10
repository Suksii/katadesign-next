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
            type === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-2 h-auto lg:h-screen w-full`}
        >
          <div
            className={`flex flex-col ${
              type === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row"
            } gap-2 h-auto lg:h-screen w-full`}
          >
            <div
              className={`flex flex-col ${
                type === "reverse" ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-2 h-auto lg:h-screen w-full`}
            >
              <div
                className={`${
                  index1 || index2 ? "flex-1" : ""
                } flex flex-col gap-2`}
              >
                {/* GORNJI BLOK - index2 ili placeholder (samo na lg) */}
                {index2 ? (
                  <div className="relative w-full h-[300px] lg:h-1/2">
                    <Image
                      src={gallery[index2]?.src}
                      alt={gallery[index2]?.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  // Placeholder samo na velikim ekranima
                  <div className="hidden lg:block w-full h-[300px] lg:h-1/2" />
                )}

                {/* DONJI BLOK - index1 */}
                {index1 && (
                  <div className="relative w-full h-[300px] lg:h-1/2">
                    <Image
                      src={gallery[index1]?.src}
                      alt={gallery[index1]?.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* DESNI BLOK - index3 */}
              <div className={`flex-${flexNum}`}>
                <div className="relative w-full h-[300px] lg:h-full">
                  <Image
                    src={gallery[index3]?.src}
                    alt={gallery[index3]?.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {layout === "two" && (
        <div className="flex flex-col gap-2 h-auto lg:h-[150vh] w-full">
          <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-1/2">
            <div className="flex-2">
              <div className="relative w-full h-[400px] lg:h-full">
                <Image
                  src={gallery[index1]?.src}
                  alt={gallery[index1]?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative w-full h-[400px] lg:h-full">
                <Image
                  src={gallery[index2]?.src}
                  alt={gallery[index2]?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-1/2">
            <div className="flex-1">
              <div className="relative w-full h-[400px] lg:h-full">
                <Image
                  src={gallery[index3]?.src}
                  alt={gallery[index3]?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-2">
              <div className="relative w-full h-[400px] lg:h-full">
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
      {layout === "three" && (
        <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-screen w-full">
          <div className="flex-1 hidden lg:block"></div>
          <div className="flex-2 flex flex-col lg:flex-row gap-2 h-full">
            <div className={`flex-${flexNum}`}>
              <div className="relative w-full h-[300px] lg:h-full">
                <Image
                  src={gallery[index3]?.src}
                  alt={gallery[index3]?.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 flex-col lg:flex-row">
              {index1 && (
                <div className="relative w-full h-[300px] lg:h-1/3">
                  <Image
                    src={gallery[index1]?.src}
                    alt={gallery[index1]?.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {index2 && (
                <div className="relative w-full h-[300px] lg:h-1/3">
                  <Image
                    src={gallery[index2]?.src}
                    alt={gallery[index2]?.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomGallery;
