import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCalendarOverviewComponent } from './shared-calendar-overview.component';

describe('SharedCalendarOverviewComponent', () => {
  let component: SharedCalendarOverviewComponent;
  let fixture: ComponentFixture<SharedCalendarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedCalendarOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedCalendarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
