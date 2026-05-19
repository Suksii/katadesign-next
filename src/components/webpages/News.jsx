import { Link } from "@/i18n/navigation";
import { formatDateParts } from "../utils/helpers";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const News = async ({ blogs, locale }) => {
  const t = await getTranslations({ locale, namespace: "NewsPage" });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog) => {
        const title = locale === "mn" ? blog.titleMn : blog.titleEn;
        const subtitle = locale === "mn" ? blog.subtitleMn : blog.subtitleEn;

        return (
          <div key={blog.id} className="bg-white flex flex-col">
            <Link
              href={`/${t("novosti_slug")}/${blog.slug}`}
              className="relative w-full h-[300px] overflow-hidden"
            >
              <Image src={blog.bannerImage} alt={title} fill className="object-cover" />
            </Link>

            <div className="py-2 flex flex-col md:flex-row gap-4">
              <div className="text-sm text-gray-600">
                <p className="block md:hidden">{blog.date}</p>
                <div className="hidden md:flex flex-col items-center justify-center leading-none">
                  <span className="text-2xl font-semibold tracking-wide">
                    {formatDateParts(blog.date).month}
                  </span>
                  <span className="w-6 border-b border-gray-800 my-1" />
                  <span className="text-lg tracking-wide">
                    {formatDateParts(blog.date).year}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link
                  href={`/${t("novosti_slug")}/${blog.slug}`}
                  className="text-xl font-medium"
                >
                  {title}
                </Link>
                <p className="text-lg line-clamp-3 md:line-clamp-4">{subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
