import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar';


@IonicPage()
@Component({
  selector: 'page-document-date-report',
  templateUrl: 'document-date-report.html',
})
export class DocumentDateReportPage {

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentBillReportPage');
  }

  generateReport(){
    this.displayCalendar = false;

    if(this.worker_id == 0)
      this.worker_id = null;


    var data = {
      "date_from":this.dateRange['from'],
      "date_to":this.dateRange['to']
    };
    this.rest.post(this.codes.DOCUMENT_DATE_REPORT,data).then(resp => {
      console.log(resp);
      document.getElementById("report").innerHTML = resp['data'];
      this.html = resp['data'];
    })

    this.downloadURL = this.codes.DOCUMENT_DATE_REPORT_DOWNLOAD+"?worker_id="+this.worker_id+"&date_from="+this.dateRange['from']+"&date_to="+this.dateRange['to'];
  
  }

  dismiss(){
    this.viewCont.dismiss();
  }

  openCalendar() {
    this.displayCalendar = true;
  }

 
}
