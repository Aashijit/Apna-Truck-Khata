import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';


@IonicPage()
@Component({
  selector: 'page-report-modal',
  templateUrl: 'report-modal.html',

})
export class ReportModalPage {
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

  reporttype : any = '';

  // type: 'object'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
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

      this.reporttype = this.navParams.get("name");

      if(this.reporttype == 'shopbuyreport'){
        this.apiendpoint = this.codes.SHOP_BUY_REPORT;
        this.downloadendpoint = this.codes.SHOP_BUY_REPORT_DOWNLOAD;
        this.getShops();
      }
      else if(this.reporttype == 'shopbillreport') {
        this.apiendpoint = this.codes.SHOP_BILL_REPORT;
        this.downloadendpoint = this.codes.SHOP_BILL_REPORT_DOWNLOAD;
        this.getShops();
      } 
      else if(this.reporttype == 'mechanicbuyreport') {
        this.apiendpoint = this.codes.MECHANIC_BUY_REPORT;
        this.downloadendpoint = this.codes.MECHANIC_BUY_REPORT_DOWNLOAD;
        this.getMechanic();
      }else if(this.reporttype == 'mechanicbillreport') {
        this.apiendpoint = this.codes.MECHANIC_BILL_REPORT;
        this.downloadendpoint = this.codes.MECHANIC_BILL_REPORT_DOWNLOAD;
        this.getMechanic();
      }

      this.getVehicles();
  }

  dismiss(){
    this.viewCont.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportModalPage');
  }


  openCalendar() {
    this.displayCalendar = true;
  }
 

  generateReport(){
    this.displayCalendar = false;
    if(this.reporttype == 'shopbuyreport' || this.reporttype == 'shopbillreport') {
    if(this.worker_id == 0)
      this.worker_id = null;
    if(this.vehicle_id == 0)
      this.vehicle_id = null;
    var data = {
      "worker_id":this.worker_id,
      "vehicle_id":this.vehicle_id,
      "date_from":this.dateRange['from'],
      "date_to":this.dateRange['to']
    };
    this.rest.post(this.apiendpoint,data).then(resp => {
      console.log(resp);
      document.getElementById("report").innerHTML = resp['data'];
      this.html = resp['data'];
    })

    this.downloadURL = this.downloadendpoint+"?worker_id="+this.worker_id+"&vehicle_id="+this.vehicle_id+"&date_from="+this.dateRange['from']+"&date_to="+this.dateRange['to'];
  }
  else if(this.reporttype == 'mechanicbuyreport' || this.reporttype == 'mechanicbillreport') {
    if(this.worker_id == 0)
    this.worker_id = null;
  if(this.vehicle_id == 0)
    this.vehicle_id = null;
  var data = {
    "worker_id":this.worker_id,
    "vehicle_id":this.vehicle_id,
    "date_from":this.dateRange['from'],
    "date_to":this.dateRange['to']
  };
  this.rest.post(this.apiendpoint,data).then(resp => {
    console.log(resp);
    document.getElementById("report").innerHTML = resp['data'];
    this.html = resp['data'];
  })

  this.downloadURL = this.downloadendpoint+"?worker_id="+this.worker_id+"&vehicle_id="+this.vehicle_id+"&date_from="+this.dateRange['from']+"&date_to="+this.dateRange['to'];
  }
  }



  getShops(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){

          var dt = resp['data'];

          for(let i=0;i<dt.length;i++){
            if(dt[i]['worker_type'] == 'shop'){
              this.shops.push(dt[i]);
            }
          }
        }
    });
  }

  getMechanic(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){

          var dt = resp['data'];

          for(let i=0;i<dt.length;i++){
            if(dt[i]['worker_type'] == 'mechanic'){
              this.shops.push(dt[i]);
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

}