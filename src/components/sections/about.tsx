"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { GlassCard } from "@/components/shared/glass-card";
import { fadeInUp } from "@/lib/animations";
import { ABOUT_BIO, STATS } from "@/lib/constants";

function CountUp({ target, className }: { target: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);
  const numericPart = parseInt(target);
  const suffix = target.replace(String(numericPart), "");

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const duration = 1500;
    const step = duration / numericPart;
    const timer = setInterval(() => {
      current += 1;
      setValue(current);
      if (current >= numericPart) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <span ref={ref} className={className}>
      {value}{suffix}
    </span>
  );
}

export function About() {
  return (
    <SectionWrapper id="about">
      <motion.div variants={fadeInUp} className="mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ABOUT
        </h2>
        <div className="h-[2px] w-16" style={{ backgroundColor: "#E10600" }} />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Bio */}
        <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-5">
          {ABOUT_BIO.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-[#C0C0C0]/80">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Stats card */}
        <motion.div variants={fadeInUp} className="lg:col-span-2">
          <GlassCard className="border-l-2 border-l-[#E10600]">
            <div className="space-y-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-4">
                  <CountUp
                    target={stat.value}
                    className="text-4xl font-bold text-white"
                  />
                  <span
                    className="text-xs uppercase tracking-widest text-muted-foreground"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
