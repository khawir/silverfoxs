import type { MetadataRoute } from "next";
import { productsNav, servicesNav, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    ...servicesNav.map((s) => `/services/${s.slug}`),
    "/technologies",
    ...productsNav.map((p) => `/technologies/${p.slug}`),
    "/engineering",
    "/about",
    "/contact",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
