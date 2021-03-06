import {Component, OnInit} from '@angular/core';
import {AlertsService} from '../alerts-service/alerts.service';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../vehicles-service/vehicles.service';

@Component({
  selector: 'app-alerts-history',
  templateUrl: './alerts-history.component.html',
  styleUrls: ['./alerts-history.component.css']
})
export class AlertsHistoryComponent implements OnInit {
  vehicleVin;
  alertList;
  currentVin;
  constructor(private route: ActivatedRoute, private alertsService: AlertsService, private vehiclesService: VehiclesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentVin = params.vin;
      this.alertsService.getAlertsByVin(params.vin)
        .subscribe(alerts => {
              this.alertList = alerts;
            });
      this.vehiclesService.getVehiclesByVin(params.vin)
        .subscribe(
          vehicles => this.vehicleVin = vehicles,
          error => console.log(error)
        );
    });
  }
}
