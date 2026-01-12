import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireResource } from './hire-resource';

describe('HireResource', () => {
  let component: HireResource;
  let fixture: ComponentFixture<HireResource>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireResource]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireResource);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
