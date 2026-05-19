import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.currentSite;
  const staticRoutes = ["", "/services", "/portfolio", "/about", "/contact"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...areas.map((a) => ({
      url: `${base}/areas/${a.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
