import { TestBed } from '@angular/core/testing';

import { CustomwerListPresenterService } from './customwer-list-presenter.service';

describe('CustomwerListPresenterService', () => {
  let service: CustomwerListPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomwerListPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
