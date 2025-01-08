import { Hero } from "@/components/Hero";
import { CallToAction } from "@/components/CallToAction";
import { SeoSection } from "@/components/seo-section";
import { Discover } from "@/components/Discover";
import { ServicesSection } from "@/components/service-section";
import { ProcessSectionAlt } from "@/components/process-section-alt";
import FAQ from "@/components/FAQ/index";
import ProcessCards2 from "./step/hello";
import AnimatedTimeline from "./step/page3";
import Works from "./works/page";

export default function Home() {
  
  return (
    <>
      <Hero />
      <ServicesSection />
      <Works />
      {/* <ProcessCards2 /> 
      <ProcessSectionAlt />
      <AnimatedTimeline /> */}
      {/* <SeoSection /> */}
      <Discover />
      <FAQ />
      <CallToAction />
    </>
  );
}
