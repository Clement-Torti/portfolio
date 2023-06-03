import { Component } from '@angular/core';
import { MOCKED_MODULES } from 'src/app/mock/mock-modules';
import { MOCKED_SCHOOLS } from 'src/app/mock/mock-schools';
import { Module } from 'src/app/models/module';
import { ModuleCategory } from 'src/app/models/moduleCategory';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent {
  modules: Module[] = MOCKED_MODULES;
  filteredModules: Module[] = this.modules.filter(module => module.category === ModuleCategory.PROGRAMMING);;
  schools = MOCKED_SCHOOLS;

  moduleCategoryValues() {
    return Object.values(ModuleCategory);
  }

  onCategoryChange(category: string) {    
    this.filteredModules = this.modules.filter(module => module.category === category);
  }
  
}
