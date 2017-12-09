import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';


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
        	this.events = response["results"];
      });
  }

}
