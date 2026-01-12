

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

type TechStackCategory = {
  id: string;
  category: string;
  items: string[];
};

@Component({
  selector: 'app-our-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-tech-stack.html',
  styleUrls: ['./our-tech-stack.css']
})
export class OurTechStackComponent implements OnInit {

  OurTechStack: TechStackCategory[] = [];

  loading = false;
  errorMsg = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.reload(); // first load
  }

  reload(): void {
    this.loading = true;
    this.errorMsg = '';

    this.http.get<TechStackCategory[]>('/json_files/our-tech-stack.json').subscribe({
      next: (data) => {
        this.OurTechStack = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load tech stack:', err);
        this.errorMsg = 'Failed to load tech stack. Please try again.';
        this.loading = false;
      }
    });
  }

  trackById(index: number, item: TechStackCategory): string {
    return item.id || index.toString();
  }

  extractTags(item: string): string[] {
    const tags: string[] = [];
    if (item.includes('Azure')) tags.push('Azure');
    if (item.includes('OpenAI')) tags.push('AI');
    if (item.includes('Angular')) tags.push('Angular');
    if (item.includes('.NET')) tags.push('.NET');
    if (item.includes('SQL')) tags.push('Database');
    if (item.includes('Docker')) tags.push('Container');
    if (item.includes('CI/CD')) tags.push('DevOps');
    if (item.includes('Security')) tags.push('Security');
    if (item.includes('REST') || item.includes('GraphQL')) tags.push('API');
    return tags.slice(0, 3);
  }
}
