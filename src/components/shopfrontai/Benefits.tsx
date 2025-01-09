"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "../ui/separator";

const benefits = [
  {
    title: "Increased Revenue",
    description:
      "Average 35% boost in sales through AI-optimized pricing and recommendations",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  },
  {
    title: "Time Savings",
    description:
      "Reduce manual tasks by 75% with automated inventory and order management",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
  },
  {
    title: "Better Decisions",
    description:
      "Make data-driven choices with real-time analytics and predictions",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-violet-900/20 via-black/50 to-violet-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Why Choose ShopFrontAI
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Empowering your business with proven results and cutting-edge AI
            technology
          </p>
        </motion.div>

        <Separator className="bg-zinc-600 my-8 md:hidden" />

        <div className="space-y-24 md:space-y-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                  {benefit.description}
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
