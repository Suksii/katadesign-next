import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["mn", "en"],
  defaultLocale: "mn",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      mn: "/o-nama",
    },
    "/contact": {
      en: "/contact",
      mn: "/kontakt",
    },
    "/services": {
      en: "/services",
      mn: "/usluge",
    },
    "/projects": {
      en: "/projects",
      mn: "/projekti",
    },
    "/projects/[slug]": {
      en: "/projects/[slug]",
      mn: "/projekti/[slug]",
    },
    "/news/[slug]": {
      en: "/news/[slug]",
      mn: "/novosti/[slug]",
    },
    "/careers": {
      en: "/careers",
      mn: "/karijera",
    },
  },
});
