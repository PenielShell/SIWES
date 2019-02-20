import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Evaluators2Component } from './evaluators2.component';

describe('Evaluators2Component', () => {
  let component: Evaluators2Component;
  let fixture: ComponentFixture<Evaluators2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Evaluators2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Evaluators2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
