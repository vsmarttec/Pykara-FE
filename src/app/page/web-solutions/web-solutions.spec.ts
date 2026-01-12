import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSolutions } from './web-solutions';

describe('WebSolutions', () => {
  let component: WebSolutions;
  let fixture: ComponentFixture<WebSolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebSolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSolutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
