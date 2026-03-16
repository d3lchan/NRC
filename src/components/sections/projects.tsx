"use client";

import { motion } from "motion/react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";

const ACCENT_COLORS = ["#E10600", "#C0C0C0", "#E10600", "#C0C0C0", "#E10600", "#C0C0C0"];

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <motion.div variants={fadeInUp} className="mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          PROJECTS
        </h2>
        <div className="h-[2px] w-16" style={{ backgroundColor: "#E10600" }} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div key={project.id} variants={fadeInUp}>
            <GlassCard className="group relative overflow-hidden h-full">
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: ACCENT_COLORS[i % ACCENT_COLORS.length] }}
              />

              <h3
                className="text-lg font-bold mb-2 mt-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {project.title}
              </h3>
              <p className="text-sm text-[#C0C0C0]/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs bg-white/5 text-[#C0C0C0] border-white/10 hover:bg-white/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Telemetry stats */}
              <div className="border-t border-white/5 pt-4">
                <div className="flex justify-between">
                  {project.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className="text-lg font-bold text-white"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-[10px] uppercase tracking-widest text-muted-foreground"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#E10600]/0 group-hover:from-[#E10600]/5 transition-all duration-500" />
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
