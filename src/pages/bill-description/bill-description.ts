import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bill-description',
  templateUrl: 'bill-description.html',
})
export class BillDescriptionPage {

  vari : any = '';
  isSelectedBill : boolean = false;


  constructor(private viewController : ViewController,
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BillDescriptionPage');
  }

  change($event){
    this.vari = $event;
    this.isSelectedBill = true;

  }

  openBillDetailsPage() {
    this.navCtrl.push('BillDetailsPage');
  }
  openDetailPopup() {
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage');
    detailsModalPage.present();
  }

  openCameraPopup() {
    let cameraModalPage = this.modalCtrl.create('CameraModalPage');
    cameraModalPage.present();
  }

  

}
