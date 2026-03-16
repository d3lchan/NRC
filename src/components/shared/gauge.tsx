"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface GaugeProps {
  value: number;
  label: string;
  size?: number;
  className?: string;
}

export function Gauge({ value, label, size = 160, className }: GaugeProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  const strokeDashoffset = useTransform(springValue, [0, 100], [283, 283 - (283 * 270) / 360]);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      setDisplayValue(Math.round(v));
    });
    return unsubscribe;
  }, [springValue]);

  const center = size / 2;
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const startAngle = 135;
  const sweepAngle = 270;
  const filledAngle = (value / 100) * sweepAngle;

  // Calculate arc path
  const polarToCartesian = (angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  };

  const start = polarToCartesian(startAngle);
  const end = polarToCartesian(startAngle + sweepAngle);
  const filledEnd = polarToCartesian(startAngle + filledAngle);

  const bgArc = `M ${start.x} ${start.y} A ${radius} ${radius} 0 1 1 ${end.x} ${end.y}`;
  const filledArc = `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${filledAngle > 180 ? 1 : 0} 1 ${filledEnd.x} ${filledEnd.y}`;

  // Color interpolation from silver to red based on value
  const getColor = (val: number) => {
    if (val < 50) return "#C0C0C0";
    if (val < 75) return "#E08060";
    return "#E10600";
  };

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-lg"
      >
        {/* Background arc */}
        <path
          d={bgArc}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Filled arc */}
        {isInView && (
          <motion.path
            d={bgArc}
            fill="none"
            stroke={getColor(value)}
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: value / 100 }}
            transition={{
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
            style={{
              filter: `drop-shadow(0 0 6px ${getColor(value)}40)`,
            }}
          />
        )}
        {/* Center text */}
        <text
          x={center}
          y={center - 5}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-display text-3xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {displayValue}
        </text>
        <text
          x={center}
          y={center + 18}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-muted-foreground text-[10px] uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          %
        </text>
      </svg>
      <span
        className="text-sm font-medium tracking-wider uppercase text-titanium"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </span>
    </div>
  );
}
