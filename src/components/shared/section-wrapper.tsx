"use client";

import { motion } from "motion/react";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("relative py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto", className)}
    >
      {children}
    </motion.section>
  );
}
