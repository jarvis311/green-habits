import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "@/lib/constants";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
}

/** Shared helper so every route gets consistent OpenGraph/Twitter metadata alongside its title. */
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url: path,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [image],
    },
  };
}
