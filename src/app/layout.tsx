import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { env } from "process";

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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V9Q80WSY4L"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];0
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');`}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
