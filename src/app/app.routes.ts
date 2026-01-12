
import { Routes } from '@angular/router';

import { MainLayout } from './core/layouts/main-layout/main-layout';
import { MainHome } from './component/main-home/main-home';
import { WebSolutions } from './page/web-solutions/web-solutions';
import { ContactUs } from './page/contact-us/contact-us';
import { HireResource } from './page/hire-resource/hire-resource';
import { AiSolutions } from './page/ai-solutions/ai-solutions';
import { Portfolio } from './page/portfolio/portfolio';
import { PageNotFound } from './page-not-found/page-not-found';
import { TermsAndConditionsComponent } from './page/termsof-service/termsof-service';
import { PrivacyPolicyComponent } from './page/privacy-policy/privacy-policy';
import { PortfolioDynamic } from './page/portfolio/portfolio-dynamic/portfolio-dynamic';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: MainHome,       // ✅ Home page
            },
            {
                path: 'web-solutions',
                component: WebSolutions,
            },
            {
                path: 'contact-us',
                component: ContactUs,
            },
            {
                path: 'hire-resource',
                component: HireResource,
            },
            {
                path: 'ai-solution',
                component: AiSolutions,
            },
            {
                path: 'portfolio',
                component: Portfolio,
            },
            {
                path: 'portfolio/:id',
                component: PortfolioDynamic,
            },
           

        ],
    },
    {
        path: 'terms',
        component: TermsAndConditionsComponent,
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
    },
    // ✅ Optional: redirect unknown routes to Home
    {
        path: '**',
        component: PageNotFound,
    },
];
