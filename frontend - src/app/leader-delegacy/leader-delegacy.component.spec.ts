import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderDelegacyComponent } from './leader-delegacy.component';

describe('LeaderDelegacyComponent', () => {
  let component: LeaderDelegacyComponent;
  let fixture: ComponentFixture<LeaderDelegacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderDelegacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderDelegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
