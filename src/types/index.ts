export type ProjectCategory = 'flagship' | 'supporting' | 'collaborative' | 'prototype';
export type ProjectStatus = 'completed' | 'prototype' | 'unfinished';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  category: ProjectCategory;
  status: ProjectStatus;
  statusText: string;
  role: string;
  roleType: 'solo' | 'lead' | 'collaborator' | 'pm';
  verifiedCommits?: string;
  timeframe: string;
  summary: string;
  techStack: string[];
  keyFeatures: string[];
  verifiableContributions: string[];
  teamAttribution?: string;
  architectureHighlights: string[];
  challengesSolved: string[];
  metrics: ProjectMetric[];
  repoUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  videoEmbed?: string;
  releasesUrl?: string;
  documentationText?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Core Strength' | 'Proficient' | 'Working Knowledge';
    context: string;
  }[];
}
