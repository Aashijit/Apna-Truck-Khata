import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-payment',
  templateUrl: 'view-payment.html',
})
export class ViewPaymentPage {

  payment : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private view : ViewController) {
    this.payment = this.navParams.get("payment");
    console.error(JSON.stringify(this.payment));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPaymentPage');
  }

  close(){
    this.view.dismiss();
  }

}