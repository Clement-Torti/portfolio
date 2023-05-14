import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sectionClick = new EventEmitter<string>();
  @Input() currentSection: string = 'aboutMe';

  scrollToSection(section: string) {
    this.sectionClick.emit(section);
  }
}
