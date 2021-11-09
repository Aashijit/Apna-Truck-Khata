import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-view-transaction',
  templateUrl: 'view-transaction.html',
})
export class ViewTransactionPage {

  header : any = '';
  comp : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private view : ViewController) {
    this.comp = this.navParams.get("complaint");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewTransactionPage');
  }

  close(){
    this.view.dismiss();
  }

}
