import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-exchange-modal',
  templateUrl: 'exchange-modal.html',
})
export class ExchangeModalPage {

  vehicle_id : any = '';
	exchange_vehicle_id : any = '';
	exchange_date: any = '';
	item_id : any = '';
	item_name : any = '';
	item_number : any = '';
	item_id_2 : any = '';
	item_name_2 : any = '';
	item_number_2 : any = '';
	last_maint_id : any = '';
	last_maint_ts : any = '';
	opt_counter : any = '';
  vehicles : any = [];
  vehicle : any = '';

  
  constructor(private viewController : ViewController,
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
     private codes : CodesProvider, private rest : RestProvider, private msg : MessageProvider) {
       this.vehicle = this.navParams.get("vehicle");
       this.getVehicles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExchangeModalPage');
  }


  exitModal(){
    this.viewController.dismiss();
  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.exchange_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  saveExchangeModel() {
    var dt = {
      "vehicle_id":this.vehicle['vehicle_id'],
      "exchange_vehicle_id":this.exchange_vehicle_id,
      "exchange_date":this.exchange_date, 
      "item_id":this.item_name, 
      "item_name":'', 
      "item_number":'', 
      "item_id_2":this.item_name_2,
      "item_name_2":'', 
      "item_number_2":'',
      "last_maint_id":'srth_app',
      "opt_counter":'0'
    };  

    this.rest.post(this.codes.SAVE_EXCHANGE_PART,dt).then(resp => {
      if(resp['_ReturnCode'] == '0') {
        this.msg.displayToast('Exchange part is saved !!!');
        this.exchange_vehicle_id = '';
        this.item_id = '';
        this.item_id_2 = '';
        this.exchange_date = '';
        return;
      }
    });


  }

  openPartsWorkModal(id){
    let mdl = this.modalCtrl.create('PartsWorkModalPage');

    mdl.onDidDismiss(data => {
      if(id == '1') {
      var work_part = JSON.parse(localStorage.getItem(this.codes.SELECTED_WORK_PART));
      this.item_name = work_part['name'];
      } else if(id == '2') {
        var work_part = JSON.parse(localStorage.getItem(this.codes.SELECTED_WORK_PART));
        this.item_name_2 = work_part['name'];  
      }
    });

    mdl.present();
  
  }

  getVehicles(){
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "vehicle_owner_srth_id":userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_VEHICLE_DETAILS,data).then(resp => {
      if(resp['_ReturnCode'] == '0') {
        this.vehicles = resp['data'];
      }
    });
  }


}
