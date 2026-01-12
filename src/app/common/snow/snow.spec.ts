import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snow } from './snow';

describe('Snow', () => {
  let component: Snow;
  let fixture: ComponentFixture<Snow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Snow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Snow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
