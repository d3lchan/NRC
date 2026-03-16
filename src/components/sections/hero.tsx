"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { AnimatedText } from "@/components/shared/animated-text";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <Image
          src="/herosection.webp"
          alt="Navasheen working on a Royal Enfield motorcycle in a garage"
          fill
          priority
          className="object-cover object-center"
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Dark overlays for text readability */}
      <div className="absolute inset-0 bg-[#0a0a0a]/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]/30" />

      {/* Racing accent lines */}
      <div
        className="absolute top-[25%] left-0 right-0 h-[1px] -skew-y-1 opacity-20"
        style={{ backgroundColor: "#E10600" }}
      />
      <div
        className="absolute top-[75%] left-0 right-0 h-[1px] skew-y-1 opacity-20"
        style={{ backgroundColor: "#E10600" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <AnimatedText
            text="NAVASHEEN"
            className="block justify-center"
          />
          <AnimatedText
            text="ROY CHOWDHURY"
            className="block justify-center mt-2"
            delay={10}
          />
        </h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <p
            className="text-lg md:text-xl tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-sans)", color: "#C0C0C0" }}
          >
            Automotive Design Engineer
          </p>
          {/* Red underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="h-[2px] w-32 origin-center"
            style={{ backgroundColor: "#E10600" }}
          />
        </motion.div>

        {/* Bottom labels */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-32 left-6 right-6 flex justify-between max-w-5xl mx-auto"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            Desmania Pvt. Ltd.
          </span>
          <span className="text-xs tracking-widest uppercase text-muted-foreground">
            New Delhi
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-white transition-colors"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}
