export class School {
    title: string;
    years: string;
    location: string;
    description: string;
    link: string;
    imagePath: string;

    constructor(title: string, years: string, location: string, description: string, link: string, imagePath: string) {
        this.title = title;
        this.years = years;
        this.location = location;
        this.description = description;
        this.link = link;
        this.imagePath = imagePath;
    }
  }
  