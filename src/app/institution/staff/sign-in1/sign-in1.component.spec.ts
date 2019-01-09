import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIn1Component } from './sign-in1.component';

describe('SignIn1Component', () => {
  let component: SignIn1Component;
  let fixture: ComponentFixture<SignIn1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignIn1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignIn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
