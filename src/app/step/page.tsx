"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Sparkles, Rocket, Brain } from "lucide-react";

// Define a type for the steps
type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type ProcessCardProps = {
  step: Step;
  index: number;
};

const ParticleBackground = () => {
  const particles = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const ProcessCard: React.FC<ProcessCardProps> = ({ step, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
          rotateX: isHovered ? 5 : 0,
          rotateY: isHovered ? 5 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />

        <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mb-6"
          >
            <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
              {step.icon}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-purple-400 font-medium">Process {index + 1}</span>
              <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            </div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              {step.title}
            </h3>

            <p className="text-zinc-400 leading-relaxed">{step.description}</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            animate={{
              scale: isHovered ? 1.2 : 1,
              opacity: isHovered ? 0.8 : 0.4,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProcessCards() {
  const steps: Step[] = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-300" />,
      title: "Highlight Showcase",
      description:
        "Design a website that works as hard as you do! SEO-optimized, visually striking, and packed with seamless user experiences to boost engagement.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-pink-300" />,
      title: "Advertise & Revitalize",
      description:
        "Streamline your content with AI! Effortlessly generate blogs, social media posts, and ads that grab attention and drive engagement!",
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-300" />,
      title: "Analyse & Grow",
      description:
        "Gain real-time insights with multilingual analytics! Monitor your business performance, decode trends, and refine strategies for continuous growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative">
      <ParticleBackground />

      <div className="max-w-3xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
            How we bring it to Life
          </h2>
          <p className="text-zinc-400 text-lg">
            Transform your business with our three-step process
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <ProcessCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
