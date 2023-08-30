import { TestBed } from '@angular/core/testing';

import { NakedService } from './naked.service';

describe('NakedService', () => {
  let service: NakedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NakedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
