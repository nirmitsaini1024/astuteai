"use client";

import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedNumber } from "@/components/animated-number";
import { FloatingParticles } from "@/components/floating-particles";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden -mt-[7rem]">
      <div className="absolute inset-0 bg-gradient-radial from-violet-900/5 to-transparent pointer-events-none" />

      <div className="text-center space-y-6 sm:space-y-8 md:space-y-12 relative z-10 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 md:space-x-4">
            <AnimatedNumber number="4" />
            <AnimatedNumber number="0" />
            <AnimatedNumber number="4" />
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-violet-200 mt-4 sm:mt-6 md:mt-8"
          >
            Page Not Found
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-violet-200/80 max-w-[280px] sm:max-w-md mx-auto text-sm sm:text-base md:text-lg px-4"
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/">
            <Button
              variant="default"
              size="lg"
              className="gap-2 bg-violet-600 hover:bg-violet-700 text-white px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-violet-500/20 translate-y-full group-hover:translate-y-0 transition-transform" />
              <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
              <span className="relative z-10">Back to Home</span>
            </Button>
          </Link>
        </motion.div>

        <div className="absolute inset-0 overflow-hidden">
          <FloatingParticles />
        </div>
      </div>
    </div>
  );
}