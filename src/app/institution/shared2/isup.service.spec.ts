import { TestBed } from '@angular/core/testing';

import { IsupService } from './isup.service';

describe('IsupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsupService = TestBed.get(IsupService);
    expect(service).toBeTruthy();
  });
});
