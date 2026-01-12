import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsTalkProject } from './lets-talk-project';

describe('LetsTalkProject', () => {
  let component: LetsTalkProject;
  let fixture: ComponentFixture<LetsTalkProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetsTalkProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetsTalkProject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
