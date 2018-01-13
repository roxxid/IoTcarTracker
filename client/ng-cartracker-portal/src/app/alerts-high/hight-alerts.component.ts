import { Component, OnInit } from '@angular/core';
import {VehiclesService} from '../vehicles-service/vehicles.service';
import {AlertsService} from '../alerts-service/alerts.service';

@Component({
  selector: 'app-hight-alerts',
  templateUrl: './hight-alerts.component.html',
  styleUrls: ['./hight-alerts.component.css']
})
export class HightAlertsComponent implements OnInit {
  alerts;
  constructor(private alertsService: AlertsService) {
    alertsService.getHighAlerts().subscribe(alerts => this.alerts = alerts, error => console.log(error));
  }
  ngOnInit() {
  }

}
