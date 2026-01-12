import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePykara } from './welcome-pykara';

describe('WelcomePykara', () => {
  let component: WelcomePykara;
  let fixture: ComponentFixture<WelcomePykara>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePykara]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePykara);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
