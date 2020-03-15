import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PrevVersionComponent } from './prev-version/prev-version.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { RecordingComponent } from './recording/recording.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';
import { BackgroundComponent } from './background/background.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-me',
    component: AboutComponent,
  },
  {
    path: 'background',
    component: BackgroundComponent,
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
    path: 'testimonial',
    component: TestimonialComponent,
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
