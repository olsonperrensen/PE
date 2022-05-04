import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ErrorComponent } from './error/error.component';
import { FaqComponent } from './faq/faq.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { PricingComponent } from './pricing/pricing.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SignupComponent } from './signup/signup.component';
import { TableFilteringComponent } from './table-filtering/table-filtering.component';
import { TableGuardServiceGuard } from './table-guard-service.guard';
import { TableComponent } from './table/table.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { TOSComponent } from './tos/tos.component';
import { CookieDetailsComponent } from './cookie-details/cookie-details.component';
import { ErrorPermissionComponent } from './error-permission/error-permission.component';
import { TraintypeComponent } from './traintype/traintype.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { HelpContactComponent } from './help-contact/help-contact.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

const appRoutes: Routes = [
  { path: '', component:  DatepickerComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home\t/',
        url: '/'
      }
    ]
  },},
  { path: 'train-type', component:  TraintypeComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Train type',
        url: '/train-type'
      }
    ]
  },},
  { path: 'features', component:  FeaturesComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Features',
        url: '/features'
      }
    ]
  },},
  { path: 'pricing', component:  PricingComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Pricing',
        url: '/pricing'
      }
    ]
  },},{ path: 'help-contact', component:  HelpContactComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Help & Contact',
        url: '/help-contact'
      }
    ]
  },},
  { path: 'faq', component:  FaqComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'F.A.Q.',
        url: '/faq'
      }
    ]
  },},
  { path: 'about-us', component:  AboutUsComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'About Us',
        url: '/about-us'
      }
    ]
  },},
  { path: 'error', component:  ErrorComponent,
  data: {
    breadcrumb: [
      {
        label: '404',
        url: '/error'
      }]
  },},
  { path: 'login', component:  LoginComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Log in',
        url: '/login'
      }
    ]
  },},
  { path: 'signup', component:  SignupComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Sign up',
        url: '/signup'
      }
    ]
  },},
  { path: 'table-filtering', component:  TableFilteringComponent},
  { path: 'admin', redirectTo: '/table-filtering'},
  { path: 'TOS', component:  TOSComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {label:'Sign up',url:'/signup'},
      {
        label: 'Terms of Service',
        url: '/tos'
      }
    ]
  },},
  { path: 'privacy-policy', component:  PrivacyPolicyComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {label:'Sign up',url:'/signup'},
      {
        label: 'Privacy Policy',
        url: '/privacy-policy'
      }
    ]
  },},
  { path: 'table/:from/:to/:date', component:  TableComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Train type',
        url: '/train-type'
      },
      {
        label: 'Table',
        url: '/table'
      }
    ]
  },},
  {path:'table', redirectTo:'table/undefined/undefined/undefined'},
  { path: 'order', component:  OrderComponent, canActivate: [TableGuardServiceGuard],
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Train type',
        url: '/train-type'
      },
      {
        label: 'Table',
        url: `/table/:from/:to/:date` // BUG
      },
      {
        label: 'Order',
        url: '/order'
      }
    ]
  },},
  { path: 'thank-you', component:  ThankYouComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Train type',
        url: '/train-type'
      },
      {
        label: 'Table',
        url: `/table/:from/:to/:date` // BUG
      },
      {
        label: 'Order',
        url: '/order'
      }
      ,
      {
        label: 'Thank You!',
        url:'/thank-you'
      }
    ]
  },},
  { path: 'cookies', component:  CookieDetailsComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Cookies',
        url: '/cookies'
      }
    ]
  },},
  { path: 'error-permission', component:  ErrorPermissionComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: '403',
        url: ''
      }
    ]
  },},{ path: 'coming-soon', component:  ComingSoonComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Coming Soon!',
        url: '/coming-soon'
      }
    ]
  },},
  { path: 'sitemap', component:  SitemapComponent,
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Sitemap',
        url: '/sitemap'
      }
    ]
  },},
  { path: '**', redirectTo: '/error'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
