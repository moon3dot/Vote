import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVoteComponent } from './get-vote.component';

describe('GetVoteComponent', () => {
  let component: GetVoteComponent;
  let fixture: ComponentFixture<GetVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
