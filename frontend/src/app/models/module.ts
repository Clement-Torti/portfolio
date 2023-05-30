import { ModuleCategory } from './moduleCategory';
import { SchoolCategory } from './schoolCategory';

export class Module {
    title: string;
    timeStudied: string;
    description: string;
    references: string[];

    school: SchoolCategory;
    category: ModuleCategory;
  
    constructor(title: string, school: SchoolCategory, timeStudied: string, description: string, references: string[], category: ModuleCategory) {
        this.title = title;
        this.school = school;
        this.timeStudied = timeStudied;
        this.description = description;
        this.references = references;
        this.category = category;
    }
  }
  