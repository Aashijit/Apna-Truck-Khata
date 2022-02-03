import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-fatal-error',
  templateUrl: 'fatal-error.html',
})
export class FatalErrorPage {

  message : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.message = this.navParams.get("message");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FatalErrorPage');
  }

}
