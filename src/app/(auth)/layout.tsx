import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login for your account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
