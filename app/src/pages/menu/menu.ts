import { AchievementPage } from './../achievement/achievement';
import { CalendarPage } from './../calendar/calendar';
import { EventsPage } from '../events/events';
import { DonationsPage } from '../donations/donations';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

export interface PageInterface {
  title: string;
  pageName: string;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  
  rootPage = 'DonationsPage';
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    { title : 'Donations', pageName : DonationsPage.name, icon: 'shuffle'},
    { title: 'Events', pageName: EventsPage.name, icon: 'shuffle'},
    { title: 'Event Calendar', pageName: CalendarPage.name, icon: 'calendar'},
    { title: 'Achievements', pageName: AchievementPage.name, icon: 'medal'},
    { title: 'Profile', pageName: ProfilePage.name, icon: 'shuffle'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPage(page: PageInterface) {
  	this.nav.setRoot(page.pageName);
  }

  isActive(page: PageInterface) {
	  	if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
	      return 'primary';
  		}
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
