"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  onToggle: () => void;
  index: number;
}

export const AccordionItem = ({
  question,
  answer,
  isExpanded,
  onToggle,
  index,
}: AccordionItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-800 rounded-lg overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-4 flex justify-between items-center text-left transition-colors duration-200"
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isExpanded ? (
            <Minus className="w-5 h-5 text-gray-400" />
          ) : (
            <Plus className="w-5 h-5 text-gray-400" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-4 pt-0 text-gray-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};