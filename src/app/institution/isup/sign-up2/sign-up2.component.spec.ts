import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUp2Component } from './sign-up2.component';

describe('SignUp2Component', () => {
  let component: SignUp2Component;
  let fixture: ComponentFixture<SignUp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
