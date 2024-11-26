import SiteHeader from "@/components/Navbarr";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { TimelineDemo } from "@/components/Timeline";
import { Featuress } from "@/components/seo-section";
import { Discover } from "@/components/Discover";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <Hero />
      <Features />
      <TimelineDemo />
      <Featuress />
      <Discover />
      <CallToAction />
    </>
  );
}
