import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEventComponent } from './add-edit-event/add-edit-event.component';
import { CalendarHomeComponent } from './calendar-home/calendar-home.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SharedCalendarRoutingModule } from './shared-calendar-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AddEditEventComponent,
    CalendarHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedCalendarRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
  ]
})
export class SharedCalendarModule { }
