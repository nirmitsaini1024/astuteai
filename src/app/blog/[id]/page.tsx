"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./markdown.css";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/blog/view/${id}`);
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <Skeleton className="w-full h-48 rounded-lg mb-4" /> {/* Thumbnail */}
        <Skeleton className="h-8 w-3/4 mx-auto mb-2" /> {/* Title */}
        <Skeleton className="h-4 w-1/2 mx-auto mb-4" /> {/* Author */}
        <Skeleton className="h-4 w-1/3 mx-auto mb-4" /> {/* Date */}
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-5/6 mb-2" />
        <Skeleton className="h-6 w-4/5 mb-2" />
      </div>
    );
  }

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      {blog.thumbnail && (
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full rounded-lg shadow-md mb-4"
        />
      )}

      {/* Blog Title */}
      <h1 className="text-3xl font-bold mb-2 text-center">{blog.title}</h1>

      {/* Author & Date */}
      <div className="text-gray-500 text-sm mb-4">
        <p >
          Author: <span className="font-semibold"> {blog.author}</span>
        </p>
        <p className="font-semibold">Updated on: {new Date(blog.date_created).toLocaleDateString()}</p>
      </div>

      {/* Markdown Content */}
      <div className="markdown-content prose prose-lg max-w-none text-left">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {blog.content_md}
        </ReactMarkdown>
      </div>
    </div>
  );
}
