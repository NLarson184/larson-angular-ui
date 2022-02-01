import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Calendar } from '../models/calendar.model';
import { Event } from '../models/event.model';

const CAL_URL = environment.CALENDAR_URL;

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor(
    private http: HttpClient
  ) { }

  getEventList(monthYear?: Date): Observable<Event[]> {
    // Build out the optional params list
    let queryParams = new HttpParams();
    if (monthYear) {
      queryParams = queryParams.append("month", monthYear.getMonth());
      queryParams = queryParams.append("year", monthYear.getFullYear());
    }

    // Get the event list based on the given search criteria
    return this.http.get<Event[]>(CAL_URL + 'eventList', {
      params: queryParams
    });
  }

  getCalendarList(): Observable<Calendar[]> {
    return this.http.get<Calendar[]>(CAL_URL);
  }

  createEvent(event: Event): Observable<any> {
    return this.http.post<any>(CAL_URL + 'event', event);
  }

  createCalendar(calendar: Calendar): Observable<any> {
    return this.http.post<any>(CAL_URL, calendar);
  }

  deleteEvent(eventId: string): Observable<any> {
    return this.http.delete<any>(CAL_URL + `event/${eventId}`);
  }

  deleteCalendar(calendarId: string): Observable<any> {
    return this.http.delete<any>(CAL_URL + `${calendarId}`);
  }

  convertEventsToCalendarEvents(eventList: Event[]): CalendarEvent<Event>[] {
    return eventList.map<CalendarEvent>(event => {
      return {
        start: new Date(event.dateTime),
        title: event.name,
        color: {
          primary: '#039848'
        },
        meta: event
      } as CalendarEvent
    });
  }
}
