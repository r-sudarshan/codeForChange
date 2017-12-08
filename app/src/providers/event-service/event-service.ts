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
    this.http.get("/assets/temp/events.json")
    	.map(Response => {return Response.json();})
    	.subscribe(data => {
    	});
  }
}
