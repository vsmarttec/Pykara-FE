import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDynamic } from './portfolio-dynamic';

describe('PortfolioDynamic', () => {
  let component: PortfolioDynamic;
  let fixture: ComponentFixture<PortfolioDynamic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDynamic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDynamic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
