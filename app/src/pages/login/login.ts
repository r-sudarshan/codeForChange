import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, LoadingController, AlertController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
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
    public alertCrl : AlertController,
    public loginService: LoginServiceProvider
  ) {
    
  }

  doLogin() {
    let loader = this.loadingCtrl.create({
      content: "Authenticating. Please wait..."
    });
    loader.present();
    this.loginService.login(this.account).subscribe(
      (response) => {
        loader.dismiss();
        if (response['d']['RetVal'] != -1){
          let alert = this.alertCrl.create({
            title: 'Login Unsuccessful',
            subTitle: 'Wrong username or password',
            buttons: ['Dismiss']
          });
          alert.present();
        }
        else {
          this.navCtrl.push(MenuPage);
          this.getLoginInfo();
        }
      }
    )
  }

  getLoginInfo() {
      this.loginService.getLoginInfo().subscribe(
        (response) => {
          this.loginService.personID = response["d"]["RetData"]["LoginID"];
        },
        (error) => {
          console.log("Error"+error.message);
        }
      )
  }
} 