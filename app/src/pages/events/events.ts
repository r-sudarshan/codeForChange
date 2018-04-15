import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  public events = []

  constructor(private eventService: EventServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  	
  	}

  ionViewDidLoad(){
    this.eventService.getEvents()
      .subscribe((response) => {
          let e = response["d"]["RetData"]["Tbl"]["Rows"];
          e.forEach(element => {
            let sd=moment(element.StartDate);
            let ed=moment(element.EndDate);
            let r={EventName:element.EventName, LongDesc:element.LongDesc, StartDate:sd,EndDate:ed};
            this.events.push(r)
          });
      });
  }

}
