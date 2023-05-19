export class Job {
    company: string;
    date: string;
    title: string;
    description: string;
    missions: string[];
    imagePath: string;

  
    constructor(company: string, date: string, title: string, description: string, missions: string[], imagePath: string) {
        this.company = company;
        this.date = date;
        this.title = title;
        this.description = description;
        this.missions = missions;
        this.imagePath = imagePath;
    }
  }
  