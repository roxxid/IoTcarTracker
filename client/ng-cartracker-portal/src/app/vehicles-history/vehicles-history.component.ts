import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../vehicles-service/vehicles.service';

@Component({
  selector: 'app-vehicles-history',
  templateUrl: './vehicles-history.component.html',
  styleUrls: ['./vehicles-history.component.css']
})
export class VehiclesHistoryComponent implements OnInit {
  vehiclesList;
  constructor(private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.vehiclesService.getVehicles()
      .subscribe(
        vehicles => this.vehiclesList = vehicles,
        error => console.log(error)
      );
  }

}
