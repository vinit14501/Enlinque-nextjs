import type { Metadata } from "next";
import FaqPage from "@/components/faq/FaqPage";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Enlinque Consulting services.",
  openGraph: {
    title: "FAQ | Enlinque Consulting LLC",
    description:
      "Frequently asked questions about Enlinque Consulting services.",
    url: "https://enlinque.com/faq",
  },
  twitter: {
    card: "summary",
    title: "FAQ | Enlinque Consulting LLC",
    description:
      "Frequently asked questions about Enlinque Consulting services.",
  },
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqRoute() {
  return <FaqPage />;
}
