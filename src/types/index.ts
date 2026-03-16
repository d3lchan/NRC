export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
  isCurrent?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
  isOngoing?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
}
