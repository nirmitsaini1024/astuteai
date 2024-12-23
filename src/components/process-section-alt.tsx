"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ListChecks, Megaphone, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "List",
    subtitle: "Showcase your products",
    description: "Build a professional, SEO-optimized website effortlessly. Showcase your products with stunning designs for maximum engagement and seamless user experience",
    icon: ListChecks,
  },
  {
    title: "Market",
    subtitle: "Power up your marketing",
    description: "Automate blog creation and social media content generation with AI-driven tools. Effortlessly craft ads and posters tailored for multiple social media platforms to meet your customers' attention",
    icon: Megaphone,
  },
  {
    title: "Analyse",
    subtitle: "Unlock Actionable Insights",
    description: "Simplify data interpretation with multilingual analytics. Track performance, understand trends, and optimize strategies in a omnichannel platform for continuous business growth",
    icon: BarChart,
  },
];

function ProcessItem({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const Icon = step.icon;

  return (
    <motion.div
    id="divein" 
      ref={ref}
      style={{ y, opacity, scale }}
      className={cn(
        "flex gap-8 items-start relative",
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-600 md:left-1/2" />

      {/* Content */}
      <div className={cn(
        "flex-1 flex gap-8 items-start",
        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
      )}>
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center relative z-9">
            <Icon className="w-8 h-8 text-zinc-200" />
          </div>
          <div className="absolute inset-0 bg-violet-500/10 rounded-full blur-xl" />
        </div>

        <div className="flex-1 max-w-lg space-y-4">
          <div className="space-y-1">
            <span className="text-sm text-zinc-400 font-mono">Step {index + 1}</span>
            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
            <p className="text-lg text-violet-400">{step.subtitle}</p>
          </div>
          <p className="text-zinc-400 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function ProcessSectionAlt() {
  return (
    <section className="bg-black min-h-screen py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-violet-500"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zinc-300 max-w-2xl mx-auto"
          >
            Transform your business with our three-step process
          </motion.p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <ProcessItem key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}