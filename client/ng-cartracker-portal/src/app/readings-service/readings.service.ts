import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReadingsService {

  private readonly URL = 'http://localhost:8080/tracker/readings';

  constructor(private httpClient: HttpClient) { }

  getReadingsByVin(vin): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(`${this.URL}/${vin}`)
      .map(readings => readings);
  }

}
