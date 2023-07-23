import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVoterComponent } from './get-voter.component';

describe('GetVoterComponent', () => {
  let component: GetVoterComponent;
  let fixture: ComponentFixture<GetVoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetVoterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
