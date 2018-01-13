import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AlertsService {
  private readonly URL = 'http://localhost:8080/tracker/alerts/high';
  constructor(
    private httpClient: HttpClient
  ) {}
  public getHighAlerts(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.URL);
  }

}
