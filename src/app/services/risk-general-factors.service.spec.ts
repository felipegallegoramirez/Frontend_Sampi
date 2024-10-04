import { TestBed } from '@angular/core/testing';

import { RiskGeneralFactorsService } from './risk-general-factors.service';

describe('RiskGeneralFactorsService', () => {
  let service: RiskGeneralFactorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskGeneralFactorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
