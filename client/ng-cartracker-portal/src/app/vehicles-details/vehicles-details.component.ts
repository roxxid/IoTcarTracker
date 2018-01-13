import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../vehicles-service/vehicles.service';
import {ReadingsService} from '../readings-service/readings.service';
import { TakePipe } from 'angular-pipes/src/array/take.pipe';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {
  vehicle;
  readings;
  latestReading;
  lat = 0;
  lon = 0;

  constructor(private route: ActivatedRoute, private vehicleService: VehiclesService, private readingsService: ReadingsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehicleService.getVehiclesByVin(params.vin)
        .subscribe(vehicle =>  {
          this.readingsService.getReadingsByVin(params.vin)
            .subscribe(readings => {
              this.readings = readings;
              this.latestReading = this.readings[0];
              this.lat = this.readings[0].latitude;
              this.lon = this.readings[0].longitude;
            });
          this.vehicle = vehicle;
        });
    });
  }

}
