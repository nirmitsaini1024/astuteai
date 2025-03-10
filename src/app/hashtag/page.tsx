"use client";
import { useState, useEffect } from "react";
import { Sparkles, Hash, Clipboard, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

export default function GenerateHashtags() {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [specification, setSpecification] = useState("");
  const [platform, setPlatform] = useState("");
  const [numTags, setNumTags] = useState("");
  const [format, setFormat] = useState("oneLine");
  const [results, setResults] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    console.log("Updated Results:", results);
  }, [results]);

  const generateTags = async () => {
    if (!postTitle || !postContent) {
      toast({
        title: "Missing information",
        description: "Please provide at least a post title and content.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/generateHashtags", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: postTitle,
          content: postContent,
          specification: specification,
          platforms: platform.split(",").map((p) => p.trim().toLowerCase()),
          number: Number(numTags) || 10,
          format: format,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate hashtags");

      const data = await response.json();
      console.log("API Response:", data);

      const platformKey = platform.trim().toLowerCase();
      console.log("Using Platform Key:", platformKey);

      const hashtags = data.hashtags[platformKey] || [];

      if (format === "numbered") {
        setResults(
          hashtags.length > 0
            ? hashtags
                .map((tag: string, i: number) => `${i + 1}. ${tag}`)
                .join("\n")
            : "No hashtags generated. Try different content."
        );
      } else {
        setResults(
          hashtags.length > 0
            ? hashtags.join(" ")
            : "No hashtags generated. Try different content."
        );
      }

      toast({
        title: "Hashtags generated!",
        description: "Your optimized hashtags are ready to use.",
      });
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
      setResults("Error generating hashtags. Please try again.");
    }

    setLoading(false);
  };

  const copyToClipboard = () => {
    if (!results) return;
    navigator.clipboard.writeText(results);
    setCopied(true);
    toast({ title: "Copied!", description: "Hashtags copied to clipboard." });

    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="relative mb-8 text-center">
          <div className="absolute -top-8 left-0 w-full flex justify-between">
            <div className="text-purple-500 text-3xl">✧</div>
            <div className="text-purple-500 text-3xl">✧</div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-1">
            Smart Hashtag Generator
          </h1>
          <p className="text-gray-400">
            AI-Powered Hashtag Optimization for Maximum Reach
          </p>
        </div>

        <div className="bg-[#0a0a14] border border-purple-900/50 rounded-lg overflow-hidden shadow-lg shadow-purple-900/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="md:col-span-2 p-6">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="postTitle" className="text-white mb-2 block">
                    Post Title:
                  </Label>
                  <Input
                    id="postTitle"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="postContent"
                    className="text-white mb-2 block"
                  >
                    Post Content:
                  </Label>
                  <Textarea
                    id="postContent"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white min-h-[120px]"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="specification"
                    className="text-white mb-2 block"
                  >
                    Any Specification (Optional)
                  </Label>
                  <Input
                    id="specification"
                    value={specification}
                    onChange={(e) => setSpecification(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white"
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    onClick={generateTags}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full flex items-center gap-2"
                    disabled={loading}
                  >
                    <Sparkles className="h-4 w-4" /> Generate Tags
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#0e0e18] border-l border-purple-800/30">
              <div className="space-y-5">
                <div>
                  <Label htmlFor="platform" className="text-white mb-2 block">
                    Social Media Platform
                  </Label>
                  <Input
                    id="platform"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="numTags" className="text-white mb-2 block">
                    Number of Tags
                  </Label>
                  <Input
                    id="numTags"
                    type="number"
                    value={numTags}
                    onChange={(e) => setNumTags(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white"
                  />
                </div>
                <div className="mt-4">
                  <Label className="text-white mb-3 block">Format as</Label>
                  <RadioGroup
                    value={format}
                    onValueChange={setFormat}
                    className="flex flex-col space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="oneLine"
                        id="oneLine"
                        className="text-purple-600"
                      />
                      <Label htmlFor="oneLine" className="text-white">
                        One Line
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="numbered"
                        id="numbered"
                        className="text-purple-600"
                      />
                      <Label htmlFor="numbered" className="text-white">
                        Numbered List
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-purple-800/30">
            <div className="flex justify-between items-center mb-2">
              <Label className="text-white">Results</Label>
              {results && (
                <Button
                  onClick={copyToClipboard}
                  className="bg-transparent hover:bg-gray-800 text-white p-2 rounded-md"
                >
                  {copied ? (
                    <ClipboardCheck className="h-5 w-5 text-green-400" />
                  ) : (
                    <Clipboard className="h-5 w-5" />
                  )}
                </Button>
              )}
            </div>
            <div className="relative bg-[#0a0a14] border border-purple-800/50 rounded-md p-4 min-h-[100px] text-white whitespace-pre-wrap">
              {loading
                ? "Generating..."
                : results || "No hashtags generated yet."}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
