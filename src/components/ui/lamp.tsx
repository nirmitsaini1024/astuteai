"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [size, setSize] = useState({
    initialWidth: "12rem",
    viewWidth: "24rem",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSize({ initialWidth: "6rem", viewWidth: "12rem" });
      } else {
        setSize({ initialWidth: "12rem", viewWidth: "24rem" });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        "relative flex flex-col mt-16 items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="mt-8 relative flex w-full h-48 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.4, width: size.initialWidth }}
          whileInView={{ opacity: 0.8, width: size.viewWidth }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 overflow-visible w-[24rem] bg-gradient-conic from-violet-400 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-32 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.4, width: size.initialWidth }}
          whileInView={{ opacity: 0.8, width: size.viewWidth }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 w-[24rem] bg-gradient-conic from-transparent via-transparent to-violet-400 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-32 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-32 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-32 w-full translate-y-10 scale-x-150 bg-black blur-2xl"></div>
        <motion.div
          initial={{ width: size.initialWidth }}
          whileInView={{ width: size.viewWidth }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[24rem] -translate-y-[5rem] bg-violet-400 opacity-70"
        ></motion.div>
      </div>

      <div className="relative z-50 flex -translate-y-24 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
