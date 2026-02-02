import Image from "next/image";
import React, { use } from "react";
import Slider from "../Slider";
import { useTranslations } from "next-intl";

const SingleBlog = ({ params }) => {
  const t = useTranslations("NewsPage");

  const blogs = [
    {
      title: t("brskut_naslov"),
      subtitle: t("brskut_teaser"),
      banner_image: {
        src: "/brskut/Brskut0.jpg",
        alt: "1",
        width: 400,
        height: 800,
      },
      date: "28.08.2025",
      slug: "brskut",
      sections: [
        {
          paragraphs: t.raw("brskut_desc_1"),
          images: [
            { src: "/brskut/Brskut1.jpg", alt: "1", width: 400, height: 800 },
            { src: "/brskut/Brskut2.jpg", alt: "2", width: 400, height: 800 },
          ],
        },
        {
          paragraphs: t.raw("brskut_desc_2"),
          images: [
            { src: "/brskut/Brskut3.jpg", alt: "3", width: 400, height: 800 },
            { src: "/brskut/Brskut4.jpg", alt: "4", width: 400, height: 800 },
          ],
          slider_images: [
            { src: "/brskut/Brskut5.jpg", alt: "1", width: 400, height: 800 },
            { src: "/brskut/Brskut6.jpg", alt: "2", width: 400, height: 800 },
            { src: "/brskut/Brskut7.jpg", alt: "3", width: 400, height: 800 },
          ],
          secondaryImages: [
            {
              src: "/brskut/Brskut8.jpg",
              alt: "1",
              width: 400,
              height: 800,
            },
          ],
        },
      ],
    },
    {
      title: t("histora_naslov"),
      subtitle: t("histora_teaser"),
      banner_image: {
        src: "/histora/histora0.jpg",
        alt: "1",
        width: 400,
        height: 800,
      },
      date: "28.08.2025",
      slug: "histora",
      sections: [
        {
          title: t("histora_naslov_1"),
          main_description: t.raw("histora_main_desc_1"),
          paragraphs: t.raw("histora_desc_2"),
          images: [{ src: "/histora/histora_slika.pngþ", alt: "Histora" }],
        },
        {
          title: t("histora_naslov_2"),
          paragraphs: t.raw("histora_desc_2"),
        },
      ],
    },
  ];

  const { slug } = use(params);
  const blog = blogs.find((p) => p.slug === slug);

  return (
    <div className="w-full h-full">
      <div className="w-full mt-2">
        <Image
          src={blog.banner_image}
          alt={blog.title}
          width={1920}
          height={855}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center py-12">
        <h2 className="text-center">{blog.title}</h2>
        <h3 className="w-full md:w-2/3 pb-24 text-center text-3xl text-gray-500 italic">
          {blog.subtitle}
        </h3>
        <div className="flex flex-col">
          {blog.sections.map((section, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-8 w-full md:w-1/2 mx-auto"
              >
                {section.main_description && (
                  <div>
                    <h3 className="text-xl">{section.main_description}</h3>
                  </div>
                )}
                {section.title && (
                  <h3 className="text-xl font-semibold italic">
                    {section.title}
                  </h3>
                )}
                <div className="flex flex-col gap-8">
                  {section.paragraphs.map((p, index) => (
                    <p key={index} className="text-lg">
                      {p}
                    </p>
                  ))}
                </div>
                {section.images && (
                  <div className="flex flex-col xl:flex-row gap-4">
                    {section.images.map((image) => (
                      <div
                        key={image.alt}
                        className="relative w-full h-[500px]"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
                <div>
                  {section.slider_images && (
                    <Slider images={section.slider_images} slidesToShow={2} />
                  )}
                </div>
                {section.secondaryImages && (
                  <div className="flex flex-col xl:flex-row gap-4">
                    {section.secondaryImages.map((image) => (
                      <div
                        key={image.alt}
                        className="relative w-full h-[500px]"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
