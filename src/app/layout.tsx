import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import SiteHeader from "@/components/Navbarr";
import Footer from "@/components/Footer";
import { Analytics } from '@vercel/analytics/next';

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Astute AI",
  description: "One stop solution for all your Startup needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>
        <SiteHeader />
        {children}
        <Analytics mode="production" />;

        <Footer />

      </body>
    </html>
  );
}
