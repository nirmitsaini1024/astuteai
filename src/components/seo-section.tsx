"use client";
import { PiCursorClickBold } from "react-icons/pi";
import { VscDashboard } from "react-icons/vsc";
import { CgSmartphoneChip } from "react-icons/cg";

import ProductImage from "@/assets/images/product-image.png";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

const tabs = [
  {
    icon: <VscDashboard />,
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: <PiCursorClickBold />,
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: <CgSmartphoneChip />,
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);

  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected]);

  return (
    <div
      className={`border ${
        [
          "User-friendly dashboard",
          "One-click optimization",
          "Smart keyword generator",
        ].includes(props.title)
          ? "border-zinc-600"
          : "border-muted"
      } flex items-center p-2.5 gap-2.5 rounded-xl relative cursor-pointer hover:bg-muted/15`}
      ref={tabRef}
    >
      {props.selected && (
        <motion.div
          style={{ maskImage }}
          className={
            "absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
          }
        />
      )}

      <div
        className={
          "size-12 border border-muted/30 rounded-lg inline-flex items-center justify-center"
        }
      >
        {typeof props.icon === "string" ? (
          <img src={props.icon} alt={props.title} className="size-5" />
        ) : (
          <div className="size-5">{props.icon}</div>
        )}
      </div>
      <div className={"font-medium"}>{props.title}</div>
      {props.isNew && (
        <div
          className={
            "text-xs rounded-full text-white px-2 py-0.5 bg-[#8c44ff] font-semibold"
          }
        >
          New
        </div>
      )}
    </div>
  );
};

export function SeoSection() {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section className={"pt-24 pb-4 md:pt-24 md:pb-4 bg-black"}>
      <div className={"container"}>
        <h2
          className={
            "text-5xl md:text-6xl font-medium text-center text-white tracking-tighter"
          }
        >
          SEO that Gets You Noticed{" "}
        </h2>
        <p
          className={
            "text-white/70 text-lg md:text-xl max-w-2xl mx-auto text-center tracking-tight mt-5"
          }
        >
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>

        <div className={"mt-10 grid text-white lg:grid-cols-3 gap-3"}>
          {tabs.map((tab, index) => (
            <FeatureTab
              {...tab}
              key={tab.title}
              selected={selectedTab === index}
            />
          ))}
        </div>
        <motion.div
          className={
            "border border-zinc-800 border-muted rounded-xl p-2.5 mt-3 relative"
          }
        >
          <div
            className={
              "aspect-video bg-cover border border-muted border-zinc-600 rounded-lg"
            }
            style={{
              backgroundPosition: backgroundPosition.get(),
              backgroundSize: backgroundSize.get(),
              backgroundImage: `url(${ProductImage.src})`,
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
}
