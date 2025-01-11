"use client";
import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState } from "react";
import { Magnetic } from "@/components/ui/magnetic";
import { useToast } from "@/hooks/use-toast";

export const CallToAction = () => {
  const { toast } = useToast();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    toast({
      title: "Submitting",
      description: "Your request is being processed...",
    });

    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();

    if (response.ok) {
      toast({
        title: "Submitted Successfully",
        description: "You have joined the waitlist!",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: data.error || "Something went wrong. Please try again.",
      });
    }

    setLoading(false);
    setName("");
    setEmail("");
  };

  return (
    <div
      id="waitlist"
      className="bg-black text-white py-8 sm:py-24 text-center relative"
      ref={containerRef}
    >
      <div className="container max-w-xl relative mx-auto">
        <motion.div drag dragSnapToOrigin style={{ translateY }}>
          <Image
            src={helixImage}
            alt="helixImage"
            className="absolute top-6 left-[calc(100%+36px)] hidden sm:inline"
            draggable="false"
          />
        </motion.div>
        <motion.div drag dragSnapToOrigin style={{ translateY }}>
          <Image
            src={emojiStarImage}
            alt="emojiStarImage"
            className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline"
            draggable="false"
          />
        </motion.div>
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
          Join the Waitlist
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Connect with us to elevate your brand's journey and growth together.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row sm:items-center sm:justify-center"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3CF] sm:w-40"
              required
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3CF] sm:flex-1"
              required
            />
          </div>
          <Magnetic>
            <button
              type="submit"
              className="bg-white py-2 h-12 rounded-lg text-black px-5 mt-3 sm:mt-0 sm:ml-4 whitespace-nowrap"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Join Waitlist"}
            </button>
          </Magnetic>
        </form>
      </div>
    </div>
  );
};
