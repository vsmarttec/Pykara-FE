import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeBuildAi } from './what-we-build-ai';

describe('WhatWeBuildAi', () => {
  let component: WhatWeBuildAi;
  let fixture: ComponentFixture<WhatWeBuildAi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeBuildAi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeBuildAi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
