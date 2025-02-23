"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./markdown.css";

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

  if (loading) return <p>Loading...</p>;
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
        <p>
          Author: <span className="font-semibold"> {blog.author}</span>
        </p>
        <p>Date: {new Date(blog.date_created).toLocaleDateString()}</p>
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
