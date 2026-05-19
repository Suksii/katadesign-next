import PagesWrapper from "@/components/wrappers/PagesWrapper";
import News from "@/components/webpages/News";
import { seoAlternates, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { getTranslations } from "next-intl/server";
import { getBlogs } from "@/lib/data";

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations("Metadata.news_page");
  return {
    title: t("title"),
    description: t("description"),
    alternates: seoAlternates(locale, "news"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://kataagency.com/${locale}/news`,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function NewsPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "NewsPage" });
  const blogs = await getBlogs();

  return (
    <PagesWrapper title={t("novosti")}>
      <News blogs={blogs} locale={locale} />
    </PagesWrapper>
  );
}
