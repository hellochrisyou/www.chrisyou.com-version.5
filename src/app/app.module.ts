import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundMobileComponent } from './background-mobile/background-mobile.component';
import { BackgroundComponent } from './background/background.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { PrevVersionComponent } from './prev-version/prev-version.component';
import { ProjectComponent } from './project/project.component';
import { RecordingComponent } from './recording/recording.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ImageDialog } from './project/image-dialog/image-dialog';
import { SpaceAfterPeriodPipe } from './testimonial/shared.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageDialog,
    HomeComponent,
    BackgroundComponent,
    ContactComponent,
    TestimonialComponent,
    SkillsComponent,
    ProjectComponent,
    PrevVersionComponent,
    RecordingComponent,
    BackgroundMobileComponent,
    SpaceAfterPeriodPipe
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
  bootstrap: [AppComponent],
  entryComponents: [ImageDialog]
})

export class AppModule { }
