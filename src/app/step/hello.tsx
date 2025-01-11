"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sparkles, Rocket, Brain } from "lucide-react";
type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const TimelineItem = ({ step, index }: { step: Step; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 0 }} 
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative flex items-center gap-8 group"
    >
      <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50" />

      <div className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 1 }} 
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5"
        >
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            {step.icon}
          </div>
        </motion.div>
      </div>

      <div className="flex-1 relative group">
        <motion.div
          whileHover={{ scale: 1.02 }}
          initial={{ scale: 1 }}
          className="bg-zinc-900/80 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

          <span className="text-purple-400 font-medium mb-2 block">
            Step {index + 1}
          </span>
          <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
            {step.title}
          </h3>
          <p className="text-zinc-400 leading-relaxed">{step.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ProcessCards2() {
  const steps = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-300" />,
      title: "Highlight Showcase",
      description:
        "Design a website that works as hard as you do! SEO-optimized, visually striking, and packed with seamless user experiences to boost engagement.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-pink-300" />,
      title: "Advertise & Revitalize",
      description:
        "Streamline your content with AI! Effortlessly generate blogs, social media posts, and ads that grab attention and drive engagement!",
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-300" />,
      title: "Analyse & Grow",
      description:
        "Gain real-time insights with multilingual analytics! Monitor your business performance, decode trends, and refine strategies for continuous growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 pb-20 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 0 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            How we bring it to Life
          </h2>
          <p className="text-zinc-400 text-lg">
            Transform your business with our three-step process
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <TimelineItem key={index} step={step} index={index} />
          ))}
          
        </div>
      </div>
     
    </div>
  );
}
