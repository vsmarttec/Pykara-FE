import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiCapabilities } from './ai-capabilities';

describe('AiCapabilities', () => {
  let component: AiCapabilities;
  let fixture: ComponentFixture<AiCapabilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiCapabilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiCapabilities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
