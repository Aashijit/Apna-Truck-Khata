import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddMoreModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-more-modal',
  templateUrl: 'add-more-modal.html',
})
export class AddMoreModalPage {

  constructor(private viewController : ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMoreModalPage');
  }

  exitModal(){
    this.viewController.dismiss();
  }

}
