import { TestBed } from '@angular/core/testing';

import { MainSungupService } from './main-sungup.service';

describe('MainSungupService', () => {
  let service: MainSungupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSungupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
