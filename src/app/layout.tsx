import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import SiteHeader from "@/components/Navbarr";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Astute AI",
  description: "One stop solution for all your Startup needs",
=======
  title: "Astute ai",
  description: "One step solution for all your Startup needs",
>>>>>>> 25bb0ab (fixed)
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
      </body>
    </html>
  );
}
