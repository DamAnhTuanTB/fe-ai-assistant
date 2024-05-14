import { ColorModeScript } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import theme from "./theme";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Add ColorModeScript to use the color mode feature of Chakra UI. */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          {children}
          </Providers>
      </body>
    </html>
  );
}
