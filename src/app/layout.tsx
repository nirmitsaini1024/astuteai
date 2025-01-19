import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";
// import { Analytics } from "@vercel/analytics/next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

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
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{metadata.title as string}</title>
          <meta name="description" content={metadata.description as string} />
        </head>
        <body className={clsx(dmSans.className, "antialiased")}>
          <ConditionalLayout>
            {" "}
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}{" "}
            </ThemeProvider>
          </ConditionalLayout>
          <Toaster />
          {/* <Analytics mode="production" /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
