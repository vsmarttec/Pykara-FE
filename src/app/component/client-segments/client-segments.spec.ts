import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSegments } from './client-segments';

describe('ClientSegments', () => {
  let component: ClientSegments;
  let fixture: ComponentFixture<ClientSegments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientSegments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSegments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
