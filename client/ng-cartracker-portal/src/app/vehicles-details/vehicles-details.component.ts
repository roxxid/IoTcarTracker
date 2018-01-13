import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../vehicles-service/vehicles.service';
import {ReadingsService} from '../readings-service/readings.service';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {
  vehicle;
  readings;
  constructor(private route: ActivatedRoute, private vehicleService: VehiclesService, private readingsService: ReadingsService) {
    this.route.params.subscribe(params => {
    this.vehicleService.getVehiclesByVin(params.vin)
      .subscribe(vehicle =>  {
        this.readingsService.getReadingsByVin(params.vin)
          .subscribe(readings => this.readings = JSON.stringify(readings));
        this.vehicle = vehicle;
      });
  });
  }

  ngOnInit() {
  }

}


/*
   let fuelVolume = this.readings['list'].map(readings => readings.fuelVolume);
  let engineRpm = this.readings['list'].map(readings => readings.engineRpm);
  let timestamp = this.readings['list'].map(readings => readings.timestamp);

  let weatherDates = []
  alldates.forEach((res) => {
  let jsdate = new Date(res * 1000)
  weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
}) */
