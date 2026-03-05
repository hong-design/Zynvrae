export type NavigationItem = {
  href: string;
  label: string;
};

export const primaryNavigation: NavigationItem[] = [
  { href: "/products", label: "Products" },
  { href: "/principles", label: "Principles" },
  { href: "/updates", label: "Updates" },
  { href: "/about", label: "About" }
];
