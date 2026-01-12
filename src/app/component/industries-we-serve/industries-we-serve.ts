import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { industries } from './industries-we-servedata';

@Component({
  selector: 'app-industries-we-serve',
  imports: [CommonModule],
  templateUrl: './industries-we-serve.html',
  styleUrl: './industries-we-serve.css',
})
export class IndustriesWeServe implements OnInit {
  title: string = 'Industries We Serve';
  subtitle: string = 'Our experience spans multiple industries where technology plays a critical role.';
  note: string = 'We focus on understanding the business context before choosing any technology.';

  industries = industries
  constructor() {

  }

  ngOnInit(): void {

  }
}
