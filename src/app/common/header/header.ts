
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavChild {
  name: string;
  href: string;
  isActive?: boolean;
}

interface DropdownItem {
  name: string;
  href?: string;
  icon: boolean;
  children?: NavChild[];
  isActive?: boolean;
}

interface NavItem {
  name: string;
  href?: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
  isActive?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit {

  isMobileMenuOpen = false;
  isAiDropdownOpen = false;
  isAiDropdownOpenMobile = false;
  allPoc = false;
  isScrolled = false;
  currentRoute: string = '';

  constructor(
    private router: Router,
    private scroller: ViewportScroller,
    private elementRef: ElementRef
  ) {
    // Track route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects || event.url;
      this.updateActiveStates();
    });
  }

  ngOnInit() {
    this.currentRoute = this.router.url;
    this.updateActiveStates();
  }

  Navitems: NavItem[] = [
    {
      name: 'Web solutions',
      href: '/web-solutions',
      hasDropdown: false,
      isActive: false
    },
    {
      name: 'AI',
      hasDropdown: true,
      isActive: false,
      dropdownItems: [
        { name: 'AI Solution', href: '/ai-solution', icon: false, isActive: false },
        {
          name: 'ALL POC',
          icon: true,
          isActive: false,
          children: [
            { name: 'Py-Learn', href: '/portfolio/py-learn', isActive: false },
            { name: 'Py-Trade', href: '/portfolio/py-trade', isActive: false },
            { name: 'Py-Match', href: '/portfolio/py-match', isActive: false },
            { name: 'Py-Detect', href: '/portfolio/py-detect', isActive: false }
          ]
        }
      ]
    },
    {
      name: 'Hire resource',
      href: '/hire-resource',
      hasDropdown: false,
      isActive: false
    },
    {
      name: 'Portfolio',
      href: '/portfolio',
      hasDropdown: false,
      isActive: false
    }
  ];

  updateActiveStates(): void {
    // Reset all active states
    this.Navitems.forEach(item => {
      item.isActive = false;

      if (item.hasDropdown && item.dropdownItems) {
        item.dropdownItems.forEach(dropdown => {
          dropdown.isActive = false;

          if (dropdown.children) {
            dropdown.children.forEach(child => {
              child.isActive = false;
            });
          }
        });
      }
    });

    // Set active states based on current route
    this.Navitems.forEach(item => {
      // Check main nav items
      if (item.href && this.currentRoute === item.href) {
        item.isActive = true;
      }

      // Check dropdown items and their children
      if (item.hasDropdown && item.dropdownItems) {
        item.dropdownItems.forEach(dropdown => {
          if (dropdown.href && this.currentRoute === dropdown.href) {
            dropdown.isActive = true;
            item.isActive = true;
          }

          if (dropdown.children) {
            dropdown.children.forEach(child => {
              if (this.currentRoute === child.href) {
                child.isActive = true;
                dropdown.isActive = true;
                item.isActive = true;
              }
            });
          }
        });
      }
    });
  }

  isRouteActive(href: string | undefined): boolean {
    if (!href) return false;

    // Check exact match
    if (this.currentRoute === href) return true;

    // Check for parent routes
    if (href === '/portfolio' && this.currentRoute.startsWith('/portfolio/')) {
      return true;
    }

    return false;
  }

  @HostListener('document:click', ['$event'])
  closeAll(event?: MouseEvent): void {
    // Don't close if click is inside the header
    if (event && this.elementRef.nativeElement.contains(event.target)) {
      return;
    }

    // Always close dropdowns when clicking outside
    this.isAiDropdownOpen = false;
    this.isAiDropdownOpenMobile = false;
    this.isMobileMenuOpen = false;
    this.allPoc = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // Close mobile dropdowns on desktop
    if (window.innerWidth >= 640) {
      this.isMobileMenuOpen = false;
      this.isAiDropdownOpenMobile = false;
    }
  }

  toggleAiDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.isAiDropdownOpen = !this.isAiDropdownOpen;

    // If we're opening the dropdown and on an AI page, also open POC if needed
    if (this.isAiDropdownOpen) {
      const aiNavItem = this.Navitems.find(item => item.name === 'AI');
      if (aiNavItem && aiNavItem.isActive) {
        this.allPoc = this.currentRoute.includes('/portfolio/py-');
      }
    } else {
      this.allPoc = false;
    }

    // Close mobile dropdown if desktop is opened
    this.isAiDropdownOpenMobile = false;
  }

  toggleAiDropdownMobile(event: MouseEvent): void {
    event.stopPropagation();
    this.isAiDropdownOpenMobile = !this.isAiDropdownOpenMobile;

    // If we're opening the dropdown and on an AI page, also open POC if needed
    if (this.isAiDropdownOpenMobile) {
      const aiNavItem = this.Navitems.find(item => item.name === 'AI');
      if (aiNavItem && aiNavItem.isActive) {
        this.allPoc = this.currentRoute.includes('/portfolio/py-');
      }
    } else {
      this.allPoc = false;
    }

    // Close desktop dropdown if mobile is opened
    this.isAiDropdownOpen = false;
  }

  togglePocDropdown(event: MouseEvent): void {
    event.stopPropagation();
    this.allPoc = !this.allPoc;
  }

  toggleMobileMenu(event: MouseEvent): void {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.isAiDropdownOpenMobile = false;
    this.allPoc = false;

    // Close desktop dropdown when mobile menu opens
    this.isAiDropdownOpen = false;
  }

  navigateTo(href: string | undefined, event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }

    // Check if href is defined
    if (!href) {
      console.error('Navigation href is undefined');
      return;
    }

    this.closeAll();
    this.router.navigateByUrl(href).then(() => {
      this.scroller.scrollToPosition([0, 0]);
    });
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}