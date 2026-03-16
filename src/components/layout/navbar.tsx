"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { useActiveSection } from "@/hooks/use-active-section";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(
    () => NAV_LINKS.map((link) => link.href.replace("#", "")),
    []
  );
  const activeSection = useActiveSection(sectionIds);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    scrollTo(href);
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-lg" : "bg-transparent"
      )}
    >
      {/* Racing red top line */}
      <div className="h-[2px] bg-racing-red w-full" style={{ backgroundColor: "#E10600" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        {/* Logo / Monogram */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-widest text-white hover:text-racing-red transition-colors"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span style={{ color: "#E10600" }}>N</span>RC
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={cn(
                  "relative text-xs uppercase tracking-[0.2em] transition-colors duration-200 py-1",
                  isActive ? "text-white" : "text-muted-foreground hover:text-white"
                )}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-[2px]"
                    style={{ backgroundColor: "#E10600" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="md:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-[400px] bg-[#0a0a0a] border-l border-white/10"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleClick(link.href)}
                  className="text-2xl uppercase tracking-[0.3em] text-white hover:text-[#E10600] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
}
