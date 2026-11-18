import type { MetadataRoute } from "next";
import { events } from "@/lib/events";
import { articles, topicOrder } from "@/lib/insights";
import { SITE_LAST_UPDATED, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE_LAST_UPDATED;
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/speaking`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/press`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/regional-marketing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/insights`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...topicOrder.map((t) => ({
      url: `${SITE_URL}/insights/topic/${t}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...articles.map((a) => ({
      url: `${SITE_URL}/insights/${a.slug}`,
      lastModified: a.updated ?? a.published,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/events`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...events
      .filter((e) => !e.placeholder)
      .map((e) => ({
        url: `${SITE_URL}/events/${e.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      })),
  ];
}
