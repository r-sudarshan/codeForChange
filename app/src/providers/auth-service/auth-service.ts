import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  private _data = {SecretKey: 'TestSecretBSSChangeInProd',Username: 'code4change',
              Password: 'ChangeMe123!', RememberMe: false};

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  apiUrl = 'https://crm.beyond.org.sg/BSSTest';
  
  postData() {
      this.http.post(this.apiUrl + '/Ext.Sec1.Login.json', this._data)
      .subscribe(
        (data:any) => {
          console.log(data);
        },
        err => {
          console.log("Error occured");
        }
      );
    };
}
