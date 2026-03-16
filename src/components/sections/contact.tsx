"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { GlassCard } from "@/components/shared/glass-card";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import { CONTACT_INFO } from "@/lib/constants";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT_INFO.location,
    href: undefined,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: CONTACT_INFO.linkedin,
    href: `https://${CONTACT_INFO.linkedin}`,
  },
];

export function Contact() {
  return (
    <SectionWrapper id="contact">
      <motion.div variants={fadeInUp} className="mb-16 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          LET&apos;S CONNECT
        </h2>
        <div className="h-[2px] w-16 mx-auto" style={{ backgroundColor: "#E10600" }} />
      </motion.div>

      <motion.div variants={fadeInUp} className="max-w-lg mx-auto">
        <GlassCard>
          <div className="space-y-6">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <Icon size={18} style={{ color: "#E10600" }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-widest text-muted-foreground"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm text-white">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="block hover:bg-white/5 -mx-3 px-3 py-2 rounded-lg transition-colors"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className="-mx-3 px-3 py-2">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5">
            <Button
              render={<a href="mailto:navasheenrc@gmail.com" />}
              className="w-full bg-[#E10600] hover:bg-[#E10600]/90 text-white font-bold tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Download size={16} className="mr-2" />
              GET IN TOUCH
            </Button>
          </div>
        </GlassCard>
      </motion.div>
    </SectionWrapper>
  );
}
