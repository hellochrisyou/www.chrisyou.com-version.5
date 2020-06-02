import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BackgroundMobileComponent } from './background-mobile/background-mobile.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PrevVersionComponent } from './prev-version/prev-version.component';
import { ProjectComponent } from './project/project.component';
import { RecordingComponent } from './recording/recording.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'background-mobile',
    component: BackgroundMobileComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'recording',
    component: RecordingComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'previous-versions',
    component: PrevVersionComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
