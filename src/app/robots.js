export default function robots() {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "katadesign.vercel.app";

  if (domain.includes("vercel.app")) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/admin-login"],
    },
    sitemap: `https://${domain}/sitemap.xml`,
  };
}
