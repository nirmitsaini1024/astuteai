import SiteHeader from "@/components/Navbarr";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { TimelineDemo } from "@/components/Timeline";
import { SeoSection } from "@/components/seo-section";
import { Discover } from "@/components/Discover";
import Footer from "@/components/Footer";
import { ServicesSection } from "@/components/service-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <ServicesSection />
      {/* <Features /> */}
      {/* <TimelineDemo /> */}
      <SeoSection />
      <Discover />
      <CallToAction />
      <Footer />
    </>
  );
}
