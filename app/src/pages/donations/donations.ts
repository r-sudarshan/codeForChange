import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DonationServiceProvider } from './../../providers/donation-service/donation-service';

@IonicPage()
@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html',
})
export class DonationsPage {

  constructor(public DonationService: DonationServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationsPage');
    this.DonationService.load();
  }

  donateMoney() {
    let browser = new InAppBrowser().create('http://beyond.org.sg/donate/', '_system'); 
  }
}
