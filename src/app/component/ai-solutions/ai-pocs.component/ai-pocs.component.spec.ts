import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiPocsComponent } from './ai-pocs.component';

describe('AiPocsComponent', () => {
  let component: AiPocsComponent;
  let fixture: ComponentFixture<AiPocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiPocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiPocsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
