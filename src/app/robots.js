export default function robots() {
  const isVercelUrl = process.env.VERCEL_URL?.includes("vercel.app") ?? false;

  if (isVercelUrl) {
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
    sitemap: "https://kataagency.com/sitemap.xml",
  };
}
