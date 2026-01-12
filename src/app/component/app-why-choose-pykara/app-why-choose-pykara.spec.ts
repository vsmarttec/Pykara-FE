import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWhyChoosePykara } from './app-why-choose-pykara';

describe('AppWhyChoosePykara', () => {
  let component: AppWhyChoosePykara;
  let fixture: ComponentFixture<AppWhyChoosePykara>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppWhyChoosePykara]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppWhyChoosePykara);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
