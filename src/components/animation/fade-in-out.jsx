"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils"; // Ensure this utility is defined or replace with a suitable alternative

const FadeInOut = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  once = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "0px 0px -16% 0px",
  });

  return (
    <div ref={ref} className={cn("w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: yOffset }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: yOffset }}
        transition={{
          duration,
          delay,
          ease: "easeOut",
        }}
        className="w-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInOut;
