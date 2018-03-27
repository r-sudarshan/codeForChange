import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {
    
  }

  login(account: any) {
    let head = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Accept': 'application/json, text/javascript, */*; q=0.01'});
    let r_options = {headers: head, dataType: "string"};
    account["SecretKey"] = "TestSecretBSSChangeInProd";
    account["RememberMe"] = false;

    var encodedParams = encodeURIComponent(JSON.stringify(account));
      return this.http.post(
        'https://crm.beyond.org.sg/BSSTest/Ext.Sec1.Login.json', 
        'data=' + encodedParams,
        r_options)
      .map(response => response);
  }
}
