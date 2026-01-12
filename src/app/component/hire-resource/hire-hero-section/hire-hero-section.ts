
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dock, Goal, Lock, LucideAngularModule, ShieldCheck, UserRound, Zap } from 'lucide-angular';
import { EngagementModels } from '../engagement-models/engagement-models';

interface Benefit {
  id: number;
  icon?: string | any;
  title: string;
  description: string;
  features: string[];
  stats?: Array<{ value: string; label: string }>;
  theme: BenefitTheme;
}
type BenefitTheme = {
  cardHover: string;   // border + shadow hover colors
  iconBg: string;      // icon box gradient
  iconRing?: string;   // optional ring highlight on hover
};

interface FAQ {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-hire-hero-section',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, EngagementModels],
  templateUrl: './hire-hero-section.html',
  styleUrls: ['./hire-hero-section.css']
})
export class HireHeroSection implements OnInit {

  benefits: Benefit[] = [
    {
      id: 1,
      icon: UserRound,
      title: 'Expert Talent Pool',
      description: 'Our diverse team excels in various technologies and programming languages.',
      features: [
        'Access experienced developers and engineers across web, backend, cloud, and AI projects',
        'Senior-level developers & architects',
        'Full-stack, AI, and DevOps experts',
        'Continuously skilled development programs',
        'Ongoing skill development and training'
      ],
      stats: [
        { value: '50+', label: 'Technologies' },
        { value: '100+', label: 'Experts' }
      ],
      theme: {
        cardHover:
          'hover:border-blue-400 dark:hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-900/20',
        iconBg:
          'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30',
        iconRing: 'group-hover:ring-4 group-hover:ring-blue-500/10 dark:group-hover:ring-blue-400/10'
      }
    },
    {
      id: 2,
      icon: Dock,
      title: 'Cost-Effective',
      description: 'Save on in-house hiring costs with flexible, project-based engagements.',
      features: [
        'No recruitment fees or overhead costs',
        'Flexible engagement models',
        'Transparent pricing',
        'Pay only for what you need'
      ],
      stats: [
        { value: '40%', label: 'Flexible pricing' },
        { value: '0$', label: 'Transparent billing' }
      ],
      theme: {
        cardHover:
          'hover:border-emerald-400 dark:hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-900/20',
        iconBg:
          'bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30',
        iconRing: 'group-hover:ring-4 group-hover:ring-emerald-500/10 dark:group-hover:ring-emerald-400/10'
      }
    },
    {
      id: 3,
      icon: Zap,
      title: 'Faster Time-to-Market',
      description: 'Leverage our experience to accelerate development cycles.',
      features: [
        'Rapid onboarding process',
        'Agile development methodology',
        'Pre-built components & frameworks',
        'Continuous deployment pipelines'
      ],
      stats: [
        { value: '2x', label: 'Faster delivery cycles' },
        { value: '24/7', label: 'Time-zone friendly development' }
      ],
      theme: {
        cardHover:
          'hover:border-violet-400 dark:hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 dark:hover:shadow-violet-900/20',
        iconBg:
          'bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30',
        iconRing: 'group-hover:ring-4 group-hover:ring-violet-500/10 dark:group-hover:ring-violet-400/10'
      }
    },
    {
      id: 4,
      icon: Goal,
      title: 'Focus on Core Business',
      description: 'Outsourcing frees you to concentrate on strategy and customer engagement.',
      features: [
        'Work with our team so you can focus on business priorities',
        'More time for strategy and customer relationships',
        'Reduced management overhead',
        'Improved resource allocation',
        'Better ROI on core activities'
      ],
      theme: {
        cardHover:
          'hover:border-amber-400 dark:hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 dark:hover:shadow-amber-900/20',
        iconBg:
          'bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30',
        iconRing: 'group-hover:ring-4 group-hover:ring-amber-500/10 dark:group-hover:ring-amber-400/10'
      }
    },
    {
      id: 5,
      icon: ShieldCheck,
      title: 'Quality & Support',
      description: 'Rely on our stringent quality controls for a superior end product.',
      features: [
        'Comprehensive testing & QA',
        'Regular code reviews',
        '24/7 support & maintenance',
        'Performance optimization'
      ],
      stats: [{ value: '<24h', label: 'Response Time' }],
      theme: {
        cardHover:
          'hover:border-rose-400 dark:hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 dark:hover:shadow-rose-900/20',
        iconBg:
          'bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30',
        iconRing: 'group-hover:ring-4 group-hover:ring-rose-500/10 dark:group-hover:ring-rose-400/10'
      }
    },
    {
      id: 6,
      icon: Lock,
      title: 'IP Protection',
      description: 'We ensure confidentiality with strict adherence to NDAs.',
      features: [
        'Secure development environment',
        'Regular security audits',
        'Data protection compliance',
        'Confidentiality agreements'
      ],
      theme: {
        cardHover:
          'hover:border-cyan-400 dark:hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-cyan-900/20',
        iconBg:
          'bg-gradient-to-br from-cyan-100 to-sky-100 dark:from-cyan-900/30 dark:to-sky-900/30',
        iconRing: 'group-hover:ring-4 group-hover:ring-cyan-500/10 dark:group-hover:ring-cyan-400/10'
      }
    }
  ];

  faqs: FAQ[] = [
    {
      question: 'What hiring models do you offer?',
      answer: 'Dedicated developers, dedicated teams, fixed-scope delivery, and ongoing support models.',
      open: false
    },
    {
      question: 'How quickly can we onboard developers?',
      answer: 'Onboarding typically starts after requirements confirmation and interview completion, if required.',
      open: false
    },
    {
      question: 'Do you provide support after development?',
      answer: 'Yes. We offer maintenance, improvements, and long-term support.',
      open: false
    },
    {
      question: 'How do you ensure code quality?',
      answer: 'Code reviews, defined standards, testing support, and regular progress reviews.',
      open: false
    },
    {
      question: 'What technologies do your developers specialize in?',
      answer: 'Web, backend, cloud, and AI technologies, selected based on project needs.',
      open: false
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  toggleFAQ(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

  openContactForm(): void {
    // Implement contact form modal or navigation
    alert('Contact form will open shortly');
    // You can implement a modal or navigate to contact page
  }

  downloadBrochure(): void {
    // Implement brochure download
    const link = document.createElement('a');
    link.href = '/assets/brochures/hire-resources.pdf';
    link.download = 'Pykara-Hire-Resources-Brochure.pdf';
    link.click();
  }
}