import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';



@IonicPage()
@Component({
  selector: 'page-vehicle-bill-report',
  templateUrl: 'vehicle-bill-report.html',
})
export class VehicleBillReportPage {

  problem : any = '';
  problems : any = [];
  shops : any = [];
  vehicles : any = [];
  html : any = '';
  vehicle_id : any = '';
  from_date : any ='';
  to_date : any = '';
  worker_id : any = '';
  dateMulti: string[];
  dt = new Date(2000,1,1);
  displayCalendar : boolean = false;
  dateRange: any =  { from: '', to: '' };
  downloadURL : any = '';

  apiendpoint : any = '';
  downloadendpoint : any = '';

  optionsMulti: CalendarComponentOptions = {
    pickMode: 'range',
    from:this.dt,
    to:0,
    showMonthPicker:true,
    showToggleButtons:true,
    color:'primary'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private rest : RestProvider,
    private codes : CodesProvider, private modalCtrl : ModalController, private viewCont : ViewController) {
      if(this.navParams.get("vehicle") != null || this.navParams.get("vehicle") != undefined) {
        this.vehicle_id = this.navParams.get("vehicle")['vehicle_id'];
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleBillReportPage');
  }


  ionViewWillEnter(){
    this.getPersons();
    this.getVehicles();
  }

  openCalendar() {
    this.displayCalendar = true;
  }

  getPersons(){
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":userinfo[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER, data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        var persons = resp['data'];
        for(let i=0;i<persons.length;i++){
          if(persons[i]['worker_type'] == 'shop' || persons[i]['worker_type'] == 'mechanic') {
            this.shops.push(persons[i]);
          }
        }
      }
    });
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

  generateReport(){
    this.displayCalendar = false;

    if(this.vehicle_id == 0)
      this.vehicle_id = null;

    if(this.worker_id == 0)
      this.worker_id = null;


    var data = {
      "worker_id":this.worker_id,
      "vehicle_id":this.vehicle_id,
      "date_from":this.dateRange['from'],
      "date_to":this.dateRange['to']
    };
    this.rest.post(this.codes.VEHICLE_BILL_REPORT,data).then(resp => {
      console.log(resp);
      document.getElementById("report").innerHTML = resp['data'];
      this.html = resp['data'];
    })

    this.downloadURL = this.codes.VEHICLE_BILL_REPORT_DOWNLOAD+"?vehicle_id="+this.vehicle_id+"&worker_id="+this.worker_id+"&date_from="+this.dateRange['from']+"&date_to="+this.dateRange['to'];
  
  }

  dismiss(){
    this.viewCont.dismiss();
  }


}
