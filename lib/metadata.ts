import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = { title: string; description: string; path: string; noIndex?: boolean };

export function pageMetadata({ title, description, path, noIndex }: PageMeta): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_CA",
      type: "website",
      images: [{ url: "/images/og-image-theme.jpg", width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/images/og-image-theme.jpg"] },
  };
}
