import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.css']
})
export class AboutMeSectionComponent {
  cvPath = 'assets/images/CV_English.jpg';

  currentAge: number = 0;
  private birthYear: number = 1999;

  ngOnInit(): void {
    this.currentAge = new Date().getFullYear() - this.birthYear;
  }
}
