import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginServiceProvider {

  constructor(public http: HttpClient) {
    
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
     /*                     
    return this.http.post('/postToRandomApi', {
        "data": JSON.stringify({
          "title":"foo",
          "body":"basdar",
          "userId":1
        })
    })
      .map(response => response);


//let r_options = new RequestOptions({headers: head})
/*
      return this.http.post('https://crm.beyond.org.sg/BSSTest/Ext.Evt1.MainListing_Get.json', 'data=%7B%22SecretKey%22%3A%22TestSecretBSSChangeInProd%22%2C%22EventName%22%3A%22%22%2C%22EventType%22%3A%22%22%2C%22GroupID%22%3A%22%22%2C%22EventStatus%22%3A%22%22%2C%22EventTags%22%3A%22%22%2C%22OwnerGroup%22%3A%22%22%2C%22RegStatus%22%3A%22%22%2C%22StartDate%22%3A%221+Mar+2015%22%2C%22EndDate%22%3A%221+Mar+2018%22%2C%22CreatedBy%22%3A%22%22%2C%22ShowEvent%22%3A%22%22%2C%22ParentEvent%22%3A%22%22%7D', r_options)
      .map(response => response);
  };
  */
}
}
