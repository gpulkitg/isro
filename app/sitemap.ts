import type { MetadataRoute } from "next";
import { getAllRoutes } from "@/lib/content/routes";
import { SITE_URL } from "@/lib/site";

// All 155 statically-generated routes (sourced from the same routes.json that
// powers the route-validity guard), emitted at build time as /sitemap.xml.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllRoutes().map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
