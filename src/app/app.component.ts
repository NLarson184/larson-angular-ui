import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { map, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
    private breakpointObserver: BreakpointObserver
  ) {
    // Load in the SCSS fontawesome libraries into the mat icon registry
    registry.registerFontClassAlias('fontawesome', 'fa');
    registry.registerFontClassAlias('brands', 'fab');
  }
}
