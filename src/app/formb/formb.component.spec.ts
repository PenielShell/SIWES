import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbComponent } from './formb.component';

describe('FormbComponent', () => {
  let component: FormbComponent;
  let fixture: ComponentFixture<FormbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
