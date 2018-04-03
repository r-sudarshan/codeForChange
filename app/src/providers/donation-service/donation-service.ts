import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DonationServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DonationServiceProvider Provider');
  }
  
  getDonations() {
    var params = {
      "SecretKey":"TestSecretBSSChangeInProd",
      "PID":"1",
      "DateFrom":"1 Jan 2017",
      "DateTo":"1 Mar 2018",
      "ModKey":"BP.BatchPersonal_G"
    };

    var encodedParams = encodeURIComponent(JSON.stringify(params));
    let head = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'application/json, text/javascript, */*; q=0.01'});
    let r_options = {headers: head};

    return this.http.post(
      'https://crm.beyond.org.sg/BSSTest/Ext.BP1.BatchPersonal_G_Get.json', 
      'data=' + encodedParams,
      r_options)
    .map(response => response);
  }
}

