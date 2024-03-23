import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MySpark",
  description:
    "Connect, Share, Discover! Unlock a world tailored to your interests! At MySpark, we believe every connection ignites a new opportunity to learn, laugh, and grow. Begin your journey with us today and be part of a community where genuine connections are just a spark away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
