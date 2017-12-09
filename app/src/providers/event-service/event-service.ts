import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EventServiceProvider {
  
  constructor(public http: HttpClient) {
    console.log('Hello EventServiceProvider Provider');
  }

  getEvents(){
    return this.http.get("/assets/temp/events.json")
      .map(response => response);
  }
}
