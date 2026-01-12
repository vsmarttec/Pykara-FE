
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-termsof-service',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl:'./termsof-service.html',
  styleUrls: ['./termsof-service.css']
})
export class TermsAndConditionsComponent implements OnInit {
  sections = [
    { id: 'terms', title: 'Terms of Use', expanded: true },
    { id: 'license', title: 'Use License', expanded: false },
    { id: 'disclaimer', title: 'Disclaimer', expanded: false },
    { id: 'limitations', title: 'Limitations', expanded: false },
    { id: 'revisions', title: 'Revisions and Errata', expanded: false },
    { id: 'links', title: 'Links', expanded: false },
    { id: 'modifications', title: 'Modifications', expanded: false },
    { id: 'governing', title: 'Governing Law', expanded: false }
  ];

  ngOnInit() {
    // Scroll to top when component loads
    window.scrollTo(0, 0);
  }

  toggleSection(sectionId: string) {
    const section = this.sections.find(s => s.id === sectionId);
    if (section) {
      section.expanded = !section.expanded;
    }
  }

  expandAll() {
    this.sections.forEach(section => section.expanded = true);
  }

  collapseAll() {
    this.sections.forEach(section => section.expanded = false);
  }
}