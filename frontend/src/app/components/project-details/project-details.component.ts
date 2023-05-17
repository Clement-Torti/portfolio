import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  @Input() project: Project | null = null;

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
