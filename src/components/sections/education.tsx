"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/animations";
import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";

export function Education() {
  return (
    <SectionWrapper id="education">
      <motion.div variants={fadeInUp} className="mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          EDUCATION
        </h2>
        <div className="h-[2px] w-16" style={{ backgroundColor: "#E10600" }} />
      </motion.div>

      {/* Timeline */}
      <div className="relative space-y-8">
        {/* Connector line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#C0C0C0]/20" />

        {EDUCATION.map((edu) => (
          <motion.div key={edu.id} variants={fadeInUp} className="relative flex gap-6">
            {/* Timeline dot */}
            <div className="relative z-10 mt-2 shrink-0">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  edu.isOngoing
                    ? "bg-[#E10600] border-[#E10600]"
                    : "bg-[#0a0a0a] border-[#C0C0C0]/40"
                }`}
              >
                {edu.isOngoing && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-[#E10600]/40" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pb-2">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <p
                  className="text-xs text-muted-foreground tracking-widest"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {edu.period}
                </p>
                {edu.isOngoing && (
                  <Badge className="bg-[#E10600]/20 text-[#E10600] border-[#E10600]/30 text-[10px] animate-pulse">
                    ONGOING
                  </Badge>
                )}
              </div>
              <h3
                className="text-lg font-bold mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {edu.institution}
              </h3>
              <p className="text-sm mb-2" style={{ color: "#C0C0C0" }}>
                {edu.degree}
              </p>
              <p className="text-sm text-[#C0C0C0]/60 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div variants={fadeInUp} className="mt-12">
        <h3
          className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Certifications & Coursework
        </h3>
        <div className="flex flex-wrap gap-3">
          {CERTIFICATIONS.map((cert) => (
            <Badge
              key={cert}
              variant="outline"
              className="text-sm px-4 py-2 border-[#C0C0C0]/20 text-[#C0C0C0] hover:border-[#E10600]/50 hover:text-white transition-colors"
            >
              {cert}
            </Badge>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
