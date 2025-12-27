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
      main_paragraphs: t.raw("brskut_desc_1"),
      paragraphs: t.raw("brskut_desc_2"),
      banner_image: {
        src: "/brskut/Brskut0.jpg",
        alt: "1",
        width: 400,
        height: 800,
      },
      main_images: [
        { src: "/brskut/Brskut1.jpg", alt: "1", width: 400, height: 800 },
        { src: "/brskut/Brskut2.jpg", alt: "2", width: 400, height: 800 },
      ],
      blog_images: [
        { src: "/brskut/Brskut3.jpg", alt: "3", width: 400, height: 800 },
        { src: "/brskut/Brskut4.jpg", alt: "4", width: 400, height: 800 },
      ],
      slider_images: [
        { src: "/brskut/Brskut5.jpg", alt: "1", width: 400, height: 800 },
        { src: "/brskut/Brskut6.jpg", alt: "2", width: 400, height: 800 },
        { src: "/brskut/Brskut7.jpg", alt: "3", width: 400, height: 800 },
      ],
      singleImage: {
        src: "/brskut/Brskut8.jpg",
        alt: "1",
        width: 400,
        height: 800,
      },
      date: "28.08.2025",
      slug: "brskut",
    },
  ];

  const { slug } = use(params);
  const blog = blogs.find((p) => p.slug === slug);

  return (
    <div className="w-full h-full">
      <div className="relative w-full aspect-video">
        <Image
          src={blog.banner_image}
          alt="Placeholder"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center py-12">
        <h2 className="text-center">{blog.title}</h2>
        <h3 className="w-full md:w-2/3 pb-24 text-center text-3xl text-gray-500 italic">
          {blog.subtitle}
        </h3>
        <div className="flex flex-col gap-8 w-full md:w-1/2 mx-auto">
          {blog.main_paragraphs.map((p, index) => (
            <p key={index} className="text-xl">
              {p}
            </p>
          ))}
          <div className="flex flex-col xl:flex-row gap-4 mt-12">
            {blog.main_images.map((image) => (
              <div key={image.alt} className="relative w-full h-[500px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          {blog.paragraphs.map((p, index) => (
            <p key={index} className="text-xl">
              {p}
            </p>
          ))}
          <div className="flex flex-col xl:flex-row gap-4 mt-12">
            {blog.blog_images.map((image) => (
              <div key={image.alt} className="relative w-full h-[500px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <Slider images={blog.slider_images} slidesToShow={2} />

          <div className="relative w-full aspect-video">
            <Image
              src={blog.singleImage}
              alt="Placeholder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
