"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#ffffff");
  }, [resolvedTheme]);
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12 md:pt-24">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center md:text-left px-4 md:px-8"
          >
            <motion.h1
              className="text-white text-4xl md:text-5xl lg:text-7xl font-bold"
              // style={{
              //   background: "linear-gradient(135deg, #A855F7 0%, #6366F1 100%) ",
              //   WebkitBackgroundClip: "text",
              //   WebkitTextFillColor: "transparent",
              // }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Shop FrontAI
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Description that captures the essence of your product and its
              unique value proposition. Make it compelling and concise.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-md mx-auto aspect-square md:aspect-[4/3]"
          >
            <Image
              src="https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=800&auto=format&fit=crop"
              alt="Product showcase"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div><Particles
        className="absolute inset-0 z-0"
        quantity={45}
        ease={80}
        color={color}
        refresh
      />
      </div>
      
    </div>
  );
}
