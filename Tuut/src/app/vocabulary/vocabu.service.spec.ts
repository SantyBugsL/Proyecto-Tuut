import { TestBed } from '@angular/core/testing';

import { VocabuService } from './vocabu.service';

describe('VocabuService', () => {
  let service: VocabuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocabuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
