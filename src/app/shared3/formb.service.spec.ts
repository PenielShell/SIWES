import { TestBed } from '@angular/core/testing';

import { FormbService } from './formb.service';

describe('FormbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormbService = TestBed.get(FormbService);
    expect(service).toBeTruthy();
  });
});
