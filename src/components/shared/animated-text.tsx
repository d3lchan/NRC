"use client";

import { motion } from "motion/react";
import { letterReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className, delay = 0 }: AnimatedTextProps) {
  const letters = text.split("");

  return (
    <span className={cn("inline-flex flex-wrap", className)} aria-label={text}>
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          custom={i + delay * 30}
          variants={letterReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={letter === " " ? "w-[0.3em]" : ""}
          aria-hidden
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}
