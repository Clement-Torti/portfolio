import { Component } from '@angular/core';
import { MOCKED_JOBS } from 'src/app/mock/mock-jobs';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-professional-experience-section',
  templateUrl: './professional-experience-section.component.html',
  styleUrls: ['./professional-experience-section.component.css']
})
export class ProfessionalExperienceSectionComponent {
  jobs: Job[] = MOCKED_JOBS;
  
}
