import { TestBed } from '@angular/core/testing';

import { RiskFactorsService } from './risk-factors.service';

describe('RiskFactorsService', () => {
  let service: RiskFactorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskFactorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
