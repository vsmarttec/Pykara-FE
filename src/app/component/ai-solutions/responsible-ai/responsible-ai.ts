import { Component } from '@angular/core';
import { practices } from './responsible-ai-Data';
import { CommonModule } from '@angular/common';
import { CheckCircle, LucideAngularModule, Shield } from 'lucide-angular';

@Component({
  selector: 'app-responsible-ai',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './responsible-ai.html',
  styleUrl: './responsible-ai.css',
})
export class ResponsibleAi {
  title = 'Trusted System Design Practices';
  practices = practices
  checkCircle = CheckCircle
  shield = Shield
}
