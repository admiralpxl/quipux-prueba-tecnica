import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDetailCardComponent } from './info-detail-card.component';

describe('InfoDetailCardComponent', () => {
  let component: InfoDetailCardComponent;
  let fixture: ComponentFixture<InfoDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDetailCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
