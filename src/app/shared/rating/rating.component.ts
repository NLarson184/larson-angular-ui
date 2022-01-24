import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit, OnChanges {
  @Input()
  currRating: number = 0;
  @Input()
  maxRating: number = 5;
  @Input()
  ratingDescriptions: string[] = [];

  isShowDesc: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currRating > this.maxRating) {
      this.currRating = this.maxRating;
    }

    this.isShowDesc = this.ratingDescriptions.length === this.maxRating;
  }

  counter(i: number): any {
    return new Array(i);
  }
}
