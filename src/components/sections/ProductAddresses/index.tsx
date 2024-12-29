"use client";
import { motion } from "framer-motion";
import { productPoints } from "@/data/product-points";
import PointCard from "./PointCard";
import ProductImage from "./ProductImage";

export default function ProductAddresses() {
  return (
    <section className="py-20 bg-black">
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
          <ProductImage />
          <div className="space-y-6">
            {productPoints.map((point, index) => (
              <PointCard key={index} point={point} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
