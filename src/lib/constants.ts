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
    location: "Manesar, Gurugram",
    period: "Feb 2026 – Present",
    description:
      "Design Engineer in the Automotive/Transportation department. Working across SolidWorks 3D design and engineering, analysis, engineering drawings (GD&T), prototyping, and inventory management for production vehicle projects.",
    tags: ["SolidWorks", "GD&T", "Prototyping"],
    isCurrent: true,
  },
  {
    id: "desmania-apprentice",
    role: "Apprentice Engineer",
    company: "Desmania Pvt. Ltd.",
    location: "Manesar, Gurugram",
    period: "Jul 2025 – Jan 2026",
    description:
      "Apprenticeship in the Automotive/Transportation design department, building hands-on experience with SolidWorks 3D design, engineering drawings, and prototyping workflows for transportation projects.",
    tags: ["SolidWorks", "Engineering Drawings", "Design Process"],
  },
  {
    id: "desmania-intern",
    role: "Engineering Intern",
    company: "Desmania Pvt. Ltd.",
    location: "Manesar, Gurugram",
    period: "Jan 2025 – Jun 2025",
    description:
      "Final-semester (8th sem) internship in the automotive/transportation design department. Supported 3D CAD modeling, engineering drawings, and design documentation for ongoing projects.",
    tags: ["SolidWorks", "CAD Modeling", "Internship"],
  },
  {
    id: "ipl-tech",
    role: "Engineering Intern",
    company: "IPL Tech Pvt. Ltd.",
    location: "India",
    period: "Jun 2024 – Jul 2024",
    description:
      "Six-week industrial internship at IPL Tech Pvt. Ltd., India's first EV truck manufacturer. Optimized gear ratios, speed, and power–torque calculations for 12-speed AMT transmission systems using MATLAB.",
    tags: ["MATLAB", "AMT Transmission", "EV Trucks"],
  },
  {
    id: "taare-zameen",
    role: "Intern",
    company: "Taare Zameen Foundation",
    location: "India",
    period: "Jun 2022 – Jul 2022",
    description:
      "Eight-week summer internship with the Taare Zameen Foundation (NGO). Organized and led training programs for underprivileged youth, and collected data on local utilities issues to present to authorities for faster resolution.",
    tags: ["NGO", "Training Programs", "Community"],
  },
];

export const SKILLS: Skill[] = [
  // Hero skills (gauges) — proficiency levels are indicative estimates
  { name: "CATIA V5", level: 85, category: "CAD" },
  { name: "SolidWorks", level: 88, category: "CAD" },
  { name: "MATLAB & Simulink", level: 80, category: "Analysis" },
  { name: "Python", level: 55, category: "Programming" },
  // Secondary skills
  { name: "C++", level: 60, category: "Programming" },
  { name: "HTML", level: 60, category: "Programming" },
  { name: "GD&T", level: 78, category: "Design" },
  { name: "3D Modeling", level: 85, category: "Design" },
];

export const HERO_SKILL_COUNT = 4;

export const PROJECTS: Project[] = [
  {
    id: "u-tour-robot",
    title: "U-Tour & Automation Robot",
    description:
      "Major project building an autonomous campus tour robot in collaboration with Computer Science students — integrating the hardware and software required to automate guided tours around the university.",
    tags: ["Robotics", "Automation", "Hardware + Software"],
    stats: [
      { label: "TYPE", value: "MAJOR" },
      { label: "TEAM", value: "MECH+CS" },
      { label: "SCOPE", value: "CAMPUS" },
    ],
  },
  {
    id: "gfrp-composites",
    title: "GFRP Composite Characterization",
    description:
      "Minor project characterizing Glass Fiber Reinforced Polymer (GFRP) composites with toughened epoxy — studying their material properties and the resulting performance improvements.",
    tags: ["Composites", "GFRP", "Materials"],
    stats: [
      { label: "MATERIAL", value: "GFRP" },
      { label: "MATRIX", value: "EPOXY" },
      { label: "TYPE", value: "MINOR" },
    ],
  },
  {
    id: "amt-transmission",
    title: "12-Speed AMT Transmission Analysis",
    description:
      "Internship project developing and validating gear-ratio optimization for a 12-speed AMT transmission used in electric trucks, modeling speed and power–torque behaviour in MATLAB.",
    tags: ["MATLAB", "AMT Transmission", "EV Trucks"],
    stats: [
      { label: "GEARS", value: "12-SPD" },
      { label: "TOOL", value: "MATLAB" },
      { label: "APP", value: "EV TRUCK" },
    ],
  },
  {
    id: "dkdc-2025",
    title: "FMAE DKDC 2025",
    description:
      "Participating in the FMAE DKDC 2025 design competition as a member of the FMAE DKDC team, applying automotive design and engineering skills to the challenge.",
    tags: ["FMAE", "Competition", "Design"],
    stats: [
      { label: "EVENT", value: "DKDC" },
      { label: "YEAR", value: "2025" },
      { label: "BODY", value: "FMAE" },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "iit-roorkee",
    institution: "Indian Institute of Technology, Roorkee",
    degree: "Executive Post Graduate Certificate in Electric Vehicle Design",
    period: "Aug 2025 – Jul 2026",
    description:
      "Executive post-graduate certificate program focused on electric vehicle design — covering EV powertrains, systems, and modern e-mobility engineering.",
    isOngoing: true,
  },
  {
    id: "upes",
    institution: "University of Petroleum and Energy Studies (UPES)",
    degree: "B.Tech in Automotive Design Engineering",
    period: "2021 – 2025",
    description:
      "Bachelor of Technology in Automotive Design Engineering at UPES, Dehradun (CGPA 7.04), with coursework spanning vehicle design, CAD/CAE, materials, and powertrain systems.",
  },
  {
    id: "class-xii",
    institution: "Guru Harkrishan Public School",
    degree: "Class XII — 84%",
    period: "2019 – 2021",
    description: "Senior secondary schooling in New Delhi, India.",
  },
  {
    id: "class-x",
    institution: "Summer Fields School",
    degree: "Class X — 80%",
    period: "2007 – 2019",
    description: "Secondary schooling in New Delhi, India.",
  },
];

export const CERTIFICATIONS = [
  "Member — ISA",
  "Member — FMAE DKDC",
  "UI/UX Design",
  "Global Supply Chain Mgmt",
  "Materials & Processes",
  "Form Studies",
];

export const CONTACT_INFO: ContactInfo = {
  email: "navasheenroychowdhury@gmail.com",
  phone: "+91 83779 83314",
  location: "New Delhi – Manesar, India",
  linkedin: "in.linkedin.com/in/navasheenroychowdhury",
};

export const ABOUT_BIO = [
  "I'm an Automotive Design Engineer driven by a lifelong passion for automobiles and aerospace. My goal is to help develop technology that pushes the mechanical and mobility sectors forward — whether that's in automotive, transportation, or aerospace.",
  "I studied Automotive Design Engineering at UPES, building a foundation in vehicle design, CAD/CAE, and materials while learning CAD modeling in CATIA and SolidWorks. Today, at Desmania Pvt. Ltd., I work as a Design Engineer in the Automotive/Transportation department — handling SolidWorks 3D design, engineering drawings (GD&T), and prototyping for production projects.",
  "I'm currently deepening my expertise in electric mobility through an Executive Post Graduate Certificate in Electric Vehicle Design at IIT Roorkee. From optimizing 12-speed AMT transmissions for EV trucks in MATLAB to characterizing GFRP composites, I approach each challenge with the precision of an engineer and the curiosity of an enthusiast.",
];

export const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "4", label: "Major Projects" },
  { value: "6", label: "Software Tools" },
];
