import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-report-all-comp',
  templateUrl: 'report-all-comp.html',
})
export class ReportAllCompPage {

  type : any = '';
  object : any = '';
  vehicles : any  = [] ;
  persons  : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private rest : RestProvider, 
    private codes : CodesProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportAllCompPage');
    this.getVehicles();
    this.getPersons();
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

  // (click)="navCtrl.push('ReportFullPage',{'person':this.driver})"

  getPersons() {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          this.persons = resp['data'];
        }
    });
  }
}
