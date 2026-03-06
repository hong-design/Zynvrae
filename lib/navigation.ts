export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: NavigationItem[] = [
  { href: "/platform", label: "關於我們" },
  { href: "/products", label: "產品與服務" },
  { href: "/company", label: "公司簡介" },
  { href: "/contact", label: "聯絡我們" }
];
