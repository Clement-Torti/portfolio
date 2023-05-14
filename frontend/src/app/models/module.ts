import { ModuleCategory } from './moduleCategory';
import { School } from './school';

export class Module {
    title: string;
    hoursOfStudies: number;
    description: string;
    references: string[];

    school: School;
    category: ModuleCategory;
  
    constructor(title: string, school: School, hoursOfStudies: number, description: string, references: string[], category: ModuleCategory) {
        this.title = title;
        this.school = school;
        this.hoursOfStudies = hoursOfStudies;
        this.description = description;
        this.references = references;
        this.category = category;
    }
  }
  