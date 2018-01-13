import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgArrayPipesModule, NgStringPipesModule } from 'angular-pipes';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { VehiclesHistoryComponent } from './vehicles-history/vehicles-history.component';
import { HightAlertsComponent } from './alerts-high/hight-alerts.component';
import { AlertsHistoryComponent } from './alerts-history/alerts-history.component';
import { VehiclesLocationComponent } from './vehicles-location/vehicles-location.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import {VehiclesService} from './vehicles-service/vehicles.service';
import {HttpClientModule} from '@angular/common/http';
import {AlertsService} from './alerts-service/alerts.service';
import {ReadingsService} from './readings-service/readings.service';
import {AgmCoreModule} from '@agm/core';

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'vehicles', component: VehiclesListComponent},
  {path: 'vehicles/:vin', component: VehiclesDetailsComponent},
  {path: 'history/:id', component: VehiclesHistoryComponent},
  {path: 'alerts', component: HightAlertsComponent},
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
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDX_w7qbmz-HfkvFNo3SiQQWKAphTbMtqY'}),
    NgArrayPipesModule,
    NgStringPipesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [VehiclesService, AlertsService, ReadingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
{
    path: 'artist/:artistId',
    component: ArtistComponent,
    children: [
      {path: 'tracks', component: ArtistTrackListComponent},
      {path: 'albums', component: ArtistAlbumListComponent},
      {path: 'videos', component: ArtistMusicVideoListComponent},
       {path: '', redirectTo: 'tracks', pathMatch: 'full'},
    ]
  }
  {
    path: 'vehicles/:vin',
    component: VehiclesDetailsComponent,
    children: [
      {path: 'location', component: VehiclesLocationComponent},
      {path: 'readings', component: AlertsHistoryComponent},
      {path: 'alerts', component: HightAlertsComponent},
      {path: '', redirectTo: 'vehicles', pathMatch: 'full'},
    ]
  },

 */
