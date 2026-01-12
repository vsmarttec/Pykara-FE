import { Component } from '@angular/core';
import { Header } from '../../../common/header/header';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../common/footer/footer';
import { SocialIcons } from '../../../common/social-icons/social-icons';


@Component({
  selector: 'app-main-layout',
  imports: [Header, RouterOutlet, FooterComponent, SocialIcons],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
