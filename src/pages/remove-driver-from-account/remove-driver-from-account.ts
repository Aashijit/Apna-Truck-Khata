import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-remove-driver-from-account',
  templateUrl: 'remove-driver-from-account.html',
})
export class RemoveDriverFromAccountPage {

  constructor(private viewController : ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemoveDriverFromAccountPage');
  }

  exitModal(){
    this.viewController.dismiss();
  }

}
