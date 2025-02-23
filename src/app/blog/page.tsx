"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  author: string;
  date_created: string;
  thumbnail: string;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<"recent" | "oldest" | "a-z" | "z-a">("recent");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch("/api/blog/view");
        const blogs: Blog[] = await response.json();

        let filtered = blogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (sortBy === "recent") {
          filtered = filtered.sort(
            (a, b) =>
              new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
          );
        } else if (sortBy === "oldest") {
          filtered = filtered.sort(
            (a, b) =>
              new Date(a.date_created).getTime() - new Date(b.date_created).getTime()
          );
        } else if (sortBy === "a-z") {
          filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === "z-a") {
          filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
        }

        setFilteredBlogs(filtered);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    };

    fetchBlogs();
  }, [searchTerm, sortBy]);

  return (
    <div className="relative bg-black text-white px-4 py-8 md:px-8 lg:px-16 -mt-[7rem]">
      <div className="relative z-5 max-w-7xl mx-auto">
        <LampContainer>
          <motion.div
            className="text-center blog-header text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              initial={{ opacity: 0.5, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-b from-white to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
              Read Professionally
              <br />
              Written Articles
              <br />
              About AI
            </motion.h1>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Our AI-Powered Tool Takes Your Ideas And Turns Them Into
              Captivating, Reader-Friendly Content That Resonates With Your
              Audience.
            </p>
          </motion.div>
        </LampContainer>

        <div className="flex flex-col md:flex-row gap-4 mb-12 w-full max-w-md mx-auto">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 py-2 bg-gray-800/50 border-gray-700 rounded-md text-white placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <div className="relative w-full md:w-44">
            <button
              className="flex items-center justify-between w-full h-10 px-4 bg-gray-800 border border-gray-700 rounded-md text-white"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              {sortBy === "recent"
                ? "Most Recent"
                : sortBy === "oldest"
                ? "Oldest First"
                : sortBy === "a-z"
                ? "A-Z"
                : "Z-A"}
              <SlidersHorizontal className="text-gray-400" size={20} />
            </button>
            {isDropdownOpen && (
              <ul className="absolute z-10 mt-2 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white" onClick={() => setSortBy("recent")}>
                  Most Recent
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white" onClick={() => setSortBy("oldest")}>
                  Oldest First
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white" onClick={() => setSortBy("a-z")}>
                  A-Z
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-white" onClick={() => setSortBy("z-a")}>
                  Z-A
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading
            ? // Show Skeletons while loading
              [...Array(6)].map((_, index) => (
                <Skeleton key={index} className="w-full h-64 bg-gray-700 rounded-lg" />
              ))
            : // Show actual blogs after loading
              filteredBlogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`}>
                  <motion.div
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer"
                    whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                  >
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">By {blog.author}</p>
                      <p className="text-gray-500 text-xs">
                        {new Date(blog.date_created).toLocaleString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}
