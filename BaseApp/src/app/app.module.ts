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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],  
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
