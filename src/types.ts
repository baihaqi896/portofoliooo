export interface Stat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface EducationItem {
  institution: string;
  major: string;
  gpa: string;
  period: string;
  location: string;
  courses: string[];
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: number; // percentage out of 100
  iconName: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface OrganizationItem {
  id: string;
  name: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  highlights: string[];
  imagePlaceholder: {
    gradient: string;
    icon: string;
  };
  period: string;
  academicDetails?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  rank: string;
  icon: string;
}
