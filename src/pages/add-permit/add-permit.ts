import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddPermitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-permit',
  templateUrl: 'add-permit.html',
})
export class AddPermitPage {

  constructor(private viewController : ViewController,
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPermitPage');
  }

  exitModal(){
    this.viewController.dismiss();
  }

}
