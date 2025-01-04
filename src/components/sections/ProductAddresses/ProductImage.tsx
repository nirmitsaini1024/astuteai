"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden"
    >
      <Image
        src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80"
        alt="AI Analytics Dashboard"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}
