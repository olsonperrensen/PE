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

const appRoutes: Routes = [
  { path: '', component:  DatepickerComponent},
  { path: 'features', component:  FeaturesComponent},
  { path: 'pricing', component:  PricingComponent},
  { path: 'faq', component:  FaqComponent},
  { path: 'about-us', component:  AboutUsComponent},
  { path: 'error', component:  ErrorComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'signup', component:  SignupComponent},
  { path: 'table-filtering', component:  TableFilteringComponent},
  { path: 'admin', redirectTo: '/table-filtering'},
  { path: 'TOS', component:  TOSComponent},
  { path: 'table/:from/:to/:day', component:  TableComponent},
  { path: 'order', component:  OrderComponent},
  { path: 'thank-you', component:  ThankYouComponent},
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
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
