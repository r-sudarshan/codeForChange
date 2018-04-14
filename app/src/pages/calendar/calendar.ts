import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  currentEvents = [
    {
      year: 2018,
      month: 10,
      date: 25
    },
    {
      year: 2018,
      month: 10,
      date: 26
    }
  ];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    
  }

  onDaySelect($event){

  }

  onMonthSelect($event){
    
  }

}
