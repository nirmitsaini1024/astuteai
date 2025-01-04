"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ResourceCardProps {
  href: string;
  image?: string;
  icon?: LucideIcon;
  category?: string;
  title: string;
  subtitle: string;
}

export function ResourceCard({
  href,
  image,
  icon: Icon,
  category,
  title,
  subtitle,
}: ResourceCardProps) {
  if (image) {
    return (
      <Link href={href} className="group w-full max-w-[480px] mx-auto">
        <div className="h-[280px] bg-[#0A0A0A] rounded-xl overflow-hidden hover:bg-[#111111] transition-all duration-300 border border-gray-800">
          <div className="relative h-[140px]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-col">
              {category && <span className="text-purple-400 text-sm mb-2">{category}</span>}
              <h2 className="text-lg font-bold mb-2 line-clamp-2">{title}</h2>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="group w-full max-w-[480px] mx-auto">
      <div className="h-[280px] bg-[#0A0A0A] rounded-3xl p-8 flex flex-col hover:bg-[#111111] transition-all duration-300 border border-gray-800">
        {Icon && (
          <div className="bg-purple-900/30 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
        )}
        <div className="flex flex-col">
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>
        <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-purple-400 text-sm">Watch now →</span>
        </div>
      </div>
    </Link>
  );
}