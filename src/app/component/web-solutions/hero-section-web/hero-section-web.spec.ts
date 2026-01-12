import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionWeb } from './hero-section-web';

describe('HeroSectionWeb', () => {
  let component: HeroSectionWeb;
  let fixture: ComponentFixture<HeroSectionWeb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionWeb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionWeb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
