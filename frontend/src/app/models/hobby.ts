import { HobbyCategory } from './hobbyCategory';

export class Hobby {
    text: string;
    videoLink: string;

    category: HobbyCategory;

    constructor(text: string, videoLink: string, category: HobbyCategory) {
        this.text = text;
        this.videoLink = videoLink;
        this.category = category;
    }
  }
  