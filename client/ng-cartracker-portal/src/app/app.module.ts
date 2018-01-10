import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesHistoryComponent } from './vehicles-history/vehicles-history.component';
import { HightAlertsComponent } from './alerts-high/hight-alerts.component';
import { AlertsHistoryComponent } from './alerts-history/alerts-history.component';
import { VehiclesLocationComponent } from './vehicles-location/vehicles-location.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'vehicles', component: VehiclesListComponent},
  {path: 'vehicles/:id', component: VehiclesDetailsComponent},
  {path: 'history/:id', component: VehiclesHistoryComponent},
  {path: 'alerts/high/', component: HightAlertsComponent},
  {path: 'alerts/:id', component: AlertsHistoryComponent},
  {path: 'location', component: VehiclesLocationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    VehiclesListComponent,
    VehiclesHistoryComponent,
    HightAlertsComponent,
    AlertsHistoryComponent,
    VehiclesLocationComponent,
    VehiclesDetailsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
