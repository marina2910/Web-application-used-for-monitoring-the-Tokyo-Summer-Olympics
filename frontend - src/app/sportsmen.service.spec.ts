import { TestBed } from '@angular/core/testing';

import { SportsmenService } from './sportsmen.service';

describe('SportsmenService', () => {
  let service: SportsmenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SportsmenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
