import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  captchaResponse: string|undefined;
  captchaSiteKey: string = environment.siteKey;

  skillDescriptions: string[] = ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert']

  constructor() { }

  ngOnInit(): void {
  }

  captchaResolved(captchaResponse: string) {
    this.captchaResponse = captchaResponse;
  }
}
