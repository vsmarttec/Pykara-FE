import { Component } from '@angular/core';
import { steps } from './how-er-deliver-ai-Data';
import { CommonModule } from '@angular/common';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-how-we-deliver-ai',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './how-we-deliver-ai.html',
  styleUrl: './how-we-deliver-ai.css',
})
export class HowWeDeliverAi {
  title = 'How We Deliver AI Projects';
  steps = steps
  arrowRight=ArrowRight
}
