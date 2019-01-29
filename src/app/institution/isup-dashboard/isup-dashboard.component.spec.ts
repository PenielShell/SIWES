import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsupDashboardComponent } from './isup-dashboard.component';

describe('IsupDashboardComponent', () => {
  let component: IsupDashboardComponent;
  let fixture: ComponentFixture<IsupDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsupDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
