import type { Metadata } from "next";
export { default } from "../company/page";

export const metadata: Metadata = {
  alternates: {
    canonical: "/company"
  },
  robots: {
    index: false,
    follow: true
  }
};
