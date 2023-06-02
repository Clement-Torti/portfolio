import { Component, Input } from '@angular/core';
import { Hobby } from 'src/app/models/hobby';

@Component({
  selector: 'app-hobby-card',
  templateUrl: './hobby-card.component.html',
  styleUrls: ['./hobby-card.component.css']
})
export class HobbyCardComponent {
  @Input() hobby: Hobby | undefined;
  
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
