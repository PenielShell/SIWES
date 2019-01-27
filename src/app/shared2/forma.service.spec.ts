import { TestBed } from '@angular/core/testing';

import { FormaService } from './forma.service';

describe('FormaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormaService = TestBed.get(FormaService);
    expect(service).toBeTruthy();
  });
});
