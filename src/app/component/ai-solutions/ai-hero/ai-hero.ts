
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AISolution {
  mainImage: string;
  altText: string;
  stats: {
    implementationDays: number;
    accuracy: number;
  };
}

interface Capability {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface ProcessStep {
  title: string;
  description: string;
}

@Component({
  selector: 'app-ai-hero',
  standalone: true,
  imports: [CommonModule],
    templateUrl: './ai-hero.html',
  styleUrl: './ai-hero.css',
})
export class AiHero implements OnInit {
  aiSolutions: AISolution = {
    mainImage: '/assets/ai-solutions/Machine-Learning .png', // Replace with your image path
    altText: 'AI and Machine Learning Solutions',
    stats: {
      implementationDays: 30,
      accuracy: 95
    }
  };

  capabilities: Capability[] = [
    {
      icon: '📊',
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions',
      features: [
        'Demand forecasting',
        'Customer behavior prediction',
        'Risk assessment models',
        'Revenue optimization'
      ]
    },
    {
      icon: '💬',
      title: 'NLP & Chatbots',
      description: 'Intelligent conversation and text analysis',
      features: [
        'Sentiment analysis',
        'Chatbot development',
        'Text classification',
        'Language translation'
      ]
    },
    {
      icon: '👁️',
      title: 'Computer Vision',
      description: 'Image and video analysis for automation',
      features: [
        'Object detection',
        'Facial recognition',
        'Quality inspection',
        'Document analysis'
      ]
    },
    {
      icon: '🤖',
      title: 'Process Automation Solutions',
      description: 'Intelligent process automation and optimization',
      features: [
        'Workflow automation',
        'Anomaly detection',
        'Recommendation engines',
        'Process optimization'
      ]
    }
  ];

  processSteps: ProcessStep[] = [
    {
      title: 'Discovery & Assessment',
      description: 'Understand your business needs and data landscape'
    },
    {
      title: 'Data Preparation',
      description: 'Clean, label, and prepare data for ML models'
    },
    {
      title: 'Model Development',
      description: 'Build, train, and validate models'
    },
    {
      title: 'Deployment & Integration',
      description: 'Deploy models to production and integrate with systems'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  learnMore(): void {
    // Implement navigation or modal for more information
    alert('Redirecting to detailed AI solutions page');
    // You can implement navigation: this.router.navigate(['/ai-solutions']);
  }
}