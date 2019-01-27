import { TestBed } from '@angular/core/testing';

import { StudentEvaluateService } from './student-evaluate.service';

describe('StudentEvaluateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentEvaluateService = TestBed.get(StudentEvaluateService);
    expect(service).toBeTruthy();
  });
});
