import { TestBed } from '@angular/core/testing';

import { TestChildGuard } from './test-child.guard';

describe('TestChildGuard', () => {
  let guard: TestChildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TestChildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
