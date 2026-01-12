import { Component } from '@angular/core';
import { AiHero } from '../../component/ai-solutions/ai-hero/ai-hero';
import { AiCapabilities } from '../../component/ai-solutions/ai-capabilities/ai-capabilities';
import { TechApproach } from '../../component/ai-solutions/tech-approach/tech-approach';
import { ResponsibleAi } from '../../component/ai-solutions/responsible-ai/responsible-ai';
import { HowWeDeliverAi } from '../../component/ai-solutions/how-we-deliver-ai/how-we-deliver-ai';
import { WhatWeBuildAi } from '../../component/ai-solutions/what-we-build-ai/what-we-build-ai';
import { AiPocsComponent } from '../../component/ai-solutions/ai-pocs.component/ai-pocs.component';
import { AppWhyChoosePykara } from '../../component/app-why-choose-pykara/app-why-choose-pykara';

@Component({
  selector: 'app-ai-solutions',
  imports: [AiHero, AiCapabilities, TechApproach, ResponsibleAi, HowWeDeliverAi, WhatWeBuildAi, AiPocsComponent,AppWhyChoosePykara],
  templateUrl: './ai-solutions.html',
  styleUrl: './ai-solutions.css',
})
export class AiSolutions {

}
