"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero-title", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out",
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="hero-title text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your E-commerce
          <br />
          with AI Power
        </motion.h1>
        <motion.p 
          className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ShopFrontAI revolutionizes online stores with intelligent automation, 
          personalized shopping experiences, and data-driven insights.
        </motion.p>
        <motion.div 
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Start Free Trial
          </button>
          <button className="border border-purple-600 hover:bg-purple-600/10 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}