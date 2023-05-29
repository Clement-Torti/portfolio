import { HobbyCategory } from './hobbyCategory';

export class Hobby {
    text: string;
    videoLink: string;
    imageLink = '';

    category: HobbyCategory;

    constructor(text: string, videoLink: string, category: HobbyCategory, imageLink: string = '') {
        this.text = text;
        this.videoLink = videoLink;
        this.category = category;
        this.imageLink = imageLink;
    }
  }
  