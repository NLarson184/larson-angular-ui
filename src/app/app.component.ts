import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatIconRegistry } from '@angular/material/icon';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, shareReplay } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    
  ]
})
export class AppComponent {
  private title: string = 'Nick Larson Site';

  // Detect if this is being viewed on mobile
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private registry: MatIconRegistry,
    private breakpointObserver: BreakpointObserver,
    private modalService: NgbModal
  ) {
    // Load in the SCSS fontawesome libraries into the mat icon registry
    registry.registerFontClassAlias('fontawesome', 'fa');
    registry.registerFontClassAlias('brands', 'fab');
  }

  openLoginModal() {
    const loginModalRef = this.modalService.open(LoginComponent);
  }
}
