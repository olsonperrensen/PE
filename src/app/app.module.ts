import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TableListComponent } from './table-list/table-list.component';
import { FeaturesComponent } from './features/features.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TableComponent } from './table/table.component';
import { OrderComponent } from './order/order.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TableFilteringComponent } from './table-filtering/table-filtering.component';
import { TOSComponent } from './tos/tos.component';
import { AgmCoreModule } from '@agm/core';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { JourneyDetailsService } from './journey-details.service';
import { TableGuardServiceGuard } from './table-guard-service.guard';

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
        url: '/TOS'
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
        label: 'Table',
        url: '/table/:from/:to/:date'
      }
    ]
  },},
  { path: 'order', component:  OrderComponent, canActivate: [TableGuardServiceGuard],
  data: {
    breadcrumb: [
      {
        label: 'Home',
        url: '/'
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
  { path: '**', redirectTo: '/error'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatepickerComponent,
    FooterComponent,
    TableListComponent,
    FeaturesComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    SignupComponent,
    TableComponent,
    OrderComponent,
    ThankYouComponent,
    PricingComponent,
    FaqComponent,
    AboutUsComponent,
    TableFilteringComponent,
    TOSComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot(
      {apiKey: 'AIzaSyCsTw56lFc40e_ObgyNVmQOQCung5JGL8w'}
    ),
    NgDynamicBreadcrumbModule
  ],
  providers: [JourneyDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
