"use client";

import { LucideIcon, Video } from "lucide-react";
import Link from "next/link";
import HeroVideoDialog from "../ui/hero-video-dialog";

interface ResourceCardProps {
  href: string;
  image?: string;
  icon?: LucideIcon;
  category?: string;
  title: string;
  subtitle: string;
}

export default function Resources() {
  return (
    <div className="text-white pt-4 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-900/20 to-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-gray-400 text-lg">
            Everything you need to get started
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link href="/docs" className="group w-full max-w-[480px] mx-auto">
            <div className="h-[280px] bg-[#0A0A0A] rounded-xl overflow-hidden hover:bg-[#111111] transition-all duration-300 border border-gray-800">
              <div className="relative h-[140px]">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
                  alt="Read our latest articles and blogs on various topics."
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-col">
                  <span className="text-purple-400 text-sm mb-2">Blogs</span>
                  <h2 className="text-lg font-bold mb-2 line-clamp-2">
                    Read our latest articles and blogs on various topics.
                  </h2>
                </div>
              </div>
            </div>
          </Link>

          <div className="group w-full max-w-[480px] mx-auto">
            <div className="h-[280px] bg-[#0A0A0A] rounded-3xl flex flex-col hover:bg-[#111111] transition-all duration-300 border border-gray-800">
              <HeroVideoDialog
                className="w-full h-full" 
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
thumbnailSrc="/video.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
