import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToVoteComponent } from './to-vote.component';

describe('ToVoteComponent', () => {
  let component: ToVoteComponent;
  let fixture: ComponentFixture<ToVoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToVoteComponent]
    });
    fixture = TestBed.createComponent(ToVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
