import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import {
  LucideAngularModule,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Globe,
  Shield,
  Zap,
  Users,
  Home,
  Briefcase,
  Code,
  MessageCircle,
  FileText,
  Facebook,
  MailIcon
} from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {
  // Lucide Icons
  twitterIcon = Twitter;
  githubIcon = Github;
  linkedinIcon = Linkedin;
  mailIcon = Mail;
  phoneIcon = Phone;
  mapPinIcon = MapPin;
  chevronRightIcon = ChevronRight;
  globeIcon = Globe;
  shieldIcon = Shield;
  zapIcon = Zap;
  usersIcon = Users;
  homeIcon = Home;
  briefcaseIcon = Briefcase;
  codeIcon = Code;
  messageCircleIcon = MessageCircle;
  fileTextIcon = FileText;
  facebook = Facebook
  mail = MailIcon
  // scrollbar = window.scrollY(0.)
  // Quick Links
  quickLinks = [
    { name: 'Home', url: '/', icon: this.homeIcon },
    { name: 'Ai solutions', url: '/ai-solution', icon: this.briefcaseIcon },
    { name: 'Portfolio', url: '/portfolio', icon: this.codeIcon },
    { name: 'Hire resource', url: '/hire-resource', icon: this.usersIcon },
    { name: 'Contact', url: '/contact-us', icon: this.messageCircleIcon },
    // { name: 'Blog', url: '#blog', icon: this.fileTextIcon }
  ];

  // Technologies
  technologies = [
    { name: 'Angular', color: 'text-red-400' },
    { name: 'React', color: 'text-cyan-400' },
    { name: '.NET', color: 'text-purple-400' },
    { name: 'Azure', color: 'text-blue-400' },
    { name: 'AI/ML', color: 'text-green-400' }
  ];


  showButton = false;
  ngOnInit(): void { }

  constructor(private scroller: ViewportScroller) { }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const [, y] = this.scroller.getScrollPosition();
    this.showButton = y > 200; // show after scrolling 200px
  }


  scrollToTop(): void {
    // Scrolls to the position [x, y] = [0, 0]
    this.scroller.scrollToPosition([0, 0]);
  }

  // Get current year
  get currentYear(): number {
    return new Date().getFullYear();
  }
}