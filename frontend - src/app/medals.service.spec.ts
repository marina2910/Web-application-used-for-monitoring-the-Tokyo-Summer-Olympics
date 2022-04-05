import { TestBed } from '@angular/core/testing';

import { MedalsService } from './medals.service';

describe('MedalsService', () => {
  let service: MedalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
