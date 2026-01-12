import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { principles, reasons } from './app-why-choose-pykaraData';
import { ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-app-why-choose-pykara',
  imports: [CommonModule],
  templateUrl: './app-why-choose-pykara.html',
  styleUrl: './app-why-choose-pykara.css',
})
export class AppWhyChoosePykara implements OnInit {
  title: string = 'Why Choose Pykara';
  subtitle: string = 'We believe good software comes from clarity, discipline, and consistent execution.';
  goal: string = 'Our goal is to be a reliable technology partner, not just a service provider.';
  arrowRight = ArrowRight
  reasons = reasons
  principles = principles
  constructor() {

  }

  ngOnInit(): void {

  }

}
