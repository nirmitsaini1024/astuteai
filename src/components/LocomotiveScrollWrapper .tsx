"use client";

import { ReactNode, useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Import the CSS for styling

interface LocomotiveScrollWrapperProps {
  children: ReactNode;
}

const LocomotiveScrollWrapper = ({
  children,
}: LocomotiveScrollWrapperProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current, // Manually asserting the type
        smooth: true,
      } as any); // Type assertion here

      return () => {
        locomotiveScroll.destroy(); // Cleanup on unmount
      };
    }
  }, []);
};

export default LocomotiveScrollWrapper;
