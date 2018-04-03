import { EventsPage } from '../events/events';
import { DonationsPage } from '../donations/donations';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

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
  //rootPage = 'EventsPage';
  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
  	{ title: 'Events', pageName: 'EventsPage', icon: 'shuffle'}
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
