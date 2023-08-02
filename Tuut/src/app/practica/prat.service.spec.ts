import { TestBed } from '@angular/core/testing';

import { PratService } from './prat.service';

describe('PratService', () => {
  let service: PratService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PratService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
