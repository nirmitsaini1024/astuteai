"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function FloatingParticles() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Initialize dimensions on mount
    window.addEventListener("resize", handleResize); // Update dimensions on resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <>
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-violet-400/20 rounded-full hidden sm:block"
          initial={{
            x: Math.random() * dimensions.width - dimensions.width / 2,
            y: Math.random() * dimensions.height - dimensions.height / 2,
          }}
          animate={{
            x: [
              Math.random() * dimensions.width - dimensions.width / 2,
              Math.random() * dimensions.width - dimensions.width / 2,
              Math.random() * dimensions.width - dimensions.width / 2,
            ],
            y: [
              Math.random() * dimensions.height - dimensions.height / 2,
              Math.random() * dimensions.height - dimensions.height / 2,
              Math.random() * dimensions.height - dimensions.height / 2,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}
