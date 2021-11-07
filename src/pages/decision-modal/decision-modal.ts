import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
 


@IonicPage()
@Component({
  selector: 'page-decision-modal',
  templateUrl: 'decision-modal.html',
})
export class DecisionModalPage {


  options : any = '';
  showAllot : boolean = true;
  vehicles : any = '';

  constructor(private viewController : ViewController,
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
      this.vehicles = JSON.parse(localStorage.getItem("vehicle_details"));

      if(this.vehicles['driver_details'] == undefined || this.vehicles['driver_details'] == null)
        this.showAllot = true;
      else 
        this.showAllot = false;


  }

  presentModal() {
    if(this.options == 'change'){
    let changeDriverModal = this.modalCtrl.create('ChangeDriverPage');
    changeDriverModal.present();
  }else if(this.options == 'allot'){
    let changeDriverModal = this.modalCtrl.create('AllotDriverPage');
    changeDriverModal.present();
  }else if(this.options == 'remove'){
    let changeDriverModal = this.modalCtrl.create('RemoveDriverPage');
    changeDriverModal.present();
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecisionModalPage');
  }

  exitModal(){
    this.viewController.dismiss();
  }


}
