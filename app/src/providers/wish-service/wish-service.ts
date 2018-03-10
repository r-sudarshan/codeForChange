import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WishServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WishesServiceProvider Provider');
  }

  items: any[];

  load() {
    this.items = [];
    for(let i = 0; i < 10; i++) {
      this.items.push({
        text: 'Item ' + i,
        id: i
      });
    }
  }
  
  add() {
    alert('Added');
  }
  /*window.CreateNewEvent = function() {
    $("#result101").html("Please wait...");
    var DataToSend = { "SecretKey":"TestSecretBSSChangeInProd" , EventName: 'test' , EventType: 'Budgeted', ParentGroup: '1', ParentEvent:'' , Purpose: 'Obj1', Venue: 'Test', StartDate: '', EndDate: '', RegStartDate: '', RegEndDate: '', RegRoles: '' , Tags: '' , Remarks: '' , ShortDesc: '' , LongDesc: ''};
    var jqxhr = $.ajax({
        url: "https://crm.beyond.org.sg/BSSTest/Ext.Evt1.UpsertNewEvent.json", cache: false, type: "POST",
        data: { "data": JSON.stringify(DataToSend) },
        dataType: "json", timeout: 30000,
        xhrFields: { withCredentials: true }
    })
    jqxhr.done(function (data, textStatus, jqXHR) { 
        $('#result101').html(JSON.stringify(data));
    });
    jqxhr.fail(function (jqXHR, textStatus, errorThrown) { 
        $('#result101').html(jqXHR.responseText);
    });
  }*/
}
