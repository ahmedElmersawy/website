import type { MetadataRoute } from "next";

const siteUrl = "https://ahmedelmersawy.online";

const routes = [
  "",
  "/research",
  "/publications",
  "/projects",
  "/awards",
  "/resume",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
