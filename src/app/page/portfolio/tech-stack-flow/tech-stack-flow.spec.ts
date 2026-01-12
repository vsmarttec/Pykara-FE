import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackFlow } from './tech-stack-flow';

describe('TechStackFlow', () => {
  let component: TechStackFlow;
  let fixture: ComponentFixture<TechStackFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStackFlow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
