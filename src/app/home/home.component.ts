import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Page Values
  yearsOfExperience!: number;

  constructor() { }

  ngOnInit(): void {
    this.yearsOfExperience = new Date().getFullYear() - 2017;
  }

}
