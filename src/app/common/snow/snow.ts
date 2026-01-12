
import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, OnInit, OnDestroy } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-snow',
  template: '',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
})
export class SnowComponent implements OnInit, OnDestroy {

  n = 10;
  flakes: Flake[] = [];
  score = new Score();
  interval: number | null = null;

  constructor(private elementRef: ElementRef) { }

  /* -------------------- LIFECYCLE -------------------- */

  ngOnInit(): void {
    if (this.isMobile()) {
      return; // ❌ No snow on mobile
    }
    this.build();
    this.run();
  }

  ngOnDestroy(): void {
    this.stop();
    this.clearSnow();
  }

  /* -------------------- HELPERS -------------------- */

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  getScreenSize(): { w: number; h: number } {
    return {
      w: window.innerWidth || document.documentElement.clientWidth,
      h: window.innerHeight || document.documentElement.clientHeight
    };
  }

  /* -------------------- BUILD -------------------- */

  build(): void {
    if (this.isMobile()) return;

    const { w, h } = this.getScreenSize();
    const snowContainer = this.elementRef.nativeElement;

    snowContainer.style.height = `${h}px`;

    for (let i = 0; i < this.n; i++) {
      const flake = new Flake();
      flake.setPosition(
        Math.random() * (w - 20),
        Math.random() * (h - 100)
      );

      this.flakes.push(flake);
      snowContainer.appendChild(flake.nativeElement);
    }
  }

  /* -------------------- ANIMATION -------------------- */

  run(): void {
    if (this.isMobile() || this.interval !== null) return;

    this.interval = window.setInterval(() => {
      const { w, h } = this.getScreenSize();

      this.flakes.forEach(flake => {
        const rect = flake.nativeElement.getBoundingClientRect();

        let y = rect.top + flake.my;
        let x = rect.left + flake.mx;

        if (y > h) y = 0;
        if (x < 0) x = w - 20;
        if (x > w - 20) x = 0;

        flake.setPosition(x, y);
      });
    }, 50);
  }

  stop(): void {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  clearSnow(): void {
    this.flakes.forEach(flake => flake.nativeElement.remove());
    this.flakes = [];
  }

  /* -------------------- RESIZE HANDLING -------------------- */

  @HostListener('window:resize')
  onResize(): void {
    if (this.isMobile()) {
      this.stop();
      this.clearSnow();
    } else if (this.flakes.length === 0) {
      this.build();
      this.run();
    }
  }
}

/* ===================== FLAKE CLASS ===================== */

class Flake {
  nativeElement: HTMLDivElement;
  mx = Math.random() > 0.5 ? 1 : -1;
  my = 1 + Math.random() * 2;

  constructor() {
    this.nativeElement = document.createElement('div');
    this.nativeElement.style.position = 'fixed';
    this.nativeElement.style.zIndex = '5000';
    this.nativeElement.style.pointerEvents = 'none';
    this.nativeElement.style.userSelect = 'none';
    this.nativeElement.style.fontSize = `${10 + Math.random() * 20}px`;
    this.nativeElement.style.color = '#99d6e9';
    this.nativeElement.innerHTML = '&#10052;';
  }

  setPosition(x: number, y: number): void {
    this.nativeElement.style.left = `${x}px`;
    this.nativeElement.style.top = `${y}px`;
  }
}

/* ===================== SCORE CLASS (OPTIONAL) ===================== */

class Score {
  nativeElement: HTMLDivElement;

  constructor() {
    this.nativeElement = document.createElement('div');
    this.nativeElement.style.position = 'fixed';
    this.nativeElement.style.top = '10px';
    this.nativeElement.style.left = '10px';
    this.nativeElement.style.fontSize = '24px';
    this.nativeElement.style.fontWeight = 'bold';
    this.nativeElement.style.zIndex = '5000';
  }

  disp(text: string): void {
    this.nativeElement.innerText = text;
  }
}
