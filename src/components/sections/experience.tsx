"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { EXPERIENCES } from "@/lib/constants";

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <motion.div variants={fadeInUp} className="mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          EXPERIENCE
        </h2>
        <div className="h-[2px] w-16" style={{ backgroundColor: "#E10600" }} />
      </motion.div>

      <div className="relative">
        {/* Track line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px]">
          <div className="h-full w-full bg-white/10" style={{ backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 16px)" }} />
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{ backgroundColor: "#E10600" }}
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {/* Experience cards */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                variants={i % 2 === 0 ? slideInLeft : slideInRight}
                className={`relative flex items-start gap-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Pit stop marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      exp.isCurrent
                        ? "bg-[#E10600] border-[#E10600]"
                        : "bg-[#0a0a0a] border-white/30"
                    }`}
                  >
                    {exp.isCurrent && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-[#E10600]/40" />
                    )}
                  </div>
                </div>

                {/* Spacer for left side on mobile */}
                <div className="w-12 shrink-0 md:hidden" />

                {/* Card */}
                <div
                  className={`flex-1 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <GlassCard>
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-sm mb-1" style={{ color: "#E10600" }}>
                      {exp.company}
                    </p>
                    <p
                      className="text-xs text-muted-foreground mb-3"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {exp.period} &middot; {exp.location}
                    </p>
                    <p className="text-sm text-[#C0C0C0]/70 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-white/5 text-[#C0C0C0] border-white/10 hover:bg-white/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Empty space for opposite side on desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
