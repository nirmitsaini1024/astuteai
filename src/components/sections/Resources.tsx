"use client";

import { Video } from "lucide-react";
import { ResourceCard } from "./ResourceCard";

export default function Resources() {
  return (
    <div className=" text-white pt-4 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-900/20 to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 ">Resources</h1>
          <p className="text-gray-400 text-lg">
            Everything you need to get started
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ResourceCard
            href="/docs"
            image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
            category="Blogs"
            title="Read our latest articles and blogs on various topics."
            subtitle=""
          />
          <ResourceCard
            href="/tutorials"
            icon={Video}
            title="Video Tutorials"
            subtitle="Step-by-step implementation videos"
          />
        </div>
      </div>
    </div>
  );
}
