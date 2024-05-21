import { ColorModeScript, theme } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "Explore the world of AI with our AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("startttt");
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/logo-ai-assistant.png"
          type="image/png"
        />
      </head>
      <body className={inter.className}>
        {/* Add ColorModeScript to use the color mode feature of Chakra UI. */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
