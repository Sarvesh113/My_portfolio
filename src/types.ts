export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string;
  avatar: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  experienceYears: string;
}

export interface Skill {
  id: string;
  name: string;
  category: "Database" | "Backend" | "Frontend" | "Runtime" | "Tools" | "Data Analytics" | "Data Visualization" | "Programming";
  icon: string; // lucide icon name
  color: string; // tailwind color prefix
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: Skill[];
  projects: Project[];
  experiences: Experience[];
  educations: Education[];
}
