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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export default function ProductAddresses() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b to-violet-900/20 from-black/50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What this product addresses
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-blue-500/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80"
              alt="AI Analytics Dashboard"
              fill
              className="object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 group"
              >
                <h3 className="font-semibold text-xl text-blue-300 group-hover:text-blue-200 transition-colors">
                  {point.title}
                </h3>
                <p className="text-slate-400 mt-2 group-hover:text-slate-300 transition-colors">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}