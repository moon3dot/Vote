import { TestBed } from '@angular/core/testing';

import { GetVoteService } from './get-vote.service';

describe('GetVoteService', () => {
  let service: GetVoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetVoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
