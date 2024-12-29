"use client";
import { motion } from "framer-motion";
import { Book, Video } from "lucide-react";

const resources = [
  {
    icon: <Book className="h-6 w-6" />,
    title: "Documentation",
    description: "Comprehensive guides and API references",
    link: "#"
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Video Tutorials",
    description: "Step-by-step implementation videos",
    link: "#"
  }
];

export default function Resources() {
  return (
    <section id="resources" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Resources</h2>
          <p className="mt-4 text-gray-400">Everything you need to get started</p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.a
              key={index}
              href={resource.link}
              className="block bg-gray-900/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="h-12 w-12 bg-purple-600/20 rounded-lg flex items-center justify-center text-purple-400">
                {resource.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{resource.title}</h3>
              <p className="mt-2 text-gray-400">{resource.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}