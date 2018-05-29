import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AchievementProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AchievementProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AchievementProvider Provider');
  }

  getAchievements(personid:string) {
    let head = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'application/json, text/javascript, */*; q=0.01'});
    let r_options = {headers: head, dataType: "string",withCredentials: true};
    var params = { "SecretKey" : "TestSecretBSSChangeInProd","PID":personid,"TargetDateFrom":"","TargetDateTo":"","ModKey":"Ctc.PersonAchievement" }
    var encodedParams = encodeURIComponent(JSON.stringify(params));
    return this.http.post(
      'https://crm.beyond.org.sg/BSSTest/Ext.Ctc1.PersonAchievement_Get.json', 
      'data=' + encodedParams,
      r_options)
    .map(response => response);
  }

}
