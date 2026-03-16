import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

const Experience = dynamic(
  () => import("@/components/sections/experience").then((mod) => mod.Experience),
  { ssr: true }
);
const Skills = dynamic(
  () => import("@/components/sections/skills").then((mod) => mod.Skills),
  { ssr: true }
);
const Projects = dynamic(
  () => import("@/components/sections/projects").then((mod) => mod.Projects),
  { ssr: true }
);
const Education = dynamic(
  () => import("@/components/sections/education").then((mod) => mod.Education),
  { ssr: true }
);
const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
