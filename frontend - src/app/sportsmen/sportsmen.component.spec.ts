import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsmenComponent } from './sportsmen.component';

describe('SportsmenComponent', () => {
  let component: SportsmenComponent;
  let fixture: ComponentFixture<SportsmenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsmenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
