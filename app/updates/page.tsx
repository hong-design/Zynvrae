import type { Metadata } from "next";
export { default } from "../products/page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/products"
  },
  robots: {
    index: false,
    follow: true
  }
};
