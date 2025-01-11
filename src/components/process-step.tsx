"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  onStepHover: () => void;
}

export function ProcessStep({ step, title, description, icon: Icon, isActive, onStepHover }: ProcessStepProps) {
  return (
    <motion.div
      className="relative"
      onMouseEnter={onStepHover}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Connector Line */}
      {step < 3 && (
        <div className="hidden md:block absolute left-[50%] top-[4rem] w-full h-[2px] bg-gradient-to-r from-zinc-800 to-zinc-800">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-600 to-blue-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isActive ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      )}

      <div className={cn(
        "relative group cursor-pointer",
        "transition-all duration-500 ease-out"
      )}>
        <div className={cn(
          "absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100",
          "bg-gradient-to-r from-violet-600/50 to-blue-600/50",
          "blur-lg transition-all duration-500",
          isActive && "opacity-75"
        )} />

        <div className={cn(
          "relative p-6 rounded-2xl",
          "bg-zinc-900/90 backdrop-blur-sm border border-zinc-800",
          "group-hover:border-transparent transition-all duration-500",
          isActive && "border-transparent"
        )}>
          <div className="flex flex-col items-center text-center">
            <div className={cn(
              "flex items-center justify-center w-16 h-16 rounded-full mb-4",
              "bg-gradient-to-br from-violet-500/10 to-blue-500/10",
              "group-hover:from-violet-500/20 group-hover:to-blue-500/20",
              "transition-all duration-500"
            )}>
              <Icon className={cn(
                "w-8 h-8 text-white/80",
                "group-hover:text-white group-hover:scale-110",
                "transition-all duration-500"
              )} />
            </div>

            <div className={cn(
              "inline-flex items-center justify-center",
              "w-8 h-8 rounded-full mb-4",
              "bg-gradient-to-r from-violet-600 to-blue-600",
              "text-white font-bold"
            )}>
              {step}
            </div>

            <h3 className={cn(
              "text-xl font-semibold mb-2",
              "text-white/90 group-hover:text-white",
              "transition-colors duration-500"
            )}>
              {title}
            </h3>

            <p className={cn(
              "text-zinc-400 group-hover:text-zinc-300",
              "transition-colors duration-500"
            )}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}