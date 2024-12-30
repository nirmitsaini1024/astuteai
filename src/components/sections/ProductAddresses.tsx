"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const points = [
  {
    title: "Inventory Management",
    description: "Eliminate stockouts and overstock situations with AI predictions"
  },
  {
    title: "Customer Experience",
    description: "Personalize shopping journeys with smart recommendations"
  },
  {
    title: "Price Optimization",
    description: "Maximize profits with dynamic pricing strategies"
  },
  {
    title: "Market Analysis",
    description: "Stay ahead with real-time market trend insights"
  }
];

export default function ProductAddresses() {
  return (
    <section className="pb-[32px] pt-[8px] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What this product addresses
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80"
              alt="AI Analytics Dashboard"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div className="space-y-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-purple-600/10 p-4 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              >
                <h3 className="font-semibold text-lg text-purple-400">{point.title}</h3>
                <p className="text-gray-400 mt-1">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}