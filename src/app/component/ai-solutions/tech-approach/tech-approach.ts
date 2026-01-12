import { Component } from '@angular/core';
import { technologies } from './tech-approach-data';
import { CommonModule } from '@angular/common';
import { ArrowRight, Brain, Check, Cpu, Database, Layout, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-tech-approach',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './tech-approach.html',
  styleUrl: './tech-approach.css',
})
export class TechApproach {
  check = Check; database = Database; arrowRight = ArrowRight; cpu = Cpu; brain = Brain; layout = Layout
  title = 'Technology Approach';
  subtitle = 'We work with LLMs, embeddings, vector databases, and fine-tuning methods depending on the use case and data.';

  technologies = technologies
}
