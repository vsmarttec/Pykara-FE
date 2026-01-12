
import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';

/* 🔹 Lucide Icons (ONLY ADDITION) */
import {
  Bot,
  Globe,
  Cloud,
  Shield,
  MessageSquare,
  Database,
  Mic,
  Settings,
  Terminal,
  Box,
  RefreshCw,
  LineChart,
  TestTube,
  Lock,
  ClipboardCheck,
  History,
  Circle,
  LucideAngularModule
} from 'lucide-angular';

interface TechCard {
  id: string;
  title: string;
  color: 'teal' | 'blue' | 'purple' | 'red';
  icon: string;
  technologies: string[];
  position: Record<string, string>;
  active: boolean;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-ai-flow',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
    /* 🔹 Lucide Icons */

  ],
  templateUrl: './ai-flow.html',
  styleUrls: ['./ai-flow.css'],
})
export class AiFlow implements OnInit, AfterViewInit, OnDestroy {
  Bot = Bot;
  Globe = Globe;
  Cloud = Cloud;
  Shield = Shield;
  MessageSquare = MessageSquare;
  Database = Database;
  Mic = Mic;
  Settings = Settings;
  Terminal = Terminal;
  Box = Box;
  RefreshCw = RefreshCw;
  LineChart = LineChart;
  TestTube = TestTube;
  Lock = Lock;
  ClipboardCheck = ClipboardCheck;
  History = History;
  Circle = Circle
  @ViewChild('centerCore') centerCore!: ElementRef;
  @ViewChild('flowLines') flowLines!: ElementRef;

  isAnimating = true;
  activeCardId: string = 'aiData';

  autoRotateEnabled = true;
  private rotateIntervalId: any;


  techCards: TechCard[] = [
    {
      id: 'aiData',
      title: 'AI & Data',
      color: 'teal',
      icon: 'robot',
      technologies: ['OpenAI / RAG', 'Vector DBs', 'Speech AI', 'ML Pipelines', 'Prompt Management'],
      position: { top: '120px', right: '120px' },
      description: `
We design and implement AI-first architectures across all our PoC and production-grade applications.
Our AI & Data layer focuses on building intelligent systems that can understand, reason, and respond
using modern large language models and structured data pipelines.
`,
      highlights: [
        'Retrieval-Augmented Generation (RAG) for contextual AI responses',
        'Vector databases for semantic search and knowledge retrieval',
        'Speech and pronunciation AI for learning platforms',
        'Custom ML pipelines for scoring, prediction, and analysis',
        'Prompt lifecycle management for consistency and safety'
      ],
      active: true,
    },
    {
      id: 'webApis',
      title: 'Web & APIs',
      color: 'blue',
      icon: 'globe',
      technologies: ['Angular', '.NET 8', 'SQL / Redis', 'Auth', 'Async Processing'],
      position: { top: '50%', right: '80px', transform: 'translateY(-50%)' },
      active: false,
      description: `
Our Web & API layer acts as the backbone for all user-facing and system-to-system communication.
We build scalable, secure, and high-performance APIs that power dashboards, AI workflows,
and real-time applications.
`,
      highlights: [
        'Angular-based enterprise dashboards and learning platforms',
        '.NET-based APIs for business logic and AI orchestration',
        'SQL and Redis for transactional and high-speed data access',
        'Authentication and role-based authorization',
        'Asynchronous processing for long-running AI tasks'
      ],
    },
    {
      id: 'cloudDevops',
      title: 'Cloud & DevOps',
      color: 'purple',
      icon: 'cloud',
      technologies: ['Azure Cloud', 'Containers', 'CI/CD', 'Monitoring', 'Testing'],
      position: { bottom: '120px', left: '50%', transform: 'translateX(-50%)' },
      active: false,
      description: `
Our Cloud & DevOps practices ensure that every PoC can scale into a reliable production system.
We focus on automation, observability, and controlled deployments across cloud environments.
`,
      highlights: [
        'Azure cloud infrastructure for AI and web workloads',
        'Containerized deployments for consistency across environments',
        'CI/CD pipelines for rapid and safe releases',
        'Monitoring and logging for AI and application health',
        'Automated testing and environment validation'
      ]
    },
    {
      id: 'security',
      title: 'Security',
      color: 'red',
      icon: 'shield-alt',
      technologies: ['Access Control', 'Compliance', 'Security Controls', 'Auditing'],
      position: { top: '50%', left: '80px', transform: 'translateY(-50%)' },
      active: false,
      description: `
Security is embedded into every layer of our architecture.
We ensure that data, models, and user interactions are protected
through strong governance and compliance-driven design.
`,
      highlights: [
        'Access control and role-based permissions',
        'Compliance-oriented system design',
        'Secure API and data handling practices',
        'Audit trails for sensitive AI workflows',
        'Continuous security review and hardening'
      ]
    },
  ];

  selectedSection: TechCard | null = this.techCards[0];

  ngOnInit(): void {
    this.rotateIntervalId = setInterval(() => this.rotateCards(), 10000);
  }

  ngAfterViewInit(): void {
    this.activateCard('aiData');
  }

  ngOnDestroy(): void {
    if (this.rotateIntervalId) clearInterval(this.rotateIntervalId);
  }

  activateCard(cardId: string): void {
    this.autoRotateEnabled = true;
    this.techCards.forEach(card => card.active = card.id === cardId);
    this.activeCardId = cardId;
    this.highlightFlowLines(cardId);
  }

  showAllCards(): void {
    this.autoRotateEnabled = false;
    this.techCards.forEach(card => card.active = false);
    this.activeCardId = '';
    this.resetFlowLines();
  }

  rotateCards(): void {
    if (!this.autoRotateEnabled) return;

    if (!this.activeCardId) {
      this.activateCard('aiData');
      return;
    }

    const order = ['aiData', 'webApis', 'cloudDevops', 'security'];
    const i = order.indexOf(this.activeCardId);
    this.activateCard(order[(i + 1) % order.length]);
  }

  highlightFlowLines(cardId: string): void {
    const lines = this.flowLines.nativeElement.querySelectorAll('.flow-line');
    lines.forEach((l: any) => {
      l.style.strokeWidth = '2';
      l.style.opacity = '0.6';
    });

    const id =
      `flow-path-${cardId === 'aiData' ? 'ai' :
        cardId === 'webApis' ? 'web' :
          cardId === 'cloudDevops' ? 'cloud' : 'security'}`;

    const active = this.flowLines.nativeElement.querySelector(`#${id}`);
    if (active) {
      active.style.strokeWidth = '4';
      active.style.opacity = '1';
    }
  }

  resetFlowLines(): void {
    const lines = this.flowLines.nativeElement.querySelectorAll('.flow-line');
    lines.forEach((l: any) => {
      l.style.strokeWidth = '3';
      l.style.opacity = '1';
    });
  }

  selectSection(cardId: string): void {
    console.log(cardId, ":CArdID")
    const found = this.techCards.find(c => c.id === cardId);
    if (found) {
      this.selectedSection = found;
    }
  }
  /* 🔹 ICON MAPPING (ONLY CHANGE) */
  getIconClass(icon: string) {
    const map: any = {
      robot: Bot,
      globe: Globe,
      cloud: Cloud,
      'shield-alt': Shield,
      'comment-dots': MessageSquare,
      database: Database,
      microphone: Mic,
      cogs: Settings,
      terminal: Terminal,
      angular: Circle,
      microsoft: Circle,
      'user-shield': Shield,
      'exchange-alt': RefreshCw,
      box: Box,
      'sync-alt': RefreshCw,
      'chart-line': LineChart,
      vial: TestTube,
      lock: Lock,
      'clipboard-check': ClipboardCheck,
      history: History
    };
    return map[icon] || Circle;
  }

  getCardClasses(card: TechCard): string {
    const map: any = {
      teal: 'bg-gradient-to-br from-teal-900/90 to-teal-800/90 border-2 border-teal-600',
      blue: 'bg-gradient-to-br from-blue-900/90 to-blue-800/90 border-2 border-blue-600',
      purple: 'bg-gradient-to-br from-purple-900/90 to-purple-800/90 border-2 border-purple-600',
      red: 'bg-gradient-to-br from-red-900/90 to-red-800/90 border-2 border-red-600',
    };
    return map[card.color];
  }

  getIconBgClass(card: TechCard): string {
    const map: any = {
      teal: 'bg-teal-600',
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      red: 'bg-red-600',
    };
    return map[card.color];
  }
}
