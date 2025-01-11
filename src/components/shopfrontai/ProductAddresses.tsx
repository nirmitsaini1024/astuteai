"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  ShoppingCart,
  Users2,
  Wallet,
} from "lucide-react";

const points = [
  {
    icon: ShoppingCart,
    title: "Inventory Management",
    description:
      "Eliminate stockouts and overstock situations with AI predictions.",
  },
  {
    icon: Users2,
    title: "Customer Experience",
    description: "Personalize shopping journeys with smart recommendations.",
  },
  {
    icon: Wallet,
    title: "Price Optimization",
    description: "Maximize profits with dynamic pricing strategies.",
  },
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "Stay ahead with real-time market trend insights.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ResponsiveProductAddresses() {
  return (
    <section className="pt-4 bg-black/95 relative overflow-hidden">
      <div className="absolute inset-0  bg-gradient-to-b to-violet-900/20 from-black/50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            What this product addresses
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Powerful features to transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:min-h-[450px] xl:min-h-[550px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[5/4] xl:aspect-[3/2] 2xl:aspect-[4/3] rounded-2xl overflow-hidden group lg:sticky lg:top-4"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />
            <Image
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80"
              alt="AI Analytics Dashboard"
              fill
              className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {points.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-violet-500/20 to-blue-500/20 opacity-50 blur-sm transition duration-500 group-hover:opacity-100" />
                <div className="relative flex gap-4 rounded-xl bg-gradient-to-r from-violet-500/[0.07] to-blue-500/[0.07] p-5 ring-1 ring-white/10 transition duration-300 hover:ring-white/20">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 ring-1 ring-violet-500/30">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2 group-hover:text-violet-300 transition-colors">
                      {point.title}
                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
