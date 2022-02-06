import { Component, OnInit } from '@angular/core';
import { ContactForm } from 'src/app/models/contact-form.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  // Form values
  formModel = new ContactForm();

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form: any) {
    console.dir(form.value);
  }
}
