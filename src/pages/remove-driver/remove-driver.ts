import { RestProvider } from './../../providers/rest/rest';
import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-remove-driver',
  templateUrl: 'remove-driver.html',
})
export class RemoveDriverPage {

  vehicle : any = '';

  driver_end_date : any = '';
  driver_end_details : any = '';
  driver_end_km : any ='';
  vehicle_id : any ='';
  driver_id : any = ''; 
  driver_start_date : any = '';
  driver_start_details :any = ''; 
  driver_start_km : any = '';


  constructor(private viewController : ViewController,public navCtrl: NavController, public navParams: NavParams,
    private codes : CodesProvider, private message : MessageProvider, private rest : RestProvider,
     private modalCtrl : ModalController) {

    this.vehicle = JSON.parse(localStorage.getItem("vehicle_details"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemoveDriverPage');
  }



  exitModal(){
    this.viewController.dismiss();
  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.driver_end_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }


  save(){
    var data = {
      "type":"remove",
      "vehicle_id":this.vehicle['vehicle_id'],
      "driver_id":this.driver_id,
      "driver_end_date":this.driver_end_date,
      "driver_end_details":this.driver_end_details,
      "driver_end_km":this.driver_end_km
    };

    this.rest.post(this.codes.UPDATE_VEHICLE_DRIVER,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have removed the driver successfully!');
        this.navCtrl.pop();
      }
    }); 
  }


}
