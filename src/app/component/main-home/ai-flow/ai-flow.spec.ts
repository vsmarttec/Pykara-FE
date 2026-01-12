import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiFlow } from './ai-flow';

describe('AiFlow', () => {
  let component: AiFlow;
  let fixture: ComponentFixture<AiFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
