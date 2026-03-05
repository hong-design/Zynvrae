export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: NavigationItem[] = [
  { href: "/platform", label: "Platform" },
  { href: "/products", label: "Products" },
  { href: "/company", label: "Company" },
  { href: "/contact", label: "Contact" }
];
