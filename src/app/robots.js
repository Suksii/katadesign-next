export default function robots() {
  const blockRobots = process.env.NEXT_PUBLIC_BLOCK_ROBOTS === "true";

  if (blockRobots) {
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
