import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVoteComponent } from './all-vote.component';

describe('AllVoteComponent', () => {
  let component: AllVoteComponent;
  let fixture: ComponentFixture<AllVoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllVoteComponent]
    });
    fixture = TestBed.createComponent(AllVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
