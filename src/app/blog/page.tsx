"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import gsap from "gsap";

const blogs = [
  {
    id: 1,
    title: "Using AI-Generated Content from Our SAAS for Better Marketing",
    category: "Content Creation",
    date: "October 1, 2023",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    id: 2,
    title: "How Our AI Software Revolutionizes Your Content Marketing",
    category: "AI Tools",
    date: "October 1, 2023",
    image:
      "https://cdn.prod.website-files.com/6700ee976677a427228396a4/6700ee976677a42722839774_Blog-Image-4-p-500.jpg",
  },
  {
    id: 3,
    title: "Crafting Compelling Content with Our SAAS AI Software",
    category: "Marketing",
    date: "October 1, 2023",
    image:
      "https://cdn.prod.website-files.com/6700ee976677a427228396a4/6700ee976677a42722839739_Blog-Image-3-p-500.jpg",
  },
  {
    id: 4,
    title: "The Future of Content Creation with AI",
    category: "AI Tools",
    date: "October 1, 2023",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a",
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false); //

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSortBy(option); // Update selected option
    setIsDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="relative min-h-screen bg-[#070616] text-white px-4 py-8 md:px-8 lg:px-16 -mt-[7rem]">
      <div className="relative z-5 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mt-32 md:mt-40 blog-header text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Read Professionally
            <br />
            Written Articles
            <br />
            About AI
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-Powered Tool Takes Your Ideas And Turns Them Into
            Captivating, Reader-Friendly Content That Resonates With Your
            Audience.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-4 mb-12 mt-12 w-full max-w-md mx-auto">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 py-2 bg-gray-800/50 border-gray-700 rounded-md text-white placeholder-gray-400"
              // value={searchTerm}
              // onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="relative w-full md:w-44">
            {/* Dropdown Button */}
            <button
              className="flex items-center justify-between w-full h-10 px-4 bg-gray-800 border border-gray-700 rounded-md text-white"
              onClick={toggleDropdown}
            >
              {/* Display selected option */}
              {sortBy === "recent"
                ? "Most Recent"
                : sortBy === "oldest"
                ? "Oldest First"
                : sortBy === "a-z"
                ? "A-Z"
                : "Z-A"}
              <SlidersHorizontal className="text-gray-400" size={20} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <ul className="absolute z-10 mt-2 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white"
                  onClick={() => handleOptionClick("recent")}
                >
                  Most Recent
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white"
                  onClick={() => handleOptionClick("oldest")}
                >
                  Oldest First
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white"
                  onClick={() => handleOptionClick("a-z")}
                >
                  A-Z
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white"
                  onClick={() => handleOptionClick("z-a")}
                >
                  Z-A
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{blog.category}</p>
                <p className="text-gray-500 text-xs">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
