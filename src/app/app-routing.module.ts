import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BucketListComponent } from './project-list/bucket-list/bucket-list.component';
import { ExerciseTrackerComponent } from './project-list/exercise-tracker/exercise-tracker.component';
import { GoalTrackerComponent } from './project-list/goal-tracker/goal-tracker.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedCalendarComponent } from './project-list/shared-calendar/shared-calendar.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projectList', component: ProjectListComponent },
  { path: 'projectList/bucketList', component: BucketListComponent },
  { path: 'projectList/exerciseTracker', component: ExerciseTrackerComponent },
  { path: 'projectList/goalTracker', component: GoalTrackerComponent },
  { path: 'projectList/sharedCalendar', component: SharedCalendarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
