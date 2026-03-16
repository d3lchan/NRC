"use client";

import { motion } from "motion/react";

interface RacingLineProps {
  className?: string;
  direction?: "horizontal" | "vertical";
}

export function RacingLine({ className, direction = "horizontal" }: RacingLineProps) {
  if (direction === "vertical") {
    return (
      <svg
        className={className}
        width="2"
        height="100%"
        viewBox="0 0 2 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          x1="1"
          y1="0"
          x2="1"
          y2="100"
          stroke="#E10600"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      width="100%"
      height="2"
      viewBox="0 0 100 2"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        x1="0"
        y1="1"
        x2="100"
        y2="1"
        stroke="#E10600"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </svg>
  );
}
