import { WishAddPage } from './../wish-add/wish-add';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WishServiceProvider } from './../../providers/wish-service/wish-service';

@IonicPage()
@Component({
  selector: 'page-wishes',
  templateUrl: 'wishes.html',
})
export class WishesPage {

  items: any[];

  constructor(public WishService: WishServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishesPage');
    this.WishService.load();
  }

  itemSelected(item) {
    alert(item.text);
  }

  wishAdd() {
    this.navCtrl.push(WishAddPage)
  }
}
