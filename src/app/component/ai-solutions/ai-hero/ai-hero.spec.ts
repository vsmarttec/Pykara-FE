import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiHero } from './ai-hero';

describe('AiHero', () => {
  let component: AiHero;
  let fixture: ComponentFixture<AiHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
