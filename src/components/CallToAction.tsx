"use client";
import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/magnetic";

export const CallToAction = () => {
  const conatainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: conatainerRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  return (
    <div
      id="waitlist"
      className="bg-black text-white  py-8 sm:py-24 text-center relative"
      ref={conatainerRef}
    >
      <div className="container max-w-xl relative">
        <motion.div drag dragSnapToOrigin style={{ translateY }}>
          <Image
            src={helixImage}
            alt="helixImage"
            className="absolute top-6 left-[calc(100%+36px)] hidden sm:inline "
            draggable="false"
          />
        </motion.div>
        <motion.div drag dragSnapToOrigin style={{ translateY }}>
          <Image
            src={emojiStarImage}
            alt="emojiStarImage"
            className="absolute -top-[120px] right-[calc(100%+24px)] hidden sm:inline "
            draggable="false"
          />
        </motion.div>
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto  font-bold tracking-tighter ">
          Join the Waitlist{" "}
        </h2>
        <p className="text-xl text-center text-white/70 mt-5 ">
          Connect with us to elevate your brand's journey and growth together.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row ">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3CF] sm:flex-1"
          />
          <Magnetic>
            <button className="bg-white py-2 h-12 rounded-lg text-black px-5">
              Join Waitlist{" "}
            </button>
          </Magnetic>
        </form>
      </div>
      {/* <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      /> */}
    </div>
  );
};
