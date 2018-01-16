import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../vehicles-service/vehicles.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {
  vehicles;
  constructor(private vehiclesService: VehiclesService) {
  }

  ngOnInit() {

    this.vehiclesService.getVehicles()
      .subscribe(
        vehicles => this.vehicles = vehicles,
        error => console.log(error)
      );

  }

}
