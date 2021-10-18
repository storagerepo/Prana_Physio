import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { VideolibraryComponent } from './videolibrary/videolibrary.component';
import { GroupclassComponent } from './groupclass/groupclass.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { ServiceDetailsComponent } from './service/service-details/service-details.component';
import { FallspreventationComponent } from './fallspreventation/fallspreventation.component';
import { ExpertComponent } from './expert/expert.component';
import { CareTakerComponent } from './care-taker/care-taker.component';
import { AgeSuccessfulCalculatorComponent } from './age-successful-calculator/age-successful-calculator.component';


const routes: Routes = [
  {
    path: '',
    // redirectTo: 'home', pathMatch: 'full',
    // component: HomeComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'aboutus',
        component: AboutusComponent,
      },
      {
        path: 'service/service-details',
        component: ServiceDetailsComponent,
      },
      {
        path: 'groupclass',
        component: GroupclassComponent,
      },
      {
        path: 'videolibrary',
        component: VideolibraryComponent,
      },
      {
        path: 'contactus',
        component: ContactusComponent,
      },
      {
        path: 'fallspreventation',
        component: FallspreventationComponent,
      },
      {
        path: 'age-successful-calculator',
        component: AgeSuccessfulCalculatorComponent,
      },
      {
        path: 'expert',
        component: ExpertComponent,
      },
      {
        path: 'care-taker',
        component: CareTakerComponent,
      },
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
