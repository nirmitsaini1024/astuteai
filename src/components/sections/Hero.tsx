"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { SparklesCore } from "../ui/sparkles";

export function HeroContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8 text-center md:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Shop FrontAI
          </h1>
          <div className="w-[40rem] relative">
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm sm:-translate-x-8" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 sm:-translate-x-8" />

            {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" /> */}
            {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
          </div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Description that captures the essence of your product and its unique
          value proposition. Make it compelling and concise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <button className="px-8 py-3 bg-violet-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-violet-700 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
            Get Started
          </button>
          {/* <button className="px-8 py-3 border border-violet-900 text-violet-300 rounded-lg font-medium transition-all duration-300 hover:border-violet-800 hover:text-violet-200">
            Learn More
          </button> */}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative w-full max-w-md mx-auto aspect-square md:aspect-[4/3]"
      >
        <div className="absolute inset-0 bg-violet-900/5 rounded-xl -z-10 blur-3xl transform scale-95" />
        <Image
          src="https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=800&auto=format&fit=crop"
          alt="Product showcase"
          fill
          className="object-cover rounded-2xl shadow-2xl"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </div>
  );
}
