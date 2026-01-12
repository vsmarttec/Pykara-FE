import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TECH_STACK_LAYOUT } from './tech-stack.layout';

import { Router } from '@angular/router';
import { TECH_STACK_MAP } from './tech-stack.data';
interface FlowStep {
  id: number;
  delay: string;
  color: string;
  title: string;
  subtitle: string;
  logo: string;
  path?: string;
  arrow: string;
  cardX: number;
  cardY: number;
  circleX: number;
  circleY: number;
}

@Component({
  selector: 'app-tech-stack-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack-flow.html',
  styleUrls: ['./tech-stack-flow.css']
})
export class TechStackFlow {
  steps: any[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const key = this.router.url.split('/').pop() || '';
    const data = TECH_STACK_MAP[key] || [];

    this.steps = data.map((item, index) => {

      const layout = item.subtitle ? TECH_STACK_LAYOUT[index] : {};

      return {
        id: index + 1,
        ...item,
        ...layout   // ← PATH, ARROW, POSITIONS PRESERVED
      }
    });
  }

}
