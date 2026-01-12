import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial, TESTIMONIALS_DATA } from './testimonial.models';


@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.html',
  styleUrls: ['./testimonial.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  
  testimonials: Testimonial[] = TESTIMONIALS_DATA;
  currentSlide: number = 0;
  autoPlay: boolean = true;
  autoPlayInterval: any;
  slideWidth: number = 0;
  
  // For touch/swipe support
  touchStartX: number = 0;
  touchEndX: number = 0;
  isDragging: boolean = false;
  startX: number = 0;
  currentTranslate: number = 0;
  prevTranslate: number = 0;
  animationID: number = 0;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngAfterViewInit(): void {
    this.calculateSlideWidth();
    this.setupSwipe();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  // Navigation Methods
  nextSlide(): void {
    if (this.currentSlide < this.testimonials.length - 1) {
      this.currentSlide++;
      this.updateSlider();
    } else {
      this.currentSlide = 0;
      this.updateSlider();
    }
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlider();
    } else {
      this.currentSlide = this.testimonials.length - 1;
      this.updateSlider();
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.updateSlider();
  }

  updateSlider(): void {
    // Animation is handled by CSS transition
  }

  // Auto-play Methods
  startAutoPlay(): void {
    if (this.autoPlay) {
      this.autoPlayInterval = setInterval(() => {
        this.nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  toggleAutoPlay(): void {
    this.autoPlay = !this.autoPlay;
    if (this.autoPlay) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }

  // Responsive Calculations
  calculateSlideWidth(): void {
    if (this.sliderTrack && this.sliderTrack.nativeElement) {
      const container = this.sliderTrack.nativeElement.parentElement;
      if (container) {
        this.slideWidth = container.offsetWidth;
      }
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateSlideWidth();
  }

  // Touch/Swipe Support
  setupSwipe(): void {
    const track = this.sliderTrack.nativeElement;
    
    track.addEventListener('touchstart', this.touchStart.bind(this));
    track.addEventListener('touchmove', this.touchMove.bind(this));
    track.addEventListener('touchend', this.touchEnd.bind(this));
    
    // Mouse events for desktop
    track.addEventListener('mousedown', this.mouseDown.bind(this));
    track.addEventListener('mousemove', this.mouseMove.bind(this));
    track.addEventListener('mouseup', this.mouseUp.bind(this));
    track.addEventListener('mouseleave', this.mouseLeave.bind(this));
  }

  touchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
    this.stopAutoPlay();
  }

  touchMove(event: TouchEvent): void {
    if (!this.touchStartX) return;
    this.touchEndX = event.touches[0].clientX;
    const diff = this.touchStartX - this.touchEndX;
    
    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next slide
        this.nextSlide();
      } else {
        // Swipe right - previous slide
        this.prevSlide();
      }
      this.touchStartX = 0;
    }
  }

  touchEnd(): void {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  // Mouse drag support
  mouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.startX = event.pageX;
    this.prevTranslate = this.currentTranslate;
    this.stopAutoPlay();
    event.preventDefault();
  }

  mouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    const currentX = event.pageX;
    const diff = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + diff;
    
    // Apply transform
    if (this.sliderTrack) {
      this.sliderTrack.nativeElement.style.transform = 
        `translateX(calc(-${this.currentSlide * 100}% + ${this.currentTranslate}px))`;
    }
  }

  mouseUp(): void {
    this.isDragging = false;
    const movedBy = this.currentTranslate - this.prevTranslate;
    
    // Threshold for slide change
    if (Math.abs(movedBy) > 100) {
      if (movedBy > 0 && this.currentSlide > 0) {
        this.prevSlide();
      } else if (movedBy < 0 && this.currentSlide < this.testimonials.length - 1) {
        this.nextSlide();
      }
    }
    
    // Reset transform
    if (this.sliderTrack) {
      this.sliderTrack.nativeElement.style.transform = 
        `translateX(-${this.currentSlide * 100}%)`;
    }
    
    this.currentTranslate = 0;
    this.prevTranslate = 0;
    
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  mouseLeave(): void {
    this.isDragging = false;
  }

  // Keyboard navigation
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch(event.key) {
      case 'ArrowLeft':
        this.prevSlide();
        break;
      case 'ArrowRight':
        this.nextSlide();
        break;
      case ' ':
        event.preventDefault();
        this.toggleAutoPlay();
        break;
    }
  }
}