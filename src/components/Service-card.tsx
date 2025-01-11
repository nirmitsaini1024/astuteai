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

export function ServiceCard({
  title,
  description,
  icon: Icon,
  delay,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full relative "
    >
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

          <h3 className="text-xl font-semibold mt-4 mb-3 text-white/90">
            {title}
          </h3>

          <p className="text-zinc-400 flex-grow">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
