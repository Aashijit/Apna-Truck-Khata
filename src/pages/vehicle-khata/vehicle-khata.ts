import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-vehicle-khata',
  templateUrl: 'vehicle-khata.html',
})
export class VehicleKhataPage {

  vehicles : any = [];
  vehicledrivers : any = [];
  vehiclenodrivers : any = [];
  displaycontrol : Boolean = false;
  isselect : any = '3';

  constructor(private alertCtrl : AlertController,
    public navCtrl: NavController, public navParams: NavParams, private rest : RestProvider, private codes : CodesProvider) {

    // var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    // var data = {
    //   "vehicle_owner_srth_id":userinfo[0]['srth_id']
    // };
    // this.rest.post(this.codes.GET_VEHICLE_DETAILS,data).then(resp => {
    //   if(resp['_ReturnCode'] == '0') {
    //     this.vehicles = resp['data'];

    //     for(let i=0;i<this.vehicles.length;i++) {
    //       this.vehicles[i]['displaycontrol'] = false;
    //       this.vehicles[i]['selected'] = false;

    //       if(this.vehicles[i]['driver_details'] != null || this.vehicles[i]['vehicle_details'] != undefined) {
    //         this.vehicledrivers.push(this.vehicles[i]);
    //       }
    //       else {
    //         this.vehiclenodrivers.push(this.vehicles[i]);
    //       }


    //     }

    //   }
    // });
  }
  select(id){
    this.isselect = id;

  }

  getVehicles(){
    this.vehicles = [];
    this.vehicledrivers = [];
    this.vehiclenodrivers = [];
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "vehicle_owner_srth_id":userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_VEHICLE_DETAILS,data).then(resp => {
      if(resp['_ReturnCode'] == '0') {
        this.vehicles = resp['data'];
        for(let i=0;i<this.vehicles.length;i++) {
          this.vehicles[i]['displaycontrol'] = false;
          this.vehicles[i]['selected'] = false;

          if(this.vehicles[i]['driver_details'] != null && this.vehicles[i]['vehicle_details'] != undefined) {
            this.vehicledrivers.push(this.vehicles[i]);
          }
          else {
            this.vehiclenodrivers.push(this.vehicles[i]);
          }

        }

      }
    });
  }

  presentConfirmDelete(vd) {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: "Are you sure you want to delete this vehicle?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteVehicle(vd);
          }
        }
      ]
    });
    alert.present();
  }

  deleteVehicle(vd){
  
    var data= {
      "vehicle_id":vd['vehicle_id']
    };

    this.rest.post(this.codes.DELETE_VEHICLE_DETAILS, data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
          this.getVehicles();
      }
    })
  }


  ionViewWillEnter(){
    this.vehicles = [];
    this.vehicledrivers = [];
    this.vehiclenodrivers = [];
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "vehicle_owner_srth_id":userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_VEHICLE_DETAILS,data).then(resp => {
      if(resp['_ReturnCode'] == '0') {
        this.vehicles = resp['data'];

        for(let i=0;i<this.vehicles.length;i++) {
          this.vehicles[i]['displaycontrol'] = false;
          this.vehicles[i]['selected'] = false;

          if(this.vehicles[i]['driver_details'] != null || this.vehicles[i]['vehicle_details'] != undefined) {
            this.vehicledrivers.push(this.vehicles[i]);
          }
          else {
            this.vehiclenodrivers.push(this.vehicles[i]);
          }


        }

      }
    });
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleKhataPage');
  }

  selectedvehicle(vh) { 

    for(let i=0;i<this.vehicles.length;i++) {
      this.vehicles[i]['displaycontrol'] = false;
      this.vehicles[i]['selected'] = false;
    }

    vh['displaycontrol'] = true;
    vh['selected'] = true;
  }

  openAddVehiclePage() {
    this.navCtrl.push('AddVehiclePage',{'updatevehicle':'false','updateworkpart':'false'});
  }

  openVehicleDetails(vh) {
    this.navCtrl.push('VehicleDetailsPage',{'vehicle':vh});
  }

  updateVehicleDetails(vh) {
    this.navCtrl.push('AddVehiclePage',{'updateworkpart':'false','updatevehicle':'true','vehicle':vh});
  }

  updateWorkPart(vh) {
    this.navCtrl.push('AddVehiclePage',{'updateworkpart':'true','updatevehicle':'false','vehicle':vh});
  }

}
