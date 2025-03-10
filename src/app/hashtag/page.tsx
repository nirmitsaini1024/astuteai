"use client";
import { useState, useEffect } from "react";
import { Sparkles, Clipboard, ClipboardCheck } from "lucide-react";
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
  const [numTags, setNumTags] = useState("10"); // Default to 10 tags
  const [format, setFormat] = useState("oneLine"); // oneLine | numbered
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
          number: Number(numTags),
          format: format,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate hashtags");

      const data = await response.json();
      console.log("API Response:", data);

      const platformKey = platform.trim().toLowerCase();
      console.log("Using Platform Key:", platformKey);

      const hashtags = data.hashtags[platformKey] || [];

      setResults(
        hashtags.length > 0
          ? format === "numbered"
            ? hashtags
                .map((tag: string, i: number) => `${i + 1}. ${tag}`)
                .join("\n")
            : hashtags.join(" ")
          : "No hashtags generated. Try different content."
      );

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

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="relative mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-1">
            Smart Hashtag Generator
          </h1>
          <p className="text-gray-400">
            AI-Powered Hashtag Optimization for Maximum Reach
          </p>
        </div>

        <div className="bg-[#0a0a14] border border-purple-900/50 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="md:col-span-2 p-6">
              <div className="space-y-5">
                <div>
                  <Label className="text-white">Post Title:</Label>
                  <Input
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Post Content:</Label>
                  <Textarea
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white min-h-[120px]"
                  />
                </div>
                <div>
                  <Label className="text-white">Additional Details:</Label>
                  <Textarea
                    value={specification}
                    onChange={(e) => setSpecification(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#0e0e18] border-l border-purple-800/30">
              <div className="space-y-5">
                <div>
                  <Label className="text-white">Social Media Platform</Label>
                  <Input
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Number of Tags</Label>
                  <RadioGroup
                    value={numTags}
                    onValueChange={setNumTags}
                    className="flex pt-4 space-x-4"
                  >
                    <RadioGroupItem value="5" />
                    <Label className="text-white">5</Label>
                    <RadioGroupItem value="10" />
                    <Label className="text-white">10</Label>
                    <RadioGroupItem value="15" />
                    <Label className="text-white">15</Label>
                  </RadioGroup>
                  <Input
                    type="number"
                    value={numTags}
                    onChange={(e) => setNumTags(e.target.value)}
                    className="bg-[#0e0e18] border-purple-800/50 text-white mt-2"
                  />
                </div>
                <div>
                  <Label className="text-white">Format</Label>
                  <RadioGroup
                    value={format}
                    onValueChange={setFormat}
                    className="flex space-x-4 pt-2"
                  >
                    <RadioGroupItem value="oneLine" />
                    <Label className="text-white">One Line</Label>
                    <RadioGroupItem value="numbered" />
                    <Label className="text-white">Numbered</Label>
                  </RadioGroup>
                </div>
                <Button onClick={generateTags} className="w-full">
                  {loading ? "Generating..." : "Generate Hashtags"}
                  <Sparkles className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        
        <div className="pt-4 pb-4 border-t border-purple-800/30">
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
    </main>
  );
}
