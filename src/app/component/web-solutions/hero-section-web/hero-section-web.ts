

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LayoutSample {
  image: string;
  title: string;
  category: string;
}

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits?: string[];
  process?: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  features?: Array<{
    title: string;
    items: string[];
  }>;
}

@Component({
  selector: 'app-hero-section-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section-web.html',
  styleUrls: ['./hero-section-web.css']
})
export class HeroSectionWeb implements OnInit {
  layoutSamples: LayoutSample[] = [
    { image: '/assets/we-solutions/Sample4-2.jpg', title: 'E-commerce Platform', category: 'Web Application' },
    { image: '/assets/we-solutions/Sample5-2.jpg', title: 'Learning Management', category: 'E-learning' },
    { image: '/assets/we-solutions/Sample6-1.jpg', title: 'Financial Dashboard', category: 'Fintech' },
    { image: '/assets/we-solutions/Sample7-1.jpg', title: 'Healthcare Portal', category: 'Healthcare' },
    { image: '/assets/we-solutions/Sample8-1.jpg', title: 'Real Estate Platform', category: 'Property Tech' },
    { image: '/assets/we-solutions/Sample9-1.jpg', title: 'AI Analytics Dashboard', category: 'AI/ML' },
    { image: '/assets/we-solutions/Sample10-1.jpg', title: 'CRM System', category: 'Business Software' },
    { image: '/assets/we-solutions/Sample11-1.jpg', title: 'Travel Booking', category: 'Travel Tech' }
  ];

  services: Service[] = [
    {
      id: 'custom-development',
      title: 'Custom Web Application Development',
      description: 'We design and build custom web applications aligned with your business processes and technical goals. Our team combines clear product advice with modern engineering (Angular, .NET Core, SQL Server, Azure) to deliver fast, reliable, and future-ready solutions. We focus on clean UX, responsive design, and performance so your site looks great and works smoothly on every device.',
      image: '/assets/we-solutions/unnamed.png',
      benefits: [
        'A scalable and secure web application built for long-term use.',
        'Clean, accessible user interface with strong performance.',
        'A collaborative development process with clear communication at every stage.'
      ],
      process: [
        { step: 1, title: 'Discovery & solutioning', description: 'We clarify goals, propose smart features, and agree success metrics.' },
        { step: 2, title: 'Design & prototype', description: 'UX flows and clickable mockups to confirm the experience early.' },
        { step: 3, title: 'Incremental development in short sprints', description: 'Regular demos, transparent progress, and rapid change handling.' },
        { step: 4, title: 'Quality by default', description: 'Code reviews, automated tests, and CI/CD for safe, frequent releases.' },
        { step: 5, title: 'Handover & support', description: 'Documentation, knowledge transfer, and optional ongoing maintenance.' }
      ]
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign & Modernization',
      description: 'We modernise legacy websites so they look current, load fast, and are easy to grow. Our team upgrades old stacks to Angular and .NET Core, improves UX, and adds new features while keeping your business online.',
      image: '/assets/we-solutions/Website-Redesign.png',
      benefits: [
        'A scalable and secure web application built for long-term use.',
        'Clean, accessible user interface with strong performance.',
        'A collaborative development process with clear communication at every stage.'
      ],
      process: [
        { step: 1, title: 'Discovery & solutioning', description: 'We clarify goals, propose smart features, and agree success metrics.' },
        { step: 2, title: 'Design & prototype', description: 'UX flows and clickable mockups to confirm the experience early.' },
        { step: 3, title: 'Incremental development in short sprints', description: 'Regular demos, transparent progress, and rapid change handling.' },
        { step: 4, title: 'Quality by default', description: 'Code reviews, automated tests, and CI/CD for safe, frequent releases.' },
        { step: 5, title: 'Handover & support', description: 'Documentation, knowledge transfer, and optional ongoing maintenance.' }
      ],
      features: [
        {
          title: 'What we deliver',
          items: [
            'UX/UI refresh with clear navigation, mobile-first layouts, and accessible design (WCAG-aligned).',
            'Technology upgrade to Angular, .NET 8 APIs, and SQL Server on Azure for security and scale.',
            'Performance tuning: Core Web Vitals, caching/CDN, image optimisation.',
            'SEO-safe migration: content mapping, 301 redirects, structured data, sitemaps.',
            'Data & content migration with validation and rollback plans.',
            'Security hardening: authentication, roles, secret management, and regular updates.',
            'Analytics & observability so you can measure conversions and user behaviour.'
          ]
        },
        {
          title: 'How we work',
          items: [
            'Audit → Plan: assess your current site, define goals, and agree success metrics.',
            'Design → Prototype: new information architecture and clickable mockups.',
            'Build → Test: short sprints, regular demos, automated tests, CI/CD.',
            'Go-live → Support: zero- or low-downtime release, monitoring, and optional SLA.'
          ]
        }
      ]
    },
    {
      id: 'maintenance-support',
      title: 'Website Maintenance & Support',
      description: 'We keep your existing website secure, fast, and available—whether it was built by us or another vendor. Our team works under a defined SLA and supports any mainstream stack and hosting (Azure, AWS, on-premises). We handle fixes, updates, monitoring, and enhancements so your site runs smoothly with minimal downtime.',
      image: '/assets/we-solutions/web-soluation.png',
          benefits: [
        'A scalable and secure web application built for long-term use.',
        'Clean, accessible user interface with strong performance.',
        'A collaborative development process with clear communication at every stage.'
      ],
      process: [
        { step: 1, title: 'Discovery & solutioning', description: 'We clarify goals, propose smart features, and agree success metrics.' },
        { step: 2, title: 'Design & prototype', description: 'UX flows and clickable mockups to confirm the experience early.' },
        { step: 3, title: 'Incremental development in short sprints', description: 'Regular demos, transparent progress, and rapid change handling.' },
        { step: 4, title: 'Quality by default', description: 'Code reviews, automated tests, and CI/CD for safe, frequent releases.' },
        { step: 5, title: 'Handover & support', description: 'Documentation, knowledge transfer, and optional ongoing maintenance.' }
      ],
      features: [
        {
          title: 'What we cover',
          items: [
            '24×7 monitoring & incident response with uptime alerts.',
            'Security hardening: patches, dependency upgrades, secret management, access reviews.',
            'Backups & recovery: scheduled backups, restore drills, and retention policies.',
            'Bug fixes & small changes via a ticket system and agreed change windows.',
            'Performance tuning: caching/CDN, image optimisation, Core Web Vitals.',
            'Content & CMS updates and UI polish for new campaigns.',
            'Database care: indexing, housekeeping, query tuning.',
            'SEO hygiene: sitemaps, redirects, structured data, broken-link checks.',
            'Analytics & reports: traffic, errors, page speed, and monthly health summary.',
            'Cloud & hosting management with cost optimisation and scaling guidance.'
          ]
        },
        {
          title: 'How it works',
          items: [
            'Onboarding audit → baseline health report and quick wins.',
            'SLA options (response/resolution targets) matched to business hours and time zones.',
            'Transparent workflow in your tools (Jira/Asana/Teams/Slack) and a named point of contact.'
          ]
        }
      ]
    }
  ];

  activeService = 'custom-development';

  constructor() { }

  ngOnInit(): void { }

  selectService(serviceId: string): void {
    this.activeService = serviceId;
  }

  contactUs(): void {
    alert('Redirecting to contact form...');
    // Implement navigation: this.router.navigate(['/contact']);
  }

  viewPortfolio(): void {
    alert('Opening portfolio gallery...');
    // Implement navigation: this.router.navigate(['/portfolio']);
  }
}