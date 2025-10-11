export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  responsibilities: string[];
}