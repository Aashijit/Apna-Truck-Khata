import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details-modal',
  templateUrl: 'details-modal.html',
})
export class DetailsModalPage {

  note : any = '';
  date : any = new Date();

  constructor(private viewController : ViewController,
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private codes : CodesProvider) {

      // this.navParams.get("note");

      this.note = this.navParams.get("details");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsModalPage');
  }

  exitModal(){
    this.viewController.dismiss();
  }

  storetext() {
    localStorage.setItem(this.codes.DETAILS, this.note);
    this.viewController.dismiss();
  }

}
