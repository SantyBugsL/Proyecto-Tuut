import { TestBed } from '@angular/core/testing';

import { WritService } from './writ.service';

describe('WritService', () => {
  let service: WritService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WritService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
