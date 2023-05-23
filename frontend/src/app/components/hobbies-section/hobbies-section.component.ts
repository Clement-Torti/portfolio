import { Component } from '@angular/core';
import { MOCKED_HOBBIES } from 'src/app/mock/mock-hobbies';
import { Hobby } from 'src/app/models/hobby';
import { HobbyCategory } from 'src/app/models/hobbyCategory';

@Component({
  selector: 'app-hobbies-section',
  templateUrl: './hobbies-section.component.html',
  styleUrls: ['./hobbies-section.component.css']
})
export class HobbiesSectionComponent {
  hobbies: Hobby[] = MOCKED_HOBBIES;
  selectedCategory: string = HobbyCategory.GUITARE;
  filteredHobbies = this.hobbies.filter(hobby => hobby.category === this.selectedCategory);;


  hobbyCategoryValues() {
    return Object.values(HobbyCategory);
  }

  onCategoryChange(category: string) {  
    this.selectedCategory = category;  
    this.filteredHobbies = this.hobbies.filter(hobby => hobby.category === category);
  }

  extractVideoId(videoLink: string | null): string | null {
    if (videoLink) {
      const videoIdMatch = videoLink.match(/(?:youtu.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|v\/|embed\/|user\/(?:[a-zA-Z]{1}|[0-9]{1})\/|shorts\/))([^\s&]+)/);
      if (videoIdMatch) {
        return videoIdMatch[1];
      }
    }
    return null;
  }
  
}
