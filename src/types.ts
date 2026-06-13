export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string; // We can use this as more info or buyer link
  featured: boolean;
  category: "Woven" | "Denim" | "Knit" | "Sourcing" | "Costing";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  buyers?: string;
}

export interface Skill {
  name: string;
  category: "merchandising" | "sourcing" | "compliance" | "technical";
  level: number; // 0-100
  iconName: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  role: string;
  message: string;
  timestamp: string;
}
