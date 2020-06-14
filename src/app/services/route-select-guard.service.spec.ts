import { TestBed } from '@angular/core/testing';

import { RouteSelectGuardService } from './route-select-guard.service';

describe('RouteSelectGuardService', () => {
  let service: RouteSelectGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteSelectGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
