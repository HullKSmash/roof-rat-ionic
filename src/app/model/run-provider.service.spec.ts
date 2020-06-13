import { TestBed } from '@angular/core/testing';

import { RunProviderService } from './run-provider.service';

describe('RunProviderService', () => {
  let service: RunProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
