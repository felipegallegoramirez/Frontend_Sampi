import { TestBed } from '@angular/core/testing';

import { ExpertMethodologyService } from './expert-methodology.service';

describe('ExpertMethodologyService', () => {
  let service: ExpertMethodologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertMethodologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
