import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesWeServe } from './industries-we-serve';

describe('IndustriesWeServe', () => {
  let component: IndustriesWeServe;
  let fixture: ComponentFixture<IndustriesWeServe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesWeServe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustriesWeServe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
