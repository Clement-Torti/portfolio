import { Component } from '@angular/core';
import { MOCKED_PROJECTS } from 'src/app/mock/mock-projects';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent {
  projects: Project[] = MOCKED_PROJECTS; 
  selectedProject: Project | null = null;

  showProjectDetails(project: Project) {
    this.selectedProject = project;
  }
}
