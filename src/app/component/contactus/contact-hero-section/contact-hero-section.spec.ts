import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeroSection } from './contact-hero-section';

describe('ContactHeroSection', () => {
  let component: ContactHeroSection;
  let fixture: ComponentFixture<ContactHeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactHeroSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactHeroSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
