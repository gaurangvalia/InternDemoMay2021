import { TestBed } from '@angular/core/testing';

import { TestLazyGuard } from './test-lazy.guard';

describe('TestLazyGuard', () => {
  let guard: TestLazyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestLazyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
