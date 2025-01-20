"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Works() {
  const animationProps = {
    initial: { opacity: 0, y: 75 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.25 },
  };

  return (
    <section  id="divein" className="text-white bg-gradient-to-b from-black via-[#381a5f] via-70% via-[#190c2b] to-black pb-8 pt-8">
      <div className="text-center"  
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-violet-500 pb-2 overflow-visible"
        >
          How we bring it to Life
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-zinc-300 max-w-2xl mx-auto mt-4"
        >
          Transform your business with our three-step process
        </motion.p>
      </div>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-28 space-y-16  ">
        <motion.div
          {...animationProps}
          className="mt-8 flex flex-col md:flex-row"
        >
          <div className="space-y-2 max-w-[550px]">
            <h2 className="text-6xl my-4 text-white">01</h2>
            <h2 className="text-4xl text-white/70">Highlight</h2>
            <p className="text-lg text-zinc-400 break-words pt-4 pr-4 pb-4">
              Design a website that works as hard as you do! SEO-optimized,
              visually striking, and packed with seamless user experiences to
              boost engagement.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              loading="lazy"
              alt="Ecommerce Digital Products"
              width={800}
              height={405}
              className="h-[350px] w-[500px] object-cover"
              src="/pixelcut-export-removebg-preview.png"
            />
          </div>
        </motion.div>

        <motion.div
          {...animationProps}
          className="mt-8 flex flex-col md:flex-row-reverse gap-12"
        >
          <div className="space-y-2 max-w-[550px]">
            <h2 className="text-6xl my-4 text-white">02</h2>
            <h2 className="text-4xl text-white/70">Advertise</h2>
            <p className="text-lg text-zinc-400 break-words pt-4 pr-4 pb-4">
              Streamline your content with AI! Effortlessly generate blogs,
              social media posts, and ads that grab attention and drive
              engagement!
            </p>
          </div>
          <div className="flex justify-center items-center -mt-8">
            {" "}
            <Image
              loading="lazy"
              alt="Interactive E-Learning Platform"
              width={800}
              height={457}
              className="h-[350px] w-[500px] object-cover align-top"
              src="/premium_photo-1683540450469.png"
            />
          </div>
        </motion.div>

        <motion.div
          {...animationProps}
          className="mt-8 flex flex-col md:flex-row"
        >
          <div className="space-y-2 max-w-[550px]">
            <h3 className="text-6xl my-4 text-white">03</h3>
            <h2 className="text-4xl text-white/70">Analyse</h2>
            <p className="text-lg text-zinc-400 break-words pt-4 pr-4 pb-4">
              Gain real-time insights with multilingual analytics! Monitor your
              business performance, decode trends, and refine strategies for
              continuous growth.
            </p>
          </div>
          <div className="flex justify-center items-center -mt-4">
            <Image
              loading="lazy"
              alt="Portfolio Website"
              width={1688}
              height={919}
              className="h-[350px] w-[500px] object-cover"
              src="/premium_photo (1).png"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
