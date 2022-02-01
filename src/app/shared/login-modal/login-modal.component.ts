import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
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
export class LoginModalComponent implements OnInit {
  emailAddress: string = '';
  password: string = '';

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage: string = '';
  roles: string[] = [];

  constructor(
    public activeModal: NgbActiveModal,
    public tokenStorage: TokenStorageService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      // Reload the page to remove the login button (should maybe route to user page)
      this.reloadPage();
    }
  }

  onSubmit(): void {
    this.authService.login(this.emailAddress, this.password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        
        let user = this.tokenStorage.getUser();

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = user ? user.roles : [];
        this.reloadPage();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    })
  }

  reloadPage(): void {
    window.location.reload();
  }
}
