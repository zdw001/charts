import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicksService {

  constructor(private http: HttpClient) { }

  ticks() {
    return this.http.get('/assets/json/ticks.json')
      .map(data => data);
  }

}
