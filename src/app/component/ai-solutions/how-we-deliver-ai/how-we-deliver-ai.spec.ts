import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeDeliverAi } from './how-we-deliver-ai';

describe('HowWeDeliverAi', () => {
  let component: HowWeDeliverAi;
  let fixture: ComponentFixture<HowWeDeliverAi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWeDeliverAi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWeDeliverAi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
