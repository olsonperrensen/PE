import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { FooterComponent } from './footer/footer.component';
import { TableListComponent } from './table-list/table-list.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TableComponent } from './table/table.component';
import { OrderComponent } from './order/order.component';
import { NgbdModalContent, ThankYouComponent } from './thank-you/thank-you.component';
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
import { AppRoutingModule } from './app-routing.module';
import { CookieDetailsComponent } from './cookie-details/cookie-details.component';
import {ThankYouDetailsComponent } from './thank-you/thank-you-details/thank-you-details.component';
import { ErrorPermissionComponent } from './error-permission/error-permission.component';
import { TraintypeComponent } from './traintype/traintype.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { HelpContactComponent } from './help-contact/help-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DarkModeStatusService } from './dark-mode-status.service';
import { DiscountComponent } from './order/discount/discount.component';
import { CreditCardCheckerComponent } from './order/credit-card-checker/credit-card-checker.component';
import { BasketService } from './basket.service';
import { FakeUsersLogComponent } from './datepicker/fake-users-log/fake-users-log.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProgressBarService } from './progress-bar/progress-bar.service';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ReducePipe } from './reduce.pipe';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { NgParticlesModule } from "ng-particles";
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
    CookieDetailsComponent,
    ThankYouDetailsComponent,
    ErrorPermissionComponent,
    NgbdModalContent,
    TraintypeComponent,
    SitemapComponent,
    HelpContactComponent,
    DiscountComponent,
    CreditCardCheckerComponent,
    FakeUsersLogComponent,
    ProgressBarComponent,
    ComingSoonComponent,
    ReducePipe,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(
      {apiKey: 'LADYGAGA'}
    ),
    NgDynamicBreadcrumbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    HttpClientModule,
    RecaptchaModule,
  RecaptchaFormsModule,
  HttpClientModule,
  TranslateModule.forRoot({
    defaultLanguage: 'en-US',
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  }),
  NgParticlesModule
  ],
  providers: [JourneyDetailsService,
    TableGuardServiceGuard,
    DarkModeStatusService,
    BasketService,
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
    ProgressBarService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http,'../assets/i18n/','.json'); 
}