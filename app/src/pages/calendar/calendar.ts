import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';

/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  public raw_events=[]

  public events = [
    {
      year: 2018,
      month: 3,
      date: 25
    },
    {
      year: 2018,
      month: 3,
      date: 26
    }
  ];
  
  constructor(private eventService: EventServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.eventService.getEvents()
      .subscribe((response) => {
          this.raw_events = response["d"]["RetData"]["Tbl"]["Rows"];
      });
  }

  onDaySelect($event){
    console.log($event);
  }

  onMonthSelect($event){
    
  }

}
