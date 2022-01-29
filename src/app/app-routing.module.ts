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
import { LoginModalComponent } from './shared/login-modal/login-modal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },
  { path: 'resume', component: ResumeComponent, data: { animation: 'ResumePage' } },
  { path: 'projectList', component: ProjectListComponent, data: { animation: 'ProjectListPage' } },
  { path: 'projectList/bucketList', component: BucketListComponent, data: { animation: 'BucketListProjectPage' } },
  { path: 'projectList/exerciseTracker', component: ExerciseTrackerComponent, data: { animation: 'ExerciseTrackerProjectPage' } },
  { path: 'projectList/goalTracker', component: GoalTrackerComponent, data: { animation: 'GoalTrackerProjectPage' } },
  { path: 'projectList/sharedCalendar', component: SharedCalendarComponent, data: { animation: 'SharedCalendarProjectPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
  { path: 'profile', component: ProfileComponent, data: { animation: 'ProfilePage' } },
  { path: 'login', component: LoginModalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, data: { animation: 'ErrorPage' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
