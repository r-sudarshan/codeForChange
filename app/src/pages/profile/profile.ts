import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime, FabContainer, FabButton } from 'ionic-angular';
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

  isInputReadOnly: boolean;
  isSaveDisabled: boolean;
  
  constructor(public profileService: ProfileServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.isInputReadOnly = true;
    this.isSaveDisabled = true;
  }

  isReadOnly() {
    return this.isInputReadOnly;
  }

  isSaveButtonDisabled() {
    return this.isSaveDisabled;
  }

  enableEdit(fab: HTMLDivElement) {
    this.isInputReadOnly = false;
    fab.style.visibility = "hidden";
  }

  ionViewDidLoad() {
    this.profileService.getUserProfileInfo().subscribe(
      (response) => {
        this.userProfile.FirstName = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["FirstName"];
        this.userProfile.MiddleName = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["MiddleName"];
        this.userProfile.LastName = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["LastName"];
        this.userProfile.DisplayName = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["DisplayName"];
        // this.userProfile.Gender = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["Gender"];
        this.userProfile.Gender = "f";
        // this.userProfile.DateOfBirth = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["BirthDate"];
        this.userProfile.DateOfBirth = new Date("01 Jan 2010").toDateString();
        console.log("DATE: " + new Date("01 Jan 2010").toDateString);
        console.log("DATE: " + new Date("01 Jan 2010").toLocaleString);
        console.log("DATE: " + new Date("01 Jan 2010").toISOString);
        this.userProfile.Telephone = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["Tel1"];
        this.userProfile.Mobile = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["Mobile"];
        this.userProfile.Email = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["Email1"];
        this.userProfile.FullAddress = response["d"]["RetData"]["Tbl"]["Rows"]["0"]["FullAddress"];
      },
      (error) => {
        console.log("Error"+error.message);
      }
    )
  }

  onIonChange(fieldName, edit) {
    switch(fieldName) {
      case "FirstName":
        if (this.userProfile.FirstName != edit.value) {
          this.userProfile.FirstName = edit.value;
          this.isSaveDisabled = false;
        }
        break;
      case "MiddleName":
        if (this.userProfile.MiddleName != edit.value) {
          this.isSaveDisabled = false;
        }
        break;
      case "LastName":
        if (this.userProfile.LastName != edit.value) {
          this.isSaveDisabled = false;
        }
        break;
      case "DisplayName":
        if (this.userProfile.DisplayName != edit.value) {
          this.isSaveDisabled = false;
        }
        break;
      case "Gender":
        if (this.userProfile.Gender != edit) {
          this.isSaveDisabled = false;
        }
        break;
      case "DateOfBirth":
        if (this.userProfile.DateOfBirth != edit.toString()) {
          this.isSaveDisabled = true;
        }
        break;
      case "Telephone":
        if (this.userProfile.Telephone != edit.value) {
          this.isSaveDisabled = false;
        }
        break;
      case "Mobile":
        if (this.userProfile.Mobile != edit.value) {
          this.isSaveDisabled = false;
        }
        break;
      case "Email":
        if (this.userProfile.Email != edit.value) {
          this.isSaveDisabled = false;
        }
        break;
      case "FullAddress":
        if (this.userProfile.FullAddress != edit.value) {
          this.isSaveDisabled = false;
        }
        break;
    }
  }
}
