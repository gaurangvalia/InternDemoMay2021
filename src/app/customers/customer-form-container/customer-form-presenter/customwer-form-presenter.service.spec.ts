import { TestBed } from '@angular/core/testing';

import { CustomwerFormPresenterService } from './customwer-form-presenter.service';

describe('CustomwerFormPresenterService', () => {
  let service: CustomwerFormPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomwerFormPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
