import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-other-document-name',
  templateUrl: 'edit-other-document-name.html',
})
export class EditOtherDocumentNamePage {

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
    this.viewController.dismiss(this.note);
  }

}
