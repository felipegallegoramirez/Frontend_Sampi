import { TestBed } from '@angular/core/testing';

import { AssigmentControlsService } from './assigment-controls.service';

describe('AssigmentControlsService', () => {
  let service: AssigmentControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssigmentControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
