"use client";
import Image from "next/image";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";

export const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("divein");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative bg-black text-white 
      bg-[linear-gradient(to_bottom,#0000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]
      min-h-screen flex flex-col justify-center overflow-hidden -mt-[7rem]"
    >
      <div
        className="px-4 py-3 absolute bg-black h-[500px] w-[1000px] sm:w-[1600px] sm:h-[850px] lg:w-[2500px] lg:h-[1300px] rounded-[100%] left-1/2 -translate-x-1/2
      border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-140px)]"
      ></div>
      <div className="container relative">
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              Lead with  <br />your Brand
              {" "}
            </h1>
            <motion.div
              className="absolute right-[620px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={cursorImage}
                height="200"
                width="200"
                className="max-w-none"
                alt="cursor"
                draggable="false"
              />
            </motion.div>
            <motion.div
              className="absolute left-[650px] top-[100px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={messageImage}
                height="200"
                width="200"
                className="max-w-none"
                alt="message"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center mt-8 text-xl max-w-md">
            Ready to level up your business? Our AI tools make building
            stunning websites, automating marketing, and optimizing content a
            breeze. Say goodbye to the hassle, we’ll handle the hard stuff while
            you shine!
          </p>
        </div>
        <div className="flex mt-8 justify-center">
          <Magnetic intensity={0.3}>
            <button
              className="bg-white text-black rounded-lg font-medium px-5 py-3"
              onClick={handleScroll}
            >
              Dive In
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
};
