import type { Metadata } from "next";
import { defaultKeywords, siteConfig } from "@/lib/site";

type BuildMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  keywords?: readonly string[];
};

export function buildMetadata({
  title,
  description,
  canonical,
  keywords = defaultKeywords
}: BuildMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    keywords: [...keywords],
    alternates: {
      canonical
    },
    openGraph: {
      type: "website",
      locale: "zh_TW",
      url: `${siteConfig.url}${canonical}`,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.twitterImage]
    }
  };
}
