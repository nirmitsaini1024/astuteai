"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    <section
      className=" py-16 md:py-24 bg-gradient-to-b from-violet-900/20 via-black/50 to-violet-900/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl ">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700">
            Why Choose ShopFrontAI
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Empowering your business with proven results
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-12`}
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {benefit.description}
                </p>
                {/* <motion.div
                  className="mt-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <button className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25">
                    Learn More
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </motion.div> */}
              </div>
              <div className="flex-1">
                <motion.div
                  className="relative h-72 md:h-96 w-full rounded-xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    className="object-cover transition-transform hover:scale-105 duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
