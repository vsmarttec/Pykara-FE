import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSolutions } from './ai-solutions';

describe('AiSolutions', () => {
  let component: AiSolutions;
  let fixture: ComponentFixture<AiSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSolutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
