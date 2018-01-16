import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgArrayPipesModule} from 'angular-pipes';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {VehiclesListComponent} from './vehicles-list/vehicles-list.component';
import {VehiclesHistoryComponent} from './vehicles-history/vehicles-history.component';
import {HightAlertsComponent} from './alerts-high/hight-alerts.component';
import {AlertsHistoryComponent} from './alerts-history/alerts-history.component';
import {VehiclesLocationComponent} from './vehicles-location/vehicles-location.component';
import {VehiclesDetailsComponent} from './vehicles-details/vehicles-details.component';
import {HomePageComponent} from './home-page/home-page.component';
import {VehiclesService} from './vehicles-service/vehicles.service';
import {HttpClientModule} from '@angular/common/http';
import {AlertsService} from './alerts-service/alerts.service';
import {ReadingsService} from './readings-service/readings.service';
import {AgmCoreModule} from '@agm/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgStringPipesModule} from 'angular-pipes';
import { ReadingsHistoryComponent } from './readings-history/readings-history.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatSortModule} from '@angular/material';

const appRoutes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'vehicles', component: VehiclesListComponent},
  {path: 'vehicles/:vin', component: VehiclesDetailsComponent},
  {path: 'alerts', component: HightAlertsComponent},
  {path: 'location', component: VehiclesLocationComponent},
  {path: 'history', component: VehiclesHistoryComponent},
  {path: 'history/alerts/:vin', component: AlertsHistoryComponent},
  {path: 'history/readings/:vin', component: ReadingsHistoryComponent},
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
    ReadingsHistoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDX_w7qbmz-HfkvFNo3SiQQWKAphTbMtqY'}),
    NgArrayPipesModule,
    NgStringPipesModule,
    NgxChartsModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
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
    path: 'history/',
    component: VehiclesHistoryComponent,
    children: [
      {path: 'alerts/:vin', component: AlertsHistoryComponent},
      {path: 'readings/:vin', component: ReadingsHistoryComponent},
      {path: '', redirectTo: 'history', pathMatch: 'full'},
    ]
  },

 */
