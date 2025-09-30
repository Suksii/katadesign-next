import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import News from "@/components/webpages/News";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("Metadata.news_page");
  return {
    title: t("title"),
    description: t("description"),
  };
}

function NewsPage() {
  const t = useTranslations("NewsPage");

  return (
    <PagesWrapper title={t("novosti")}>
      <News />
    </PagesWrapper>
  );
}

export default NewsPage;
