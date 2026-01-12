import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessWorkflow } from './process-workflow';

describe('ProcessWorkflow', () => {
  let component: ProcessWorkflow;
  let fixture: ComponentFixture<ProcessWorkflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcessWorkflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessWorkflow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
