"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/Navbarr";
import Footer from "@/components/Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Check if the current route is /admin
  const isAdminRoute = pathname === "/admin";

  return (
    <>
      {/* Show SiteHeader only if not on /admin */}
      {!isAdminRoute && <SiteHeader />}
      {children}
      {/* Show Footer only if not on /admin */}
      {!isAdminRoute && <Footer />}
    </>
  );
}
