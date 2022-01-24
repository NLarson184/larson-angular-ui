import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, shareReplay } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { TokenStorageService } from './services/token-storage.service';
import { fadeInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation]
})
export class AppComponent implements OnInit {
  private title: string = 'Nick Larson Site';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;

  // Detect if this is being viewed on mobile
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private registry: MatIconRegistry,
    private breakpointObserver: BreakpointObserver,
    private modalService: NgbModal,
    private tokenStorageService: TokenStorageService
  ) {
    // Load in the SCSS fontawesome libraries into the mat icon registry
    registry.registerFontClassAlias('fontawesome', 'fa');
    registry.registerFontClassAlias('brands', 'fab');
    registry.registerFontClassAlias('regular', 'far');
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    }
  }

  openLoginModal() {
    const loginModalRef = this.modalService.open(LoginComponent);
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
