import { Hero } from "@/components/Hero";
import { CallToAction } from "@/components/CallToAction";
import { SeoSection } from "@/components/seo-section";
import { Discover } from "@/components/Discover";
import { ServicesSection } from "@/components/service-section";
import { ProcessSectionAlt } from "@/components/process-section-alt";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSectionAlt />
      <SeoSection />
      <Discover />
      <CallToAction />
    </>
  );
}
