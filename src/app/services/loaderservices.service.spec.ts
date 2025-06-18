import { TestBed } from '@angular/core/testing';

import { LoaderservicesService } from './loaderservices.service';

describe('LoaderservicesService', () => {
  let service: LoaderservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
