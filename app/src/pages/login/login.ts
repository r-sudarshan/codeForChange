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
  account: { username: string, password: string } = {
    username: "code4change",
    password: "ChangeMe123!"
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

  doLogin() {/*
    this.loginService.login(this.account).then(result => 
                {
                  this.responseData = result;
                  localStorage.setItem('userData', JSON.stringify(this.responseData));
                  this.navCtrl.push(MenuPage);
                }, 
              (err) => {
                console.log("user not found!");
                document.getElementById("LoginResult").innerHTML = "HttpResponse: " + JSON.stringify(err);
                document.getElementById("LoginMessage").innerHTML = JSON.stringify("not working!");
              }
            );*/
            this.loginService.login(this.account).subscribe(resp => {
              console.log(resp)
            });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}