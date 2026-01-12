import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Check, CheckCircle, Code, Handshake, LucideAngularModule, Palette, ShieldCheck, Target, Workflow } from 'lucide-angular';

@Component({
  selector: 'app-process-workflow',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './process-workflow.html',
  styleUrl: './process-workflow.css',
})
export class ProcessWorkflow {
  check = Check
  target = Target
  CheckCircle = CheckCircle
  palette = Palette
  code = Code; shield = ShieldCheck; handshake = Handshake; workflow = Workflow

  log(value: any) {
    console.log(value, "index!!!!")
  }
  steps: any = [
    {
      number: 1,
      title: 'Discovery & Solutioning',
      description: 'We clarify goals, propose smart features, and agree success metrics.',
      icon: Target,
      css: 'bg-gradient-to-br from-red-500 to-emerald-600'
    },
    {
      number: 2,
      title: 'Design & Prototype',
      description: 'UX flows and clickable mockups to confirm the experience early.',
      icon: Palette,
      css: 'bg-gradient-to-br from-indigo-500 to-purple-600'
    },
    {
      number: 3,
      title: 'Incremental Development',
      description: 'Regular demos, transparent progress, and rapid change handling.',
      icon: Code,
      css: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
    {
      number: 4,
      title: 'Quality by Default',
      description: 'Code reviews, automated tests, and CI/CD for safe, frequent releases.',
      icon: ShieldCheck,
      css: 'bg-gradient-to-br from-pink-500 to-red-600'
    },
    {
      number: 5,
      title: 'Handover & Support',
      description: 'Documentation, knowledge transfer, and optional ongoing maintenance.',
      icon: Handshake,
      css: "bg-gradient-to-br from-orange-500 to-blue-600"
    }
  ];



  benefits = [
    'A scalable and secure web application built for long-term use.',
    'Clean, accessible user interface with strong performance.',
    'A collaborative development process with clear communication at every stage.',
    'Well-structured and maintainable code that follows industry standards.',

    'Cross-browser and cross-device compatibility for consistent user experience.',

    'Regular testing and quality checks to ensure reliability and stability.',

    'Clear documentation to support future updates and maintenance.',
    'Optimized performance for faster load times and smooth operation.',

    'Support for future enhancements and feature expansion without major rework.'
  ];
}
