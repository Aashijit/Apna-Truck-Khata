import { Push } from '@ionic-native/push';
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
  month : any = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthDays : any = [31,27,31,30,31,30,31,31,30,31,30,31];
  yearFrom : any = 1900;
  currentYear : any = null;
  currentMonth : any = 0;
  allYears : any = [];

  selectedMonth : any = 0;

  apiendpoint : any = '';
  downloadendpoint : any = '';
  isfullreport : boolean = true;


  reportHtml : any = '';

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

      if(this.navParams.get("isfullreport") != null || this.navParams.get("isfullreport") != undefined) {
        this.isfullreport = this.navParams.get("isfullreport");
      }

      var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
      this.srth_id = json[0]['srth_id'];

      var currentDate = new Date();
      this.currentMonth = this.month[currentDate.getMonth()];
      this.currentYear = currentDate.getFullYear();

      for(let i=this.currentYear;i>=this.yearFrom;i--) {
        this.allYears.push(i);
      }
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

  generateReport() {
    this.displayCalendar = false;

    if (this.worker_id == 0)
      this.worker_id = null;

    var data = {};
    if (this.isfullreport) {
      data = {
        "worker_id": this.worker_id,
        "date_from": this.dateRange['from'],
        "date_to": this.dateRange['to'],
        "srth_id": this.srth_id
      };
    } else {
      data = {
        "worker_id": this.worker_id,
        "srth_id": this.srth_id,
        "date_from":this.currentYear+"-"+this.getMonthIndex(this.currentMonth)+"-1",
        "date_to":this.currentYear+"-"+this.getMonthIndex(this.currentMonth)+"-"+this.monthDays[this.getMonthIndex(this.currentMonth) - 1]
      }
    }
    this.rest.post(this.codes.FULL_REPORT, data).then(resp => {
      console.log(resp);
      document.getElementById("report").innerHTML = resp['data'];
      // this.reportHtml = resp['data'];
      this.zone.run(() => {
        console.log("screen refreshed");
      });
      // this.html = resp['data'];
    })
    if (this.isfullreport) {
      this.downloadURL = this.codes.FULL_REPORT_DOWNLOAD + "?worker_id=" + this.worker_id + "&date_from=" + this.dateRange['from'] + "&date_to=" + this.dateRange['to'];
    } else {
      this.downloadURL = this.codes.FULL_REPORT_DOWNLOAD + "?worker_id=" + this.worker_id + "&date_from=" + this.currentYear+"-"+this.getMonthIndex(this.currentMonth)+"-1" + "&date_to=" + this.currentYear+"-"+this.getMonthIndex(this.currentMonth)+"-"+this.monthDays[this.getMonthIndex(this.currentMonth) - 1];
    }
  }

  getMonthIndex(monthString) {
    for(let i=0;i<this.month.length;i++) {
      if(this.month[i] == monthString)
        return (i+1);
    }
    return 0;
  }

  dismiss(){
    this.viewCont.dismiss();
  }
 
}