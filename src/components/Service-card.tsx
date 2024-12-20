"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

export function ServiceCard({ title, description, icon: Icon, delay }: ServiceCardProps) {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(150px 150px at ${offsetX}px ${offsetY}px, rgba(128, 90, 213, 0.8), transparent)`; // Bright purple glow
  const border = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current.getBoundingClientRect();
      offsetX.set(e.clientX - borderRect.left);
      offsetY.set(e.clientY - borderRect.top);
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full relative"
    >
      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
          background: "rgba(128, 90, 213, 0.4)", // Glow overlay
          boxShadow: "0 0 20px 10px rgba(128, 90, 213, 0.6)", // Glow effect
        }}
        ref={border}
      ></motion.div>

      {/* Card */}
      <Card
        className={cn(
          "relative h-full bg-zinc-900/90 backdrop-blur-sm border-zinc-800 rounded-xl",
          "p-6"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-3 rounded-lg w-fit bg-white">
            <Icon className="w-6 h-6 text-black" />
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-3 text-white/90">{title}</h3>

          <p className="text-zinc-400 flex-grow">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
