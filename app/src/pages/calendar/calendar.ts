import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';
import * as moment from 'moment';
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

  public event_details=[]
  public today = []
  public events = []
  
  constructor(private eventService: EventServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.eventService.getEvents()
      .subscribe((response) => {
          var e = response["d"]["RetData"]["Tbl"]["Rows"];
          e.forEach(element => {
            var start=moment(element.StartDate);
            var end=moment(element.EndDate);
            while(start<=end){
              let r = {year:start.year(),month:start.month(),date:start.day()}
              this.events.push(r)
              var d = {Name:element.EventName,Date:start.format('YYYYMMDD'),EndDate:end.format('YYYYMMDD')}
              this.event_details.push(d)
              start.add(1,'day')
            };
          });
        });
  }

  onDaySelect($event){
    var d = moment([$event.year,$event.month,$event.date]).format('YYYYMMDD')
    var r = []
    this.event_details.forEach(detail =>{
      if(detail.Date==d){
        r.push(detail)
      }
    })
    this.today = r
  }

  onMonthSelect($event){
    
  }

}
