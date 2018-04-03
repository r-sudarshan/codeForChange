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
  
  public donations = []

  constructor(public DonationService: DonationServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationsPage');
    this.DonationService.getDonations()
      .subscribe((response) => {
          console.log(response["d"]["RetData"]["Tbl"]["Rows"]);
          this.donations = response["d"]["RetData"]["Tbl"]["Rows"];
      });
  }

  donateMoney() {
    let browser = new InAppBrowser().create('http://beyond.org.sg/donate/', '_system'); 
  }
}
