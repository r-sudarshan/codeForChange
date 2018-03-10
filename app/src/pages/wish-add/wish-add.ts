import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WishServiceProvider } from './../../providers/wish-service/wish-service';


@IonicPage()
@Component({
  selector: 'page-wish-add',
  templateUrl: 'wish-add.html',
})
export class WishAddPage {

  item: any[];
  constructor(public WishService: WishServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishAddPage');
  }

  submitWish() {
    this.WishService.add();
  }
}
