import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCompanyContactComponent } from './info-company-contact.component';

describe('InfoCompanyContactComponent', () => {
  let component: InfoCompanyContactComponent;
  let fixture: ComponentFixture<InfoCompanyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCompanyContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCompanyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
