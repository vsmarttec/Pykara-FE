import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Info, LogIn, LucideAngularModule, Play, PlayCircle, Zap } from 'lucide-angular';
import { WelcomePykaraData } from './welcomepykara';

declare var Swiper: any;

type ProductBlock = {
  id: string;
  image: { src: string; alt: string };
  href?: string
};

@Component({
  selector: 'app-welcome-pykara',
  standalone: true,
  imports: [CommonModule, HttpClientModule, LucideAngularModule],
  templateUrl: './welcome-pykara.html',
  styleUrl: "./welcome-pykara.css"
})
export class WelcomePykara implements AfterViewInit {
  @ViewChild('prevBtn', { static: true }) prevBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextBtn', { static: true }) nextBtn!: ElementRef<HTMLButtonElement>;

  info = Info
  play = Play
  playcircle = PlayCircle
  zap = Zap
  products: any[] = WelcomePykaraData|| [];
  swiperInstance: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.products, "products")


    // this.http.get<ProductBlock[]>('/json_files/pykaraTechnologies.json')
    //   .subscribe(data => (this.products = data));

  }



  ngAfterViewInit() {
    this.swiperInstance = new Swiper('.mySwiper', {
      slidesPerView: 2.5,
      spaceBetween: 24,
      loop: false,
      freeMode: true,
     
      navigation: {
        nextEl: this.nextBtn.nativeElement,
        prevEl: this.prevBtn.nativeElement,
      },
      on: {
        slideChange: () => this.updateButtonState(),
        resize: () => this.updateButtonState(),
      },

      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 24,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });

    this.updateButtonState();
  }


  updateButtonState() {

    const { activeIndex, slides } = this.swiperInstance;
    // disable prev at index 0
    this.prevBtn.nativeElement.disabled = activeIndex === 0;
    // disable next at last index
    this.nextBtn.nativeElement.disabled = activeIndex >= slides.length - 1;
  }
}
