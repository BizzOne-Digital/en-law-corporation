import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/testimonials",
    "/contact",
  ];
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
