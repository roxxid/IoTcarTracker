import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertsService} from '../alerts-service/alerts.service';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-hight-alerts',
  templateUrl: './hight-alerts.component.html',
  styleUrls: ['./hight-alerts.component.css']
})
export class HightAlertsComponent implements OnInit {
  alerts;
  dataSource = new MatTableDataSource<Element>();

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private alertsService: AlertsService) {}

  displayedColumns = ['vin', 'timestamp', 'alertMessage'];

  ngOnInit() {
    this.alertsService.getHighAlerts().subscribe(alerts => {
      this.alerts = alerts;
      this.dataProcess(alerts);
      this.dataSource = new MatTableDataSource<Element>(alerts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, error => console.log(error));
  }



  dataProcess(alerts) {
    //this.dataSource = alerts;
    //this.dataSource.sort = this.sort;
    //console.log(this.dataSource);
  }

}
