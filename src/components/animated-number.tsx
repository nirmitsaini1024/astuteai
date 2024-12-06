"use client";

import { motion } from "framer-motion";

interface AnimatedNumberProps {
  number: "4" | "0";
}

export function AnimatedNumber({ number }: AnimatedNumberProps) {
  if (number === "0") {
    return (
      <motion.div
        className="inline-block relative w-[4rem] h-[6rem] sm:w-[6rem] sm:h-[9rem] md:w-[8rem] md:h-[12rem]"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="w-full h-full border-4 sm:border-6 md:border-8 border-violet-400 rounded-full relative">
            <motion.div
              className="absolute inset-0 bg-violet-500/20"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.span
      className="inline-block text-[6rem] sm:text-[9rem] md:text-[12rem] font-bold text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {number}
    </motion.span>
  );
}