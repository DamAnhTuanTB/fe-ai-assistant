import { Metadata } from "next/types";
import GenerateDiagramPage from "./GenerateDiagramPage";

export const metadata: Metadata = {
  title: "Generate Diagram",
  description: "Explore the world of AI with our AI assistant.",
  openGraph: {
    title: "Generate Diagram",
    description: "Explore the world of AI with our AI assistant.",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "AI Assistant",
    images: [
      {
        url: "https://assets-global.website-files.com/645523c36dce1ac1ed9106e2/64dde1726d446b169fb8d05d_GPT-3%20Personal%20Assistant.png", // Must be an absolute URL
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
  },
};

export default function GeneratePdf() {
  return <GenerateDiagramPage />;
}
