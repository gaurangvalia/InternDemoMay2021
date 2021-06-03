import { TestBed } from '@angular/core/testing';

import { InternTestGuard } from './intern-test.guard';

describe('InternTestGuard', () => {
  let guard: InternTestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InternTestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
