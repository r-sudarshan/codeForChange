import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  openModal(characterNum){
  	let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }

}

@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <form (submit)="doLogin()">
    <ion-list>

      <ion-item>
        <ion-label floating>Username</ion-label>
        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label fixed>Password</ion-label>
        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>
      </ion-item>

      <div padding>
        <button ion-button color="primary" block>Login</button>
      </div>

    </ion-list>
  </form>
</ion-content>
`
})
export class ModalContentPage {
  account: { username: string, password: string } = {
    username: 'test@example.com',
    password: 'test'
  };

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}