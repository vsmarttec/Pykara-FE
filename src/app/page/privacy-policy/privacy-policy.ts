
import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.css']
})
export class PrivacyPolicyComponent implements OnInit {
  sections = [
    {
      id: 'introduction',
      title: 'Introduction & Commitment',
      expanded: true,
      icon: '🛡️'
    },
    {
      id: 'collection',
      title: 'Information We Collect',
      expanded: false,
      icon: '📋'
    },
    {
      id: 'usage',
      title: 'How We Use Information',
      expanded: true,
      icon: '⚙️'
    },
    {
      id: 'sharing',
      title: 'Information Sharing',
      expanded: true,
      icon: '🤝'
    },
    {
      id: 'email',
      title: 'Email Communications',
      expanded: false,
      icon: '📧'
    },
    {
      id: 'social',
      title: 'Social Media',
      expanded: false,
      icon: '💬'
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      expanded: false,
      icon: '🍪'
    },
    {
      id: 'minors',
      title: 'Minors Policy',
      expanded: false,
      icon: '👶'
    },
    {
      id: 'security',
      title: 'Security Measures',
      expanded: false,
      icon: '🔒'
    },
    {
      id: 'rights',
      title: 'Your Rights',
      expanded: false,
      icon: '🎯'
    },
    {
      id: 'updates',
      title: 'Policy Updates',
      expanded: false,
      icon: '🔄'
    }
  ];

  showScrollButton = false;
  activeSection: string = 'introduction';

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
    this.updateActiveSection();
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  toggleSection(sectionId: string) {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      section.expanded = !section.expanded;
      if (section.expanded) {
        this.activeSection = sectionId;
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }

  expandAll() {
    this.sections.forEach(section => section.expanded = true);
  }

  collapseAll() {
    this.sections.forEach(section => section.expanded = false);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateActiveSection() {
    const sections = this.sections;
    const scrollPosition = window.pageYOffset + 100;

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section.id;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string) {
    this.activeSection = sectionId;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  printPage() {
    window.print();
  }
}