import { Component, Input } from '@angular/core';
import { Module } from 'src/app/models/module';

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.css']
})
export class ModuleCardComponent {
@Input() module: Module | undefined;

}
