import { siteConfig } from "@/lib/site";

type BreadCrumbItem = {
  name: string;
  path: string;
};

export function getSiteSchemas() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    logo: `${siteConfig.url}/icon`,
    image: `${siteConfig.url}/opengraph-image`
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "zh-Hant"
  };

  return [organization, website];
}

export function getWebPageSchema({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${title} | ${siteConfig.name}`,
    description,
    url: `${siteConfig.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    },
    inLanguage: "zh-Hant"
  };
}

export function getBreadcrumbSchema(items: BreadCrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`
    }))
  };
}
