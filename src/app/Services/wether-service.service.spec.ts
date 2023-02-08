import { TestBed } from '@angular/core/testing';

import { WetherServiceService } from './wether-service.service';

describe('WetherServiceService', () => {
  let service: WetherServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WetherServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
