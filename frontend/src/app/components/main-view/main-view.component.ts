import { Component } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  currentSection = 'aboutMe';


  handleSectionClick(section: string) {
    this.currentSection = section;
    document.querySelector('#' + section)?.scrollIntoView({ behavior: 'smooth' });
  }
}
