"use client";

import { motion } from "framer-motion";
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full group relative"
    >
      {/* Gradient border container (Visible only on hover) */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600/50 to-blue-600/50 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Background glow (Visible only on hover) */}
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/50 to-blue-600/50 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
      {/* Card */}
      <Card
        className={cn(
          "relative h-full bg-zinc-900/90 backdrop-blur-sm border-zinc-800 rounded-xl",
          "transform transition-transform duration-500 ease-out",
          "group-hover:scale-[1.02] group-hover:border-transparent",
          "p-6"
        )}
      >
        <div className="flex flex-col h-full">
          <div
            className={cn(
              "p-3 rounded-lg w-fit",
              "bg-white",
              "group-hover:from-violet-500/20 group-hover:to-blue-500/20",
              "transition-all duration-500"
            )}
          >
            <Icon
              className={cn(
                "w-6 h-6 text-black",
                "group-hover:text-black group-hover:scale-110",
                "transition-all duration-500"
              )}
            />
          </div>

          <h3
            className={cn(
              "text-xl font-semibold mt-4 mb-3",
              "text-white/90 group-hover:text-white",
              "transition-colors duration-500"
            )}
          >
            {title}
          </h3>

          <p
            className={cn(
              "text-zinc-400 group-hover:text-zinc-300",
              "transition-colors duration-500",
              "flex-grow"
            )}
          >
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
