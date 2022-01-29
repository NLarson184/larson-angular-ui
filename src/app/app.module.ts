import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
import { LoginComponent } from './login/login.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { RatingComponent } from './shared/rating/rating.component';
import { LoginModalComponent } from './shared/login-modal/login-modal.component';

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
    ContactComponent,
    LoginComponent,
    ProfileComponent,
    RatingComponent,
    LoginModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    authInterceptorProviders,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.siteKey
      } as RecaptchaSettings
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
