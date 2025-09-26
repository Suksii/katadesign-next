import PagesWrapper from "@/components/wrappers/PagesWrapper";
import { useTranslations } from "next-intl";
import News from "@/components/webpages/News";

function NewsPage() {
  const t = useTranslations("NewsPage");

  return (
    <PagesWrapper title={t("novosti")}>
      <News />
    </PagesWrapper>
  );
}

export default NewsPage;
