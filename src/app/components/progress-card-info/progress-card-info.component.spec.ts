import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCardInfoComponent } from './progress-card-info.component';

describe('ProgressCardInfoComponent', () => {
  let component: ProgressCardInfoComponent;
  let fixture: ComponentFixture<ProgressCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressCardInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
