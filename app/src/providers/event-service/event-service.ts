import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import 'rxjs/add/operator/map';

@Injectable()
export class EventServiceProvider {
  
  constructor(public http: HttpClient) {
  }

  

  getEvents(){
    let startSearchDate = moment().format('DD MMM YYYY');
    let endSearchDate = moment().add(1, 'month').format('DD MMM YYYY');

    var params = {
      "SecretKey":"TestSecretBSSChangeInProd",
      "EventName":"",
      "EventType":"",
      "GroupID":"",
      "EventStatus":"",
      "EventTags":"",
      "OwnerGroup":"",
      "RegStatus":"",
      "StartDate":startSearchDate,
      "EndDate":endSearchDate,
      "CreatedBy":"",
      "ShowEvent":"",
      "ParentEvent":""
    };
    var encodedParams = encodeURIComponent(JSON.stringify(params));
    let head = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'application/json, text/javascript, */*; q=0.01'});
    let r_options = {headers: head};

      return this.http.post(
        'https://crm.beyond.org.sg/BSSTest/Ext.Evt1.MainListing_Get.json', 
        'data=' + encodedParams,
        r_options)
      .map(response => response);
  }
}
