import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

import { LucideAngularModule, Home } from 'lucide-angular';

type Crumb = { label: string; url: string; isHome?: boolean };

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './breadcrumbs.html'
})
export class BreadcrumbsComponent {
  breadcrumbs: Crumb[] = [];


  // icon reference
  readonly HomeIcon = Home;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => (this.breadcrumbs = this.buildBreadcrumbs(this.route.root)));

    this.breadcrumbs = this.buildBreadcrumbs(this.route.root);
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', crumbs: Crumb[] = []): Crumb[] {
    const children = route.children;
    console.log(children, "routeURL")
    if (!children || children.length === 0) return crumbs;

    for (const child of children) {
      const routeURL = child.snapshot.url.map(s => s.path).join('/');

      const nextUrl = routeURL ? `${url}/${routeURL}` : url;
      // const label = child.snapshot.routeConfig?.children as string | undefined;
      const label = nextUrl.split("/")[1];
      console.log(nextUrl.split("/")[1], "child")


      if (label) {
        crumbs.push({
          label: nextUrl,
          url: nextUrl || '/',
          isHome: nextUrl === '' || nextUrl === '/' || label.toLowerCase() === 'home'
        });
      }

      return this.buildBreadcrumbs(child, nextUrl, crumbs);
    }

    return crumbs;
  }
}
