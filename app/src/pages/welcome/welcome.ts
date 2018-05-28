import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,private socialSharing:SocialSharing) {
  }

  openModal(){
  	let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }

  whatsappShare() {
    this.socialSharing.shareViaWhatsApp("Hey! Do you know about Beyond Social Services?", "assets/img/bss-logo.jpg", "http://beyond.org.sg/").then(() => {
    }).catch(() => {
    });
  }
  facebookShare() {
    this.socialSharing.shareViaFacebook("Hey! Do you know about Beyond Social Services?", "assets/img/bss-logo.jpg", "http://beyond.org.sg/").then(() => {
    }).catch(() => {
    });
  }
  twitterShare() {
    this.socialSharing.shareViaTwitter("Hey! Do you know about Beyond Social Services?", "assets/img/bss-logo.jpg", "http://beyond.org.sg/").then(() => {
    }).catch(() => {
    });
  }
  smsShare() {
    this.socialSharing.shareViaSMS("Hey! Do you know about Beyond Social Services? Checkout http://beyond.org.sg/",null).then(() => {
    }).catch(() => {
    });
  }

  signup() {
    let browser = new InAppBrowser().create('http://beyond.org.sg/', '_system'); 
  }

}
