import { Component } from '@angular/core';

import { WelcomePykara } from '../welcome-pykara/welcome-pykara';

import { WorkProcessComponent } from '../work-process/work-process';
import { TestimonialsComponent } from '../testimonial/testimonial';
import { HeroSliderComponent } from '../hero-section/hero-section';
import { ClientSegments } from '../client-segments/client-segments';
import { LetsTalkProject } from '../lets-talk-project/lets-talk-project';
import { IndustriesWeServe } from '../industries-we-serve/industries-we-serve';
import { AppWhyChoosePykara } from '../app-why-choose-pykara/app-why-choose-pykara';
import { AiFlow } from './ai-flow/ai-flow';



@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [HeroSliderComponent, WelcomePykara, WorkProcessComponent, TestimonialsComponent, ClientSegments,LetsTalkProject,IndustriesWeServe,AppWhyChoosePykara,AiFlow],
  templateUrl: './main-home.html',
  styleUrl: './main-home.css',
})
export class MainHome {

}
