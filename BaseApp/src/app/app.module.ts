import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GroupclassComponent } from './groupclass/groupclass.component';
import { VideolibraryComponent } from './videolibrary/videolibrary.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FallspreventationComponent } from './fallspreventation/fallspreventation.component';
import { CareTakerComponent } from './care-taker/care-taker.component';
import { ExpertComponent } from './expert/expert.component';
import { AgeSuccessfulCalculatorComponent } from './age-successful-calculator/age-successful-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleLegBalanceComponent } from './single-leg-balance/single-leg-balance.component';
import { AboutDetailsComponent } from './aboutus/about-details/about-details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    AboutusComponent,
    ContactusComponent,
    GroupclassComponent,
    VideolibraryComponent,
    ServiceDetailsComponent,
    FallspreventationComponent,
    HeaderComponent,
    FooterComponent,
    CareTakerComponent,
    ExpertComponent,
    AgeSuccessfulCalculatorComponent,
    SingleLegBalanceComponent,
    AboutDetailsComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
