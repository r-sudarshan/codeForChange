import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class EventServiceProvider {
  
  constructor(public http: HttpClient) {
  }

  getEvents(){
    let head = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'application/json, text/javascript, */*; q=0.01'});
let r_options = {headers: head};

      return this.http.post(
        'https://crm.beyond.org.sg/BSSTest/Ext.Evt1.MainListing_Get.json', 
        'data=%7B%22SecretKey%22%3A%22TestSecretBSSChangeInProd%22%2C%22EventName%22%3A%22%22%2C%22EventType%22%3A%22%22%2C%22GroupID%22%3A%22%22%2C%22EventStatus%22%3A%22%22%2C%22EventTags%22%3A%22%22%2C%22OwnerGroup%22%3A%22%22%2C%22RegStatus%22%3A%22%22%2C%22StartDate%22%3A%221+Mar+2015%22%2C%22EndDate%22%3A%221+Mar+2018%22%2C%22CreatedBy%22%3A%22%22%2C%22ShowEvent%22%3A%22%22%2C%22ParentEvent%22%3A%22%22%7D', 
        r_options)
      .map(response => response);
/*
    return this.http.get("/assets/temp/events.json")
      .map(response => response);
      */
  }
}
