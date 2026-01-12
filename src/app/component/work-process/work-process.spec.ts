import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkProcessComponent } from './work-process';




describe('WorkProcess', () => {
  let component: WorkProcessComponent;
  let fixture: ComponentFixture<WorkProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkProcessComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
