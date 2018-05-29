import { AchievementProvider } from './../../providers/achievement-service/achievement-service';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

/**
 * Generated class for the AchievementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-achievement',
  templateUrl: 'achievement.html',
})
export class AchievementPage {

  public achivements = []

  constructor(public achievementService:AchievementProvider,public loginService:LoginServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.achievementService.getAchievements(this.loginService.personID).subscribe((response) => {
      console.log(JSON.stringify(response))
      let e = response["d"]["RetData"]["Tbl"]["Rows"];
          e.forEach(element => {
            let td=moment(element.TargetDate);
            let r={Subject:element.Subject, Remarks:element.Remarks, Date:td};
            this.achivements.push(r)
          });
    },
    (error) => {
      console.log("Error"+error.message);
    })
  }
}
