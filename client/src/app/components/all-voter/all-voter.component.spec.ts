import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVoterComponent } from './all-voter.component';

describe('AllVoterComponent', () => {
  let component: AllVoterComponent;
  let fixture: ComponentFixture<AllVoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllVoterComponent]
    });
    fixture = TestBed.createComponent(AllVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
