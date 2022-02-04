import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-vehicle-details',
  templateUrl: 'vehicle-details.html',
})
export class VehicleDetailsPage {

  isShown : boolean = false;
  vehicle : any = '';
  workdetails : any = [];
  driverhistory : any = [];
  vehicleworkdetails : any = [];
  paid : number = 0;
  unpaid : number = 0;
  total : number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl : ModalController, 
    private rest : RestProvider, private codes : CodesProvider) {
    this.vehicle = this.navParams.get("vehicle");
  }

  getVehicleWorkDetails(){
    var data = {
      "vehicle_id":this.vehicle['vehicle_id']
    };

    this.rest.post(this.codes.GET_BILL_FOR_VEHICLE, data).then(resp => {
      this.vehicleworkdetails = resp['data'];
      console.error(JSON.stringify(this.vehicleworkdetails));
    });
  }

  getworkdetails(){
    var data = {
      "vehicle_id":this.vehicle['vehicle_id']
    };

    this.rest.post(this.codes.GET_UPDATE_WORK_DETAILS, data).then(resp => {
      this.workdetails = resp['data'];

      for(let i=0;i<this.workdetails.length;i++){
        this.workdetails[i]['selected'] = false;
      }

    });
  }

  getVehicleDriverHistory() {
    var data = {
      "vehicle_id":this.vehicle['vehicle_id']
    };

    this.rest.post(this.codes.GET_VEHICLE_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.driverhistory = resp['data'];

        // for(let i=0;i<this.driverhistory.length;i++){
        //   if(this.driverhistory[i]['is_remove'] == '0'){
        //     this.vehicle_number = this.driverhistory[i]['vehicle']['vehicle_number'];
        //     this.vehicle_joining_date = this.driverhistory[i]['vehicle']['vehicle_start_date'];
        //   }
        // }

      }
    });
  }

  getVehicleDetails() {
    var data = {
      "vehicle_id":this.vehicle['vehicle_id']
    };

    this.rest.post(this.codes.GET_VEHICLE_BY_VEHICLE_ID, data).then(resp => {
      this.vehicle =  resp['data'];
    });


    
  }

  getBillSummary() {
    var data = {
      "vehicle_id":this.vehicle['vehicle_id']
    };

    this.rest.post(this.codes.GET_BILL_SUMMARY, data).then(resp => {
      var det = resp['data'];

      for(let i=0;i<det.length;i++){
        if(det[i]['status'] == 'PAID') {
          this.paid = Number(det[i]['count']);
        }
         else {
           this.unpaid = Number(det[i]['count']);
         }
      }

      this.total = this.unpaid + this.paid;

    });
    
  }
  
  ionViewWillEnter(){
    this.getworkdetails();
    this.getVehicleDriverHistory();
    this.getVehicleWorkDetails();
    this.getBillSummary();
    this.getVehicleDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleDetailsPage');
  }

  getItems($event){

  }

  goToModal(){
    localStorage.setItem("vehicle_details",JSON.stringify(this.vehicle));
    let profileModal = this.modalCtrl.create('DecisionModalPage');
    profileModal.present();

    profileModal.onDidDismiss(resp=> {
      this.ionViewWillEnter();
    });
  }

  openExchangeModal() {
    let exchangeModal = this.modalCtrl.create('ExchangeModalPage',{'vehicle':this.vehicle});
    exchangeModal.present();
  }

  showMore() {
    if(this.isShown) {
      document.getElementById("fa-arrow-circle-down").classList.remove("fa-arrow-circle-up");
      document.getElementById("fa-arrow-circle-down").classList.add("fa-arrow-circle-down");
    } else {
      document.getElementById("fa-arrow-circle-down").classList.remove("fa-arrow-circle-down");
      document.getElementById("fa-arrow-circle-down").classList.add("fa-arrow-circle-up");

    }
    this.isShown = !this.isShown;
  }

  selectThis(i) {
    document.getElementById(i).classList.toggle("selected");
  }

  openDriverDocument() {
    this.navCtrl.push('DriverDocumentPage',{"driver":this.vehicle['driver_details']});
  }

  openVehicleDocument() {
    this.navCtrl.push('VehicleDocumentPage',{"vehicle":this.vehicle})
  }

}
