import { ProjectCategory } from "./projectCategory";

export class Project {
    title: string;
    icon: string;
    description: string;
    shortDescription: string;
    entity: string;
    date: string;
    role: string;
    teamDescription: string | null;
    teamMembers: string[];
    languages: string[];
    technologies: string[];
    acquiredSkills: string[];
    githubLink: string | null;
    videoLink: string | null;
    reportPath: string | null;
    
    projectCategories: ProjectCategory[];


    constructor(title: string, 
        icon: string,
        description: string,
        shortDescription: string,
        entity: string, 
        date: string, 
        role: string, 
        teamDescription: string | null, 
        teamMembers: string[], 
        languages: string[],
        technologies: string[], 
        acquiredSkills: string[], 
        githubLink: string | null, 
        videoLink: string | null, 
        reportPath: string | null, 
        projectCategories: ProjectCategory[]) {
        this.title = title;
        this.icon = icon;
        this.description = description;
        this.shortDescription = shortDescription;
        this.entity = entity;
        this.date = date;
        this.role = role;
        this.teamDescription = teamDescription;
        this.teamMembers = teamMembers;
        this.languages = languages;
        this.technologies = technologies;
        this.acquiredSkills = acquiredSkills;
        this.githubLink = githubLink;
        this.videoLink = videoLink;
        this.reportPath = reportPath;
        this.projectCategories = projectCategories;
    }
  }
  