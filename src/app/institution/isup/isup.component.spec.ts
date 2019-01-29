import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsupComponent } from './isup.component';

describe('IsupComponent', () => {
  let component: IsupComponent;
  let fixture: ComponentFixture<IsupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
