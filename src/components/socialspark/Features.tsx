"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Users, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Smart Inventory",
    description: "AI-powered inventory management that predicts stock needs"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Customer Insights",
    description: "Deep analytics on customer behavior and preferences"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Sales Optimization",
    description: "Automated pricing and promotion strategies"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast Integration",
    description: "Quick setup with your existing e-commerce platform"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
          <p className="mt-4 text-gray-400">Everything you need to scale your online business</p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="h-12 w-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}