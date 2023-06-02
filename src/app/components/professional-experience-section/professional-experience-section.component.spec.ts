import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperienceSectionComponent } from './professional-experience-section.component';

describe('ProfessionalExperienceSectionComponent', () => {
  let component: ProfessionalExperienceSectionComponent;
  let fixture: ComponentFixture<ProfessionalExperienceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalExperienceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperienceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
