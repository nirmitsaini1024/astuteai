"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import { faqs } from "./data";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-black pb-4 md:pb-16">
      <div className="bg-black text-white p-6 rounded-xl max-w-2xl mx-auto ">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isExpanded={expandedIndex === index}
              onToggle={() => toggleAccordion(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
