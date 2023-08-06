import { TestBed } from '@angular/core/testing';

import { MainSingupService } from './main-singup.service';

describe('MainSingupService', () => {
  let service: MainSingupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainSingupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
