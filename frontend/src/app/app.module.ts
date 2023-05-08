import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AboutMeSectionComponent } from './component/about-me-section/about-me-section.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MainViewComponent, AboutMeSectionComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
