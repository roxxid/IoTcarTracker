import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../vehicles-service/vehicles.service';
import {ReadingsService} from '../readings-service/readings.service';

@Component({
  selector: 'app-readings-history',
  templateUrl: './readings-history.component.html',
  styleUrls: ['./readings-history.component.css']
})
export class ReadingsHistoryComponent implements OnInit {
  vehicleVin;
  readingsList;
  currentVin;
  constructor(private route: ActivatedRoute, private readingsService: ReadingsService, private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentVin = params.vin;
      this.readingsService.getReadingsByVin(params.vin)
        .subscribe(alerts => {
          this.readingsList = alerts;
        });
      this.vehiclesService.getVehiclesByVin(params.vin)
        .subscribe(
          vehicles => this.vehicleVin = vehicles,
          error => console.log(error)
        );
    });
  }

}
