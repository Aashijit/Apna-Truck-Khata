import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';


@IonicPage()
@Component({
  selector: 'page-report-full',
  templateUrl: 'report-full.html',
})
export class ReportFullPage {

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
  srth_id : any = '';

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
    private codes : CodesProvider, private modalCtrl : ModalController, private viewCont : ViewController,
    private zone : NgZone) {
      
      if(this.navParams.get("person") != null || this.navParams.get("person") != undefined) {
        this.worker_id = this.navParams.get("person")['worker_id'];
      }

      var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
      this.srth_id = json[0]['srth_id'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportFullPage');
    if(this.navParams.get('worker_type') == 'driver') {
      this.getDrivers();  
    } else {
      this.getPersons();
    }
  }

  getDrivers(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          var data = resp['data'];
          for(let i=0;i<data.length;i++) {
            if(data[i]['worker_type'] == 'driver')
              this.shops.push(data[i]);
          }
        }
    });
  }

  getPersons(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          this.shops = resp['data'];
        }
    });
  }

  openCalendar() {
    this.displayCalendar = true;
  }


  generateReport(){
    this.displayCalendar = false;

    if(this.worker_id == 0)
      this.worker_id = null;


    var data = {
      "worker_id":this.worker_id,
      "date_from":this.dateRange['from'],
      "date_to":this.dateRange['to'],
      "srth_id":this.srth_id
    };
    this.rest.post(this.codes.FULL_REPORT,data).then(resp => {
      console.log(resp);
      document.getElementById("report").innerHTML = resp['data'];
      this.zone.run(() => {
        console.log("screen refreshed");
      });
      // this.html = resp['data'];
    })

    this.downloadURL = this.codes.FULL_REPORT_DOWNLOAD+"?worker_id="+this.worker_id+"&date_from="+this.dateRange['from']+"&date_to="+this.dateRange['to'];
  
  }

  dismiss(){
    this.viewCont.dismiss();
  }
 

}
