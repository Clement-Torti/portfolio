import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './components/main-view/main-view.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'aboutMe', component: MainViewComponent },
  { path: 'education', component: MainViewComponent },
  { path: 'projects', component: MainViewComponent },
  { path: 'profesionalExperience', component: MainViewComponent },
  { path: 'hobbies', component: MainViewComponent },
  { path: 'contact', component: MainViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
