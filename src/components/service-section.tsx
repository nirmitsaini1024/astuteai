"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServiceCard } from "./Service-card";
import { Globe, PenTool, Share2, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tilt } from "@/components/ui/tilt";
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const services = [
    {
      icon: Globe,
      title: "ShopFrontAI",
      description:
        "Create stunning, SEO-friendly websites for maximum engagement and seamless performance.",
    },
    {
      icon: PenTool,
      title: "BloggerAI",
      description:
        "Automate blog creation with optimized SEO for boosted website traffic.",
    },
    {
      icon: Share2,
      title: "Social Spark",
      description:
        "Effortlessly design and post social media ads, posters, and videos.",
    },
    {
      icon: BarChart3,
      title: "InsightQ",
      description:
        "Visualize data with multilingual, omnichannel analytics for smarter decision-making.",
    },
  ];
  const { theme } = useTheme();

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-16",
        "bg-black/95 backdrop-blur-3xl",
        "relative overflow-hidden"
      )}
    >
   
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute bg-black"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div ref={headingRef} className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            What we offer{" "}
          </motion.h2>
          <motion.p
            className="text-lg text-zinc-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Fueling entrepreneurs with AI tools to simplify marketing and
            accelerate growth!
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Tilt key={service.title} rotationFactor={8} isRevese>
              <MagicCard
                gradientColor={theme === "dark" ? "#6E3DB6" : "#6E3DB6"}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.2}
                />
              </MagicCard>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
