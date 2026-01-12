import { Component, OnInit } from '@angular/core';
import { clientSegmentsdata } from './client-segmentsData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-segments',
  imports: [CommonModule],
  templateUrl: './client-segments.html',
  styleUrl: './client-segments.css',
})
export class ClientSegments implements OnInit {
  title: string = 'Who We Work With';
  subtitle: string = 'We work with organizations that value long-term technology partnerships and clear delivery.';
  note: string = 'We adapt our approach based on your size, goals, and technical maturity.';


  clientSegments = clientSegmentsdata

   constructor() { }

  ngOnInit(): void {
  }
}
