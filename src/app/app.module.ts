import { SkillsComponent } from './skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RecordingComponent } from './recording/recording.component';
import { AppRoutingModule } from './app-routing.module';
import { PrevVersionComponent } from './prev-version/prev-version.component';
import { BackgroundComponent } from './background/background.component';
import { BackgroundMobileComponent } from './background-mobile/background-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BackgroundComponent,
    ContactComponent,
    TestimonialComponent,
    SkillsComponent,
    ProjectComponent,
    PrevVersionComponent,
    RecordingComponent,
    BackgroundMobileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
