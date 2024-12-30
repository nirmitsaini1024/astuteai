import { Hero } from "@/components/Hero";
import { CallToAction } from "@/components/CallToAction";
import { SeoSection } from "@/components/seo-section";
import { Discover } from "@/components/Discover";
import { ServicesSection } from "@/components/service-section";
import { ProcessSectionAlt } from "@/components/process-section-alt";
import { Dashboard } from "@/components/dashboard/Dashboard";
import { Brain, LineChart as ChartIcon, Link, Target } from "lucide-react";
import FAQ from "@/components/FAQ/index";

// const products = [
//   {
//     icon: <Brain className="w-6 h-6" />,
//     name: "Smart Keyword Generator",
//     description: "AI-powered keyword research and optimization suggestions"
//   },
//   {
//     icon: <ChartIcon className="w-6 h-6" />,
//     name: "Analytics Dashboard",
//     description: "Real-time SEO metrics and performance tracking"
//   },
//   {
//     icon: <Link className="w-6 h-6" />,
//     name: "Backlink Audit",
//     description: "Comprehensive backlink analysis and monitoring"
//   },
//   {
//     icon: <Target className="w-6 h-6" />,
//     name: "Content Evaluation",
//     description: "AI-driven content analysis and optimization"
//   }
// ];

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSectionAlt />
      <SeoSection />
        {/* <div className="max-w-6xl mx-auto bg-black">
          <Dashboard />
        </div> */}
      <Discover />
      <FAQ />
      <CallToAction />
    </>
  );
}
