import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSingupComponent } from './main-singup.component';

describe('MainSingupComponent', () => {
  let component: MainSingupComponent;
  let fixture: ComponentFixture<MainSingupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSingupComponent]
    });
    fixture = TestBed.createComponent(MainSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
