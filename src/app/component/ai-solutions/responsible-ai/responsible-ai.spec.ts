import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleAi } from './responsible-ai';

describe('ResponsibleAi', () => {
  let component: ResponsibleAi;
  let fixture: ComponentFixture<ResponsibleAi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsibleAi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibleAi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
