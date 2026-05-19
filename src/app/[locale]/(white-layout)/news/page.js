import PagesWrapper from "@/components/wrappers/PagesWrapper";
import News from "@/components/webpages/News";
import { getTranslations } from "next-intl/server";
import { getBlogs } from "@/lib/data";

export const revalidate = 3600;

export async function generateMetadata() {
  const t = await getTranslations("Metadata.news_page");
  return {
    title: t("title"),
    description: t("description"),
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
