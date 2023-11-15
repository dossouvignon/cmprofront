import { TestBed } from '@angular/core/testing';

import { CmproService } from './cmpro.service';

describe('CmproService', () => {
  let service: CmproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
