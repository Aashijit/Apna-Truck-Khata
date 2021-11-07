import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-allot-driver',
  templateUrl: 'allot-driver.html',
})
export class AllotDriverPage {

  vehicle : any = '';
  drivers : any = [];

  vehicle_id : any = '';
  driver_id : any = '';
  driver_start_details : any = '';
  driver_start_km : any = '';
  driver_start_date : any = '';

  constructor(private viewController : ViewController,public navCtrl: NavController, public navParams: NavParams, 
    private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider) {
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

  save(){
    var data = {
      "type":"allot",
      "vehicle_id":this.vehicle['vehicle_id'],
      "driver_id":this.driver_id,
      "driver_start_details":this.driver_start_details,
      "driver_start_km":this.driver_start_km,
      "driver_start_date":this.driver_start_date
    };

    this.rest.post(this.codes.UPDATE_VEHICLE_DRIVER,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have allocated this vehicle successfully!');
        this.navCtrl.pop();
      }
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllotDriverPage');
  }


  exitModal(){
    this.viewController.dismiss();
  }

}
