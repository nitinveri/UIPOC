import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryrecordsComponent } from './countryrecords.component';

describe('CountryrecordsComponent', () => {
  let component: CountryrecordsComponent;
  let fixture: ComponentFixture<CountryrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryrecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
