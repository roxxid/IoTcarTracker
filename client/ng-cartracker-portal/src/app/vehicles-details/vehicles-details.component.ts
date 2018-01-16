import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../vehicles-service/vehicles.service';
import {ReadingsService} from '../readings-service/readings.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})

export class VehiclesDetailsComponent implements OnInit, AfterViewInit {
  vehicle;
  readings;
  latestReading;
  engineRpmChart = [];
  fuelVolumeChart = [];
  speedChart = [];
  engineHpChart = [];
  readingDates = [];
  canvas1: any;
  canvas2: any;
  canvas3: any;
  canvas4: any;
  ctx: any;
  lat = 0;
  lon = 0;
  chart = [];

  constructor(private route: ActivatedRoute, private vehicleService: VehiclesService, private readingsService: ReadingsService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehicleService.getVehiclesByVin(params.vin)
        .subscribe(vehicle => {
          this.readingsService.getReadingsByVin(params.vin)
            .subscribe(readings => {
              this.readings = readings;
              this.latestReading = this.readings[0];
              this.lat = this.readings[0].latitude;
              this.lon = this.readings[0].longitude;
              this.processData(readings);
            });
          this.vehicle = vehicle;
        });
    });
  }

  processData(readings) {
    const myData = readings;
//    console.log(myData);
    this.fuelVolumeChart = [];
    this.engineRpmChart = [];
    this.speedChart = [];
    this.engineHpChart = [];
    myData.forEach(element => {
      this.engineRpmChart.push(element.engineRpm);
      this.fuelVolumeChart.push(element.fuelVolume);
      this.speedChart.push(element.speed);
      this.engineHpChart.push(element.engineHp);
      this.readingDates.push(element.timestamp);
    });
//    console.log(this.fuelVolumeChart);
  }

  ngAfterViewInit() {
    this.canvas1 = document.getElementById('myChart1');
    this.ctx = this.canvas1.getContext('2d');
    const myChart1 = new Chart(this.ctx, <Chart.ChartConfiguration>{
      type: 'line',
      data: {
        labels: ['Last Reading', 'Latest Reading'],
        datasets: [{
          label: 'Engine RPM',
          data: this.engineRpmChart,
          backgroundColor: [
            'rgba(34, 226, 194, 100)',
            'rgba(255, 202, 235, 1)',
            'rgba(255, 236, 86, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        display: true
      }
    });

    this.canvas2 = document.getElementById('myChart2');
    this.ctx = this.canvas2.getContext('2d');
    const myChart2 = new Chart(this.ctx, <Chart.ChartConfiguration>{
      type: 'line',
      data: {
        labels: ['Last Reading', 'Latest Reading'],
        datasets: [{
          label: 'Fuel Level',
          data: this.fuelVolumeChart,
          backgroundColor: [
            'rgba(255, 220, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        display: true
      }
    });

    this.canvas3 = document.getElementById('myChart3');
    this.ctx = this.canvas3.getContext('2d');
    const myChart3 = new Chart(this.ctx, <Chart.ChartConfiguration>{
      type: 'line',
      data: {
        labels: ['Last Reading', 'Latest Reading'],
        datasets: [{
          label: 'Engine HP',
          data: this.engineHpChart,
          backgroundColor: [
            'rgba(200, 220, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {

        display: true
      }
    });

    this.canvas4 = document.getElementById('myChart4');
    this.ctx = this.canvas4.getContext('2d');
    const myChart4 = new Chart(this.ctx, <Chart.ChartConfiguration>{
      type: 'line',
      data: {
        labels: ['Last Reading', 'Latest Reading'],
        datasets: [{
          label: 'Speed Fluctuation',
          data: this.speedChart,
          backgroundColor: [
            'rgba(255, 40, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        display: true
      }
    });


  }

}


