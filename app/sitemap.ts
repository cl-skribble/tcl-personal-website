import type { MetadataRoute } from "next";
import { events } from "@/lib/events";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/press`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/events`, changeFrequency: "weekly", priority: 0.7 },
    ...events
      .filter((e) => !e.placeholder)
      .map((e) => ({
        url: `${SITE_URL}/events/${e.slug}`,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })),
  ];
}
