import { Hero } from "@/components/Hero";
import { CallToAction } from "@/components/CallToAction";
import { Discover } from "@/components/Discover";
import { ServicesSection } from "@/components/service-section";
import FAQ from "@/components/FAQ/index";
import Works from "./works/page";
import { SeoSection } from "@/components/seo-section";
// import LocomotiveScrollWrapper from "@/components/LocomotiveScrollWrapper ";

export default function Home() {
  return (
    <>

      {/* <LocomotiveScrollWrapper> */}
        <Hero />
        <ServicesSection />
        <Works />
        <SeoSection />
        
        <Discover />
        <FAQ />
        <CallToAction />
      {/* </LocomotiveScrollWrapper> */}
    </>
  );
}
