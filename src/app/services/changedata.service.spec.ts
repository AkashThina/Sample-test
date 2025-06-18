import { TestBed } from '@angular/core/testing';

import { ChangedataService } from './changedata.service';

describe('ChangedataService', () => {
  let service: ChangedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
