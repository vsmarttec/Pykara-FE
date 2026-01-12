import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechApproach } from './tech-approach';

describe('TechApproach', () => {
  let component: TechApproach;
  let fixture: ComponentFixture<TechApproach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechApproach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechApproach);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
