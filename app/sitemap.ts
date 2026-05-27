import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.nalinsharma.co.in",
      lastModified: "2026-05-17",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
