"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "Increased Revenue",
    description: "Average 35% boost in sales through AI-optimized pricing and recommendations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80"
  },
  {
    title: "Time Savings",
    description: "Reduce manual tasks by 75% with automated inventory and order management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
  },
  {
    title: "Better Decisions",
    description: "Make data-driven choices with real-time analytics and predictions",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80"
  },
  {
    title: "Time Savings",
    description: "Reduce manual tasks by 75% with automated inventory and order management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80"
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose ShopFrontAI</h2>
          <p className="mt-4 text-gray-400">Real results for your business</p>
        </motion.div>

        <div className="mt-16 space-y-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <h3 className="text-2xl font-bold">{benefit.title}</h3>
                <p className="mt-4 text-gray-400">{benefit.description}</p>
              </div>
              <div className="flex-1">
                <div className="relative h-64 w-full rounded-xl overflow-hidden">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}