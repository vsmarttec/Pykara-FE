
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, HostListener, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SnowComponent } from '../../common/snow/snow';

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule,RouterLink,SnowComponent],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSliderComponent implements OnDestroy {
  private isBrowser: boolean;
  private moveListeners: any[] = [];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  // Optional: Remove or modify mouse move effect if it's causing issues
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isBrowser) {
      requestAnimationFrame(() => {
        const elements = document.querySelectorAll('.bg-element');
        const x = (event.clientX / window.innerWidth) * 10;
        const y = (event.clientY / window.innerHeight) * 10;

        elements.forEach((el: any) => {
          el.style.transform = `translate(${x}px, ${y}px)`;
        });
      });
    }
  }

  ngOnDestroy() {
    // Clean up any event listeners
    this.moveListeners.forEach(cleanup => cleanup?.());
  }
}