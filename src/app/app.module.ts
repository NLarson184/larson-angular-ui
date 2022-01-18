import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { SharedCalendarComponent } from './project-list/shared-calendar/shared-calendar.component';
import { BucketListComponent } from './project-list/bucket-list/bucket-list.component';
import { ExerciseTrackerComponent } from './project-list/exercise-tracker/exercise-tracker.component';
import { GoalTrackerComponent } from './project-list/goal-tracker/goal-tracker.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResumeComponent,
    SharedCalendarComponent,
    BucketListComponent,
    ExerciseTrackerComponent,
    GoalTrackerComponent,
    ProjectListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
