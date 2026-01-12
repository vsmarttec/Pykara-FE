import { Component, OnInit } from '@angular/core';
import { WelcomePykaraData } from '../../../component/welcome-pykara/welcomepykara';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArrowBigDown, ArrowBigUp, Link, LucideAngularModule } from 'lucide-angular';
import { TechStackFlow } from '../tech-stack-flow/tech-stack-flow';

export interface GalleryImage {
  src: string;
  alt: string;
}
@Component({
  standalone: true,
  imports: [CommonModule, HttpClientModule, LucideAngularModule, TechStackFlow],
  selector: 'app-portfolio-dynamic',
  templateUrl: './portfolio-dynamic.html',
  styleUrl: './portfolio-dynamic.css',
})

export class PortfolioDynamic implements OnInit {

  portfoliodetails = WelcomePykaraData;
  slicedPortfolio = []


  arrowdown = ArrowBigDown
  arrowtop = ArrowBigUp


  selectedPortfolio: any;
  location!: string;
  link = Link

  images: GalleryImage[] = [
    { src: '/assets/portfolio-dy/PyTrade-dy.png', alt: 'Product view 1' },
    { src: '/assets/portfolio-dy/PyTrade-dy.png', alt: 'Product view 2' },
    { src: '/assets/portfolio-dy/PyTrade-dy.png', alt: 'Product view 3' },
    { src: '/assets/portfolio-dy/PyTrade-dy.png', alt: 'Product view 4' },
    { src: '/assets/portfolio-dy/PyTrade-dy.png', alt: 'Product view 5' }
  ];

  selectedIndex = 0;

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  scroll(direction: 'up' | 'down') {
    if (direction === 'up' && this.selectedIndex > 0) {
      this.selectedIndex--;
    }
    if (direction === 'down' && this.selectedIndex < this.selectedPortfolio.images.length - 1) {
      this.selectedIndex++;
    }
  }

  log(value: any) {
    console.log(value, "values!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  }
  ngOnInit() {
    this.location = window.location.pathname.split('/')[2];

    this.selectedPortfolio = this.portfoliodetails.find(
      item => item.slug === this.location
    );

    console.log('Location:', this.location);
    console.log('Selected Data:', this.selectedPortfolio);

  }

  SliceData() {
    if (this.selectedPortfolio.teacherFeatures.length > 0) {

      this.slicedPortfolio = this?.selectedPortfolio?.teacherFeatures.slice(0, 5)
      console.log(this.slicedPortfolio, "slicedPortfolio")
    }
  }
}
