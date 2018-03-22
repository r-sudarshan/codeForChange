import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceProvider {

  constructor(public http: Http) {
    
  }

  login(account: any) {
  /*
    this.http.post('/login',
                     { 
                       "data": JSON.stringify(
                         {'SecretKey': 'TestSecretBSSChangeInProd', 
                         'Username': account.username,
                         'Password': account.password, 
                         'RememberMe': false})
                       }, {responseType: 'text'}
                    )
                .map(res => res)
                .subscribe(data =>                
                  {console.log("success");console.log(data); }
                           , err => {console.log(err);})
*/
                          
    return this.http.post('/postToRandomApi', {
        "data": JSON.stringify({
          "title":"foo",
          "body":"basdar",
          "userId":1
        })
    })
      .map(response => response);

      
    
  };
}
