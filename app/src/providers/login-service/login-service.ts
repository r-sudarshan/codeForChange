import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginServiceProvider Provider');
  }

  apiUrl = 'https://crm.beyond.org.sg/BSSTest';

  login(account: any) {
    return new Promise ((resolve, reject) => {
      this.http.post(this.apiUrl + '/Ext.Sec1.Login.json',
                     {SecretKey: 'TestSecretBSSChangeInProd', Username: account.username, Password: account.password, RememberMe: false}
                    )
                .subscribe(data => {resolve(data);}
                           , err => {reject(err)})
    })
  };
}
