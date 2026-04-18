import type { Metadata } from "next";
import FractionalCxO from "@/components/fractionalCxO/FractionalCxO";

export const metadata: Metadata = {
  title: "Fractional CxO Services",
  description:
    "Access world-class executive leadership — CIO, CTO, CMO, CFO, COO — without the full-time commitment.",
  openGraph: {
    title: "Fractional CxO Services | Enlinque Consulting LLC",
    description:
      "Access world-class executive leadership — CIO, CTO, CMO, CFO, COO — without the full-time commitment.",
    url: "https://enlinque.com/fractionalCxO",
    images: [
      {
        url: "/images/fractional.webp",
        width: 1200,
        height: 630,
        alt: "Fractional CxO Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CxO Services | Enlinque Consulting LLC",
    description:
      "Access world-class executive leadership — CIO, CTO, CMO, CFO, COO — without the full-time commitment.",
    images: ["/images/fractional.webp"],
  },
  alternates: {
    canonical: "/fractionalCxO",
  },
};

export default function FractionalCxOPage() {
  return <FractionalCxO />;
}
