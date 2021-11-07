import { RestProvider } from './../../providers/rest/rest';
import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-change-driver',
  templateUrl: 'change-driver.html',
})
export class ChangeDriverPage {

  vehicle : any = '';

  driver_end_date : any = '';
  driver_end_details : any = '';
  driver_end_km : any ='';
  vehicle_id : any ='';
  driver_id : any = ''; 
  driver_start_date : any = '';
  driver_start_details :any = ''; 
  driver_start_km : any = '';

  drivers : any = [];
  

  constructor(private viewController : ViewController,public navCtrl: NavController, public navParams: NavParams,
    private codes : CodesProvider, private message : MessageProvider, private rest : RestProvider) {

    this.vehicle = JSON.parse(localStorage.getItem("vehicle_details"));

    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

      var data = {
        "srth_id":json[0]['srth_id']
      };

      this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
          if(resp['_ReturnCode'] == '0'){

            var dt = resp['data'];

            for(let i=0;i<dt.length;i++){
              if(dt[i]['worker_type'] == 'driver'){
                this.drivers.push(dt[i]);
              }
            }
          }
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeDriverPage');
  }

  exitModal(){
    this.viewController.dismiss();
  }

  save(){
    var data = {
      "type":"change",
      "vehicle_id":this.vehicle['vehicle_id'],
      "driver_id":this.driver_id,
      "driver_start_details":this.driver_start_details,
      "driver_start_km":this.driver_start_km,
      "driver_start_date":this.driver_start_date,
      "driver_end_date":this.driver_end_date,
      "driver_end_details":this.driver_end_details,
      "driver_end_km":this.driver_end_km
    };

    this.rest.post(this.codes.UPDATE_VEHICLE_DRIVER,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have changed the driver to this vehicle successfully!');
        this.navCtrl.pop();
      }
    }); 
  }

}
