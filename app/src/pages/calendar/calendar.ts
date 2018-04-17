import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';
import * as moment from 'moment';
import * as momenttz from 'moment-timezone'
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
          var dates:Array<moment.Moment> = []
          e.forEach(element => {
            var start=momenttz.tz(element.StartDate,"UTC");
            var end=momenttz.tz(element.EndDate,"UTC");
            while(start<end){
              var t = moment(start)
              dates.push(t)
              var d = {Name:element.EventName,Month:start.month(),Date:start.format('YYYYMMDD'),StartTime:start.format("hh:mm A"),EndTime:end.format("hh:mm A")}
              this.event_details.push(d)
              start.add(1,'day')
            };
            if(start.diff(end,"days")>0){
              var d1 = {Name:element.EventName,Month:end.month(),Date:end.format('YYYYMMDD'),StartTime:start.format("hh:mm A"),EndTime:end.format("hh:mm A")}
              this.event_details.push(d1)
            }
          });
        var uniq:Array<moment.Moment> = []
        dates.forEach(d=>{
          if(uniq.indexOf(d)==-1){
            uniq.push(d)
          }
        })
        uniq.forEach(i=>{
          let r = {year:i.year(),month:i.month(),date:i.date()}
          this.events.push(r)
        })
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
    this.today = []
    var events = []
    this.event_details.forEach(detail =>{
      if(detail.Month==$event.month){
        events.push($event)
      }
    })
    var count = events.length
    if(count==0){
      this.today.push({Name:"There are no events this month"})
    }else{
      this.today.push({Name:"There are "+count+" events this month"})
    }
  }

}
