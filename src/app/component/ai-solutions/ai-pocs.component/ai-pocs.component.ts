import { Component } from '@angular/core';
import { pocs } from './ai-pocs-Data';
import { CommonModule } from '@angular/common';
import { FlaskRound, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-ai-pocs-component',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './ai-pocs.component.html',
  styleUrl: './ai-pocs.component.css',
})
export class AiPocsComponent {
  title = 'Our AI Prototypes';
  subtitle = 'Some of our internal prototypes explore how AI can support learning, analysis, and decision-making.';
  pocs = pocs
  flaskRound=FlaskRound
}
