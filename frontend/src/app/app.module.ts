import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AboutMeSectionComponent } from './components/about-me-section/about-me-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { EducationSectionComponent } from './components/education-section/education-section.component';
import { ProfessionalExperienceSectionComponent } from './components/professional-experience-section/professional-experience-section.component';
import { HobbiesSectionComponent } from './components/hobbies-section/hobbies-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { SchoolCardComponent } from './components/school-card/school-card.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { YTPlayerModule } from 'angular-youtube-player';


@NgModule({
  declarations: [AppComponent, 
    NavbarComponent, 
    MainViewComponent, 
    AboutMeSectionComponent, 
    EducationSectionComponent, 
    ProfessionalExperienceSectionComponent, 
    HobbiesSectionComponent, 
    ContactSectionComponent, 
    ProjectsSectionComponent,
    ModuleCardComponent,
    SchoolCardComponent,
    ProjectDetailsComponent],
  imports: [BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    BrowserAnimationsModule, 
    CommonModule, 
    FlexLayoutModule, 
    NgxExtendedPdfViewerModule,
    YTPlayerModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
