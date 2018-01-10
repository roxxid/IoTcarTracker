import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class VehiclesService {

  private readonly URL = 'http://localhost:8080/tracker/vehicles';

  constructor(
    private httpClient: HttpClient
  ) {}
  public getVehicles(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.URL);
  }

  public getVehiclesByVin(vin): Observable<any> {
    return this.httpClient.get<any>(`${this.URL}/${vin}`);
  }

}
