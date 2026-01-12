import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurTechStackComponent } from './our-tech-stack';



describe('OurTechStack', () => {
  let component: OurTechStackComponent;
  let fixture: ComponentFixture<OurTechStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTechStackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTechStackComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
