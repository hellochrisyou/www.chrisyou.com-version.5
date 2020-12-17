import { BackgroundComponent } from './background/background.component';
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
    data: { state: 'home' }
  },
  {
    path: 'background',
    component: BackgroundComponent,
    data: { state: 'background' }
  },
  {
    path: 'background-mobile',
    component: BackgroundMobileComponent,
    data: { state: 'background-mobile' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { state: 'skills' }
  },
  {
    path: 'project',
    component: ProjectComponent,
    data: { state: 'project' }
  },
  {
    path: 'recording',
    component: RecordingComponent,
    data: { state: 'recording' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { state: 'contact' }
  },
  {
    path: 'previous-versions',
    component: PrevVersionComponent,
    data: { state: 'previous-versions' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
