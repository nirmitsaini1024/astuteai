"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/Navbarr";
import Footer from "@/components/Footer";

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAdminRoute = pathname === "/auth/admin";

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
