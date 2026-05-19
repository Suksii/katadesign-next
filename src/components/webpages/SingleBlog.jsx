import Image from "next/image";
import Slider from "../Slider";

const SingleBlog = ({ blog, locale }) => {
  const title = locale === "mn" ? blog.titleMn : blog.titleEn;
  const subtitle = locale === "mn" ? blog.subtitleMn : blog.subtitleEn;

  return (
    <div className="w-full h-full">
      <div className="w-full mt-2">
        <Image src={blog.bannerImage} alt={title} width={1920} height={855} className="object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center py-12">
        <h2 className="text-center">{title}</h2>
        <h3 className="w-full md:w-2/3 pb-24 text-center text-3xl text-gray-500 italic">
          {subtitle}
        </h3>
        <div className="flex flex-col">
          {blog.sections.map((section, index) => {
            const sectionTitle = locale === "mn" ? section.titleMn : section.titleEn;
            const mainDesc = locale === "mn" ? section.mainDescriptionMn : section.mainDescriptionEn;
            const paragraphs = locale === "mn" ? section.paragraphsMn : section.paragraphsEn;

            return (
              <div key={index} className="flex flex-col gap-8 w-full md:w-1/2 mx-auto">
                {mainDesc && <h3 className="text-xl">{mainDesc}</h3>}
                {sectionTitle && <h3 className="text-xl font-semibold italic">{sectionTitle}</h3>}
                <div className="flex flex-col gap-8">
                  {paragraphs?.map((p, i) => (
                    <p key={i} className="text-lg">{p}</p>
                  ))}
                </div>
                {section.images?.length > 0 && (
                  <div className="flex flex-col xl:flex-row gap-4">
                    {section.images.map((image) => (
                      <div key={image.alt} className="relative w-full h-[500px]">
                        <Image src={image.src} alt={image.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
                {section.sliderImages?.length > 0 && (
                  <Slider images={section.sliderImages} slidesToShow={2} />
                )}
                {section.secondaryImages?.length > 0 && (
                  <div className="flex flex-col xl:flex-row gap-4">
                    {section.secondaryImages.map((image) => (
                      <div key={image.alt} className="relative w-full h-[500px]">
                        <Image src={image.src} alt={image.alt} fill className="object-cover" />
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
