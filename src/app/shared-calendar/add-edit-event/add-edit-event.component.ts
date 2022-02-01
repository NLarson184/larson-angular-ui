import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgbDateStruct, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '../models/event.model';
import { CalendarService } from '../services/calendar.service';

@Component({
  selector: 'app-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.css']
})
export class AddEditEventComponent implements OnInit {
  // Form values
  eventName: string = '';
  date!: NgbDateStruct;
  time!: NgbTimeStruct;
  notes: string = '';

  eventId: string = '';
  calendarId: string | null = '';
  isAddMode: boolean = true;
  isLoading: boolean = false;
  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private calendarService: CalendarService
  ) { }

  ngOnInit(): void {
    // Pull in the ID for the calendar
    this.calendarId = this.route.snapshot.paramMap.get('id');

    // Check if the event is given
    this.eventId = this.route.snapshot.queryParams['eventId'];
    this.isAddMode = !this.eventId;
  }

  onSubmit(): void {
    // Change the logic depending on the page type
    if (this.isAddMode) {
      console.dir(this.date);
      console.dir(this.time);
      var givenDate = new Date(this.date.year, this.date.month - 1, this.date.day, this.time.hour, this.time.minute);
      console.dir(givenDate);
      let newEvent = {
        name: this.eventName,
        dateTime: givenDate.toString(),
        calendarList: [this.calendarId],
        notes: this.notes
      } as Event;
      this.calendarService.createEvent(newEvent).subscribe(success => {
        console.log('Event creation was successful');
        this.router.navigate(['/calendar']);
      })
    } else {
      // TODO: write out edit logic
    }
  }
}
