import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const particlesJS: any;

@Component({
  selector: 'app-particle',
  templateUrl: './particle.component.html',
  styleUrls: ['./particle.component.css']
})
export class ParticleComponent implements OnInit {
  @ViewChild('particlesContainer') particlesContainer!: ElementRef;

  ngOnInit() {
    particlesJS.load('particlesContainer', 'assets/particles/particles.json', () => {
      console.log('Particle.js loaded');
    });

  }
}
