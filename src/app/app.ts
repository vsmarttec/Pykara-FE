import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule,FormsModule,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pykara-web');


}
