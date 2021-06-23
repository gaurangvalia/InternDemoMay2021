import { TestBed } from '@angular/core/testing';

import { TestDataGuard } from './test-data.guard';

describe('TestDataGuard', () => {
  let guard: TestDataGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestDataGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
