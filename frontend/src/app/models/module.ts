import { ModuleCategory } from './moduleCategory';
import { SchoolCategory } from './schoolCategory';

export class Module {
    title: string;
    hoursOfStudies: number;
    description: string;
    references: string[];

    school: SchoolCategory;
    category: ModuleCategory;
  
    constructor(title: string, school: SchoolCategory, hoursOfStudies: number, description: string, references: string[], category: ModuleCategory) {
        this.title = title;
        this.school = school;
        this.hoursOfStudies = hoursOfStudies;
        this.description = description;
        this.references = references;
        this.category = category;
    }
  }
  