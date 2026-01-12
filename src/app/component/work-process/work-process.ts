
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WORK_PROCESS_DATA, WorkProcess } from './work-process.model';


@Component({
  selector: 'app-work-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-process.html',
  styleUrls: ['./work-process.css']
})
export class WorkProcessComponent implements OnInit {
  workProcesses: WorkProcess[] = [];

  ngOnInit(): void {
    // Sort by order and initialize
    this.workProcesses = [...WORK_PROCESS_DATA].sort((a, b) => a.order - b.order);
    
    // Add staggered animation delays
    this.workProcesses.forEach((process, index) => {
      process.animationDelay = `${index * 200}ms`;
    });
  }

  trackById(index: number, item: WorkProcess): string {
    return item.id;
  }
}