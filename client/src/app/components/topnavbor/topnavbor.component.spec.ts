import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavborComponent } from './topnavbor.component';

describe('TopnavborComponent', () => {
  let component: TopnavborComponent;
  let fixture: ComponentFixture<TopnavborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopnavborComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopnavborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
