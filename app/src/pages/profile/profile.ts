import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  public userProfile : {
    Title: string,
    FirstName: string,
    MiddleName: string,
    LastName: string,
    DisplayName: string,
    Gender: string, 
    DateOfBirth: string,
    Telephone: string,
    Mobile: string,
    Email: string,
    FullAddress: string
  } = {
    Title: "",
    FirstName: "",
    MiddleName: "",
    LastName: "",
    DisplayName: "",
    Gender: "", 
    DateOfBirth: "",
    Telephone: "",
    Mobile: "",
    Email: "",
    FullAddress: ""
  }
  constructor(public profileService: ProfileServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.profileService.getUserProfileInfo().subscribe(
      (response) => {
        this.userProfile.FirstName = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["FirstName"];
        this.userProfile.MiddleName = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["MiddleName"];
        this.userProfile.LastName = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["LastName"];
        this.userProfile.DisplayName = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["DisplayName"];
        this.userProfile.Gender = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["Gender"];
        // this.userProfile.Gender = "m";
        this.userProfile.DateOfBirth = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["BirthDate"];
        this.userProfile.Telephone = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["Tel1"];
        this.userProfile.Mobile = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["Mobile"];
        this.userProfile.Email = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["Email1"];
        this.userProfile.FullAddress = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["FullAddress"];
      },
      (error) => {
        console.log("Error"+error.message);
      }
    )
    console.log('ionViewDidLoad ProfilePage');
  }

}
