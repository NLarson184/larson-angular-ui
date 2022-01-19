import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('100ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {
  emailAddress: string = '';
  password: string = '';
  confirmPassword: string = '';
  firstName: string = '';
  lastName: string = '';

  isExistingUser: boolean = true;
  isNewUser: boolean = false;
  isTransitioning: boolean = false;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  switchFormType() {
    if (this.isExistingUser) {
      this.isExistingUser = false;
      setTimeout(
        () => {
          this.isNewUser = true;
        },
        101
      );
    } else {
      this.isNewUser = false;
      setTimeout(
        () => {
          this.isExistingUser = true;
        },
        101
      );
    }

  }
}
