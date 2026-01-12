
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronRight, X, MessageCircle, Mail, Youtube, Instagram } from 'lucide-angular';

@Component({
  selector: 'app-social-icons',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './social-icons.html',
  styleUrls: ['./social-icons.css']
})
export class SocialIcons {
  // Icon components for template
  chevronRightIcon = ChevronRight;
  xIcon = X;
  messageCircleIcon = MessageCircle;
  mailIcon = Mail;
  youtubeIcon = Youtube;
  instagramIcon = Instagram;

  isOpen = false;
  isAnimating = false;

  constructor() {
    // Close socials when clicking outside
    document.addEventListener('click', (event) => {
      const socialContainer = document.querySelector('.social-container');
      const toggleButton = document.querySelector('button[class*="rounded-l-3xl"]');

      if (this.isOpen &&
        socialContainer &&
        toggleButton &&
        !socialContainer.contains(event.target as Node) &&
        !toggleButton.contains(event.target as Node)) {
        this.closeSocials();
      }
    });
  }

  toggleSocials() {
    if (this.isAnimating) return;

    this.isAnimating = true;
    if (this.isOpen) {
      this.closeSocials();
    } else {
      this.openSocials();
    }

    // Reset animation flag after transition
    setTimeout(() => {
      this.isAnimating = false;
    }, 400); // Match CSS transition duration
  }

  openSocials() {
    this.isOpen = true;
  }

  closeSocials() {
    this.isOpen = false;
  }

  handleSocialClick() {
    // Add click animation and auto-close
    this.closeSocials();
  }

  // Fixed HostListener with proper typing
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isOpen) {
      this.closeSocials();
    }
  }
}