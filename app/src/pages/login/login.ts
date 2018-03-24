import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, LoadingController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData: any;
  account: { Username: string, Password: string } = {
    Username: "code4change",
    Password: "ChangeMe123!"
  };

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public loginService: LoginServiceProvider
  ) {
    
  }

  doLogin() {
    this.loginService.login(this.account).subscribe(
      (response) => {
        console.log(response["d"]["RetMsg"]);
        this.navCtrl.push(MenuPage);

      }
      // ,(error) => {
      //   console.log("errorLogin: ", error.error);
      //   this.navCtrl.push(MenuPage);
      // }
    )
    this.navCtrl.push(MenuPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}