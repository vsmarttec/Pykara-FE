import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireHeroSection } from './hire-hero-section';

describe('HireHeroSection', () => {
  let component: HireHeroSection;
  let fixture: ComponentFixture<HireHeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireHeroSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireHeroSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
