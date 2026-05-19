const BASE = "https://kataagency.com";

export const DEFAULT_OG_IMAGE = {
  url: `${BASE}/home-page.png`,
  width: 1200,
  height: 630,
  alt: "Kata Design",
};

export function seoAlternates(locale, path = "") {
  const suffix = path ? `/${path}` : "";
  return {
    canonical: `${BASE}/${locale}${suffix}`,
    languages: {
      "x-default": `${BASE}/mn${suffix}`,
      mn: `${BASE}/mn${suffix}`,
      en: `${BASE}/en${suffix}`,
    },
  };
}
