import { TestBed } from '@angular/core/testing';

import { PrinService } from './prin.service';

describe('PrinService', () => {
  let service: PrinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
