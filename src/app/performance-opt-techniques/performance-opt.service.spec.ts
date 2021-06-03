import { TestBed } from '@angular/core/testing';

import { PerformanceOptService } from './performance-opt.service';

describe('PerformanceOptService', () => {
  let service: PerformanceOptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerformanceOptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
