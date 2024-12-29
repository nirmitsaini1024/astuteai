"use client";
import { motion } from "framer-motion";
import type { ProductPoint } from "@/data/product-points";

interface PointCardProps {
  point: ProductPoint;
  index: number;
}

export default function PointCard({ point, index }: PointCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-purple-600/10 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors"
    >
      <h3 className="font-semibold text-lg text-purple-400">{point.title}</h3>
      <p className="text-gray-400 mt-1">{point.description}</p>
    </motion.div>
  );
}