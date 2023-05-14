import { Component } from '@angular/core';
import { MOCKED_MODULES } from 'src/app/mock/mock-mdules';
import { Module } from 'src/app/models/module';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent {
  modules: Module[] = MOCKED_MODULES;
  
}
