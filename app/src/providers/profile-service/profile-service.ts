import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProfileServiceProvider Provider');
  }

  getUserProfileInfo() {
    let head = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'application/json, text/javascript, */*; q=0.01'});
    let r_options = {headers: head, dataType: "string", withCredentials: true};
    var params = { "SecretKey" : "TestSecretBSSChangeInProd" }
    var encodedParams = encodeURIComponent(JSON.stringify(params));
    return this.http.post(
      'https://crm.beyond.org.sg/BSSTest/Ext.iCtc1.GetPersonalInfo.json', 
      'data=' + encodedParams,
      r_options)
    .map(response => response);
  }
}
