import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarEvent, CalendarEventAction, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Event } from '../models/event.model';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-calendar-home',
  templateUrl: './calendar-home.component.html',
  styleUrls: ['./calendar-home.component.css']
})
export class CalendarHomeComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  viewDate: Date = new Date();
  calendarEventList: CalendarEvent<Event>[] = [];
  activeDayIsOpen: boolean = true;

  ownerActions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.deleteEvent(event);
      },
    }
  ]

  constructor(
    private calendarService: CalendarService,
    private tokenService: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Get the start of the current month
    let monthStart = new Date(this.viewDate.getFullYear(), this.viewDate.getMonth(), 1);

    // Get the list of events for this user
    this.calendarService.getEventList(monthStart).subscribe(list => {
      this.calendarEventList = this.calendarService.convertEventsToCalendarEvents(list).map(event => {
        console.dir(this.tokenService.getUser());
        if (event.meta && event.meta.creator == this.tokenService.getUser()?.id) {
          event.actions = this.ownerActions;
        }
        return event;
      });

      console.dir(this.calendarEventList);
    });
  }

  // TODO: implement refresh logic

  dayClicked({ date, events }: { date: Date; events: CalendarEvent<Event>[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if ((isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  addEvent() {
    this.router.navigate(
      ['addEvent', this.calendarEventList[0].meta?.calendarList[0]],
      { relativeTo: this.route })
  }

  deleteEvent(event: CalendarEvent<Event>) {
    if (event.meta) {
      this.calendarService.deleteEvent(event.meta.id).subscribe(success => {
        // Remove the event from the list
        this.calendarEventList = this.calendarEventList.filter((iEvent) => iEvent !== event);
      })
    }
  }
}
