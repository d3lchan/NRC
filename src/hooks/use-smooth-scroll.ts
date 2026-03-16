"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollTo = useCallback((href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 80;
    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  return scrollTo;
}
