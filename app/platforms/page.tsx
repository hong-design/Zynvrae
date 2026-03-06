import type { Metadata } from "next";
export { default } from "../platform/page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/platform"
  },
  robots: {
    index: false,
    follow: true
  }
};
