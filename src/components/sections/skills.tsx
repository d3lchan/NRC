"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Gauge } from "@/components/shared/gauge";
import { fadeInUp, scaleIn } from "@/lib/animations";
import { SKILLS, HERO_SKILL_COUNT } from "@/lib/constants";

function ProgressBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-[#C0C0C0]">{name}</span>
        <span
          className="text-xs text-muted-foreground"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: level > 75
              ? "linear-gradient(90deg, #C0C0C0, #E10600)"
              : "linear-gradient(90deg, #404040, #C0C0C0)",
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const heroSkills = SKILLS.slice(0, HERO_SKILL_COUNT);
  const secondarySkills = SKILLS.slice(HERO_SKILL_COUNT);

  // Group secondary skills by category
  const categories = [...new Set(secondarySkills.map((s) => s.category))];

  return (
    <SectionWrapper id="skills">
      <motion.div variants={fadeInUp} className="mb-16">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          SKILLS
        </h2>
        <div className="h-[2px] w-16" style={{ backgroundColor: "#E10600" }} />
      </motion.div>

      {/* Hero gauges */}
      <motion.div
        variants={scaleIn}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 justify-items-center"
      >
        {heroSkills.map((skill) => (
          <Gauge key={skill.name} value={skill.level} label={skill.name} />
        ))}
      </motion.div>

      {/* Secondary skills by category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <motion.div key={category} variants={fadeInUp} className="space-y-4">
            <h3
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {category}
            </h3>
            <div className="space-y-4">
              {secondarySkills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
