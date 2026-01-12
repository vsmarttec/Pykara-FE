import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { features, principles } from './what-we-build-Data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-what-we-build-ai',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './what-we-build-ai.html',
  styleUrl: './what-we-build-ai.css',
})
export class WhatWeBuildAi {
  title = 'What We Build with AI';
  subtitle = 'We design and deliver AI features that work inside real applications. Our focus is on accuracy, reliability, and clear outcomes.'
  features = features
  principles = principles
}
