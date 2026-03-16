import { NavLink, Experience, Skill, Project, Education, ContactInfo } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "desmania-associate",
    role: "Associate Engineer",
    company: "Desmania Pvt. Ltd.",
    location: "New Delhi",
    period: "Jul 2024 – Present",
    description:
      "Working in the Automotive/Transportation Design department, contributing to vehicle design and engineering projects. Applying advanced CAD and simulation tools to develop production-ready automotive components.",
    tags: ["CATIA V5", "Automotive Design", "Transportation"],
    isCurrent: true,
  },
  {
    id: "desmania-apprentice",
    role: "Apprentice Engineer",
    company: "Desmania Pvt. Ltd.",
    location: "New Delhi",
    period: "Jan 2024 – Jun 2024",
    description:
      "Apprenticeship focused on automotive/transportation design processes. Gained hands-on experience with industry-standard CAD tools and design workflows for vehicle development.",
    tags: ["CATIA V5", "SolidWorks", "Design Process"],
  },
  {
    id: "desmania-intern",
    role: "Engineering Intern",
    company: "Desmania Pvt. Ltd.",
    location: "New Delhi",
    period: "Jun 2023 – Dec 2023",
    description:
      "Internship in automotive design department. Assisted in CAD modeling, design documentation, and project coordination for transportation design projects.",
    tags: ["CAD Modeling", "Documentation", "Internship"],
  },
  {
    id: "ipl-tech",
    role: "Engineering Intern",
    company: "IPL Tech Electric Pvt. Ltd.",
    location: "India",
    period: "Jun 2022 – Aug 2022",
    description:
      "Worked on electric vehicle technology and components. Gained exposure to EV powertrain systems, battery management, and electric mobility solutions.",
    tags: ["Electric Vehicles", "EV Technology", "Powertrain"],
  },
  {
    id: "taare-zameen",
    role: "Volunteer / Mentor",
    company: "Taare Zameen Foundation",
    location: "India",
    period: "2021 – 2022",
    description:
      "Contributed to educational initiatives, mentoring underprivileged students in STEM subjects. Organized workshops and interactive learning sessions.",
    tags: ["STEM Education", "Mentoring", "Community"],
  },
];

export const SKILLS: Skill[] = [
  // Hero skills (gauges)
  { name: "CATIA V5", level: 92, category: "CAD" },
  { name: "SolidWorks", level: 88, category: "CAD" },
  { name: "MATLAB & Simulink", level: 80, category: "Analysis" },
  { name: "Python", level: 75, category: "Programming" },
  // Secondary skills
  { name: "C++", level: 65, category: "Programming" },
  { name: "HTML/CSS", level: 70, category: "Programming" },
  { name: "AutoCAD", level: 82, category: "CAD" },
  { name: "ANSYS", level: 72, category: "Analysis" },
  { name: "Simulink", level: 78, category: "Analysis" },
  { name: "3D Modeling", level: 90, category: "Design" },
  { name: "Automotive Design", level: 88, category: "Design" },
  { name: "GD&T", level: 76, category: "Design" },
];

export const HERO_SKILL_COUNT = 4;

export const PROJECTS: Project[] = [
  {
    id: "u-tour-robot",
    title: "U-Tour Autonomous Robot",
    description:
      "Designed and developed an autonomous campus touring robot with navigation capabilities, sensor integration, and real-time obstacle avoidance systems.",
    tags: ["Robotics", "Python", "Sensors", "Autonomous"],
    stats: [
      { label: "SENSORS", value: "6+" },
      { label: "NAV ACCURACY", value: "94%" },
      { label: "RUNTIME", value: "4h" },
    ],
  },
  {
    id: "gfrp-composites",
    title: "GFRP Composite Analysis",
    description:
      "Research and analysis of Glass Fiber Reinforced Polymer composites for automotive applications. Conducted material testing, FEA simulations, and performance optimization.",
    tags: ["Composites", "FEA", "MATLAB", "Materials"],
    stats: [
      { label: "SPECIMENS", value: "24" },
      { label: "WEIGHT SAVED", value: "32%" },
      { label: "STRENGTH", value: "+18%" },
    ],
  },
  {
    id: "amt-transmission",
    title: "AMT Transmission Design",
    description:
      "Designed an Automated Manual Transmission system with focus on shift quality optimization, gear ratio calculations, and mechanism design using CATIA V5.",
    tags: ["CATIA V5", "Transmission", "Mechanical Design"],
    stats: [
      { label: "GEARS", value: "6-SPD" },
      { label: "SHIFT TIME", value: "0.3s" },
      { label: "EFFICIENCY", value: "96%" },
    ],
  },
  {
    id: "dkdc-2025",
    title: "DKDC 2025 Competition",
    description:
      "Participated in the Design, Knowledge, and Development Competition organized by FMAE. Showcased innovative automotive design concepts and engineering solutions.",
    tags: ["Competition", "Design", "Innovation", "FMAE"],
    stats: [
      { label: "TEAMS", value: "50+" },
      { label: "CONCEPTS", value: "3" },
      { label: "STAGE", value: "FINALS" },
    ],
  },
  {
    id: "ev-powertrain",
    title: "EV Powertrain Study",
    description:
      "Comprehensive study on electric vehicle powertrain architectures, battery thermal management systems, and regenerative braking efficiency optimization.",
    tags: ["EV", "Powertrain", "Thermal", "MATLAB"],
    stats: [
      { label: "CONFIGS", value: "8" },
      { label: "REGEN EFF", value: "87%" },
      { label: "MODELS", value: "12" },
    ],
  },
  {
    id: "chassis-design",
    title: "Chassis Frame Optimization",
    description:
      "Topology optimization of a vehicle chassis frame using FEA to achieve optimal weight-to-strength ratio while meeting safety and performance requirements.",
    tags: ["FEA", "ANSYS", "Optimization", "Chassis"],
    stats: [
      { label: "MASS RED.", value: "22%" },
      { label: "SAFETY", value: "PASS" },
      { label: "ITERATIONS", value: "140" },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "iit-roorkee",
    institution: "Indian Institute of Technology, Roorkee",
    degree: "Certification Program",
    period: "2024 – Present",
    description:
      "Advanced certification in engineering disciplines, expanding knowledge in cutting-edge automotive and mechanical engineering technologies.",
    isOngoing: true,
  },
  {
    id: "upes",
    institution: "University of Petroleum and Energy Studies (UPES)",
    degree: "B.Tech in Mechanical Engineering (Automotive Design)",
    period: "2020 – 2024",
    description:
      "Specialized in Automotive Design with coursework in vehicle dynamics, powertrain engineering, CAD/CAE, and materials science. Active participant in motorsport and design clubs.",
  },
  {
    id: "school",
    institution: "Senior Secondary Education",
    degree: "Science Stream (PCM)",
    period: "2018 – 2020",
    description:
      "Physics, Chemistry, and Mathematics focus with strong foundation in engineering fundamentals.",
  },
];

export const CERTIFICATIONS = [
  "ISA Certified",
  "FMAE DKDC 2025",
  "UI/UX Design Coursework",
  "EV Technology",
];

export const CONTACT_INFO: ContactInfo = {
  email: "navasheenrc@gmail.com",
  phone: "+91-XXXXXXXXXX",
  location: "New Delhi, India",
  linkedin: "linkedin.com/in/navasheen-roy-chowdhury",
};

export const ABOUT_BIO = [
  "I'm an Automotive Design Engineer with a deep passion for creating vehicles that push the boundaries of performance and innovation. From the drawing board to the production floor, I thrive on transforming bold concepts into engineering reality.",
  "My journey began at UPES, where I specialized in Automotive Design Engineering, mastering tools like CATIA V5 and SolidWorks while developing a strong foundation in vehicle dynamics, materials science, and powertrain systems. Today, at Desmania Pvt. Ltd., I bring these skills to life in the Automotive/Transportation Design department.",
  "I'm particularly fascinated by the intersection of traditional automotive engineering and emerging electric vehicle technology. Whether it's optimizing composite materials for weight reduction or designing transmission systems for maximum efficiency, I approach every challenge with the precision of an engineer and the creativity of a designer.",
];

export const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "6+", label: "Projects Completed" },
  { value: "10+", label: "Technical Skills" },
];
