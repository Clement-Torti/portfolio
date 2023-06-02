import { Component, Input } from '@angular/core';
import { School } from 'src/app/models/school';

@Component({
  selector: 'app-school-card',
  templateUrl: './school-card.component.html',
  styleUrls: ['./school-card.component.css']
})
export class SchoolCardComponent {
  @Input() school: School | undefined;
  @Input() isOdd: boolean | undefined;

}
