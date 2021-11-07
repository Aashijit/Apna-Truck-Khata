import { RestProvider } from './../../../src/providers/rest/rest';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddDocumentBillPage } from '../add-document-bill/add-document-bill';
import { ThrowStmt } from '@angular/compiler';


@IonicPage()
@Component({
  selector: 'page-document-renewal',
  templateUrl: 'document-renewal.html',
})
export class DocumentRenewalPage {

  // UPDATE_DOCUMENT_BILL

  gender : any = '';
  myDate : any = '';
  vari : any = '';
  isSelectedBill : boolean = false;
  persons : any = [];

  vehicles : any = [];


  bill_id : any = null;
  worker_id : any = '';
  person_shop_name : any = '';
  srth_id : any = '';
  vehicle_id : any = '';
  km_reading : any= '';
  bill_date : any = '';
  worker_type :any = '';
  total_bill : any = 0;
  bill_image_id :any = '';
  bill_details : any = '';
  last_maint_id : any ='';
  opt_counte : any = '';
  expiry_date : any = '';
  total_bill_full : Number = 0;

  bills : any = [];

  details : any = [];

  is_update : boolean = false;

  document : any = '';

  img : any = null;




  constructor(public navCtrl: NavController, public navParams: NavParams, private codes : CodesProvider, private rest : RestProvider, 
    private modalCtrl : ModalController) {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    this.document = this.navParams.get("document");
    console.log(JSON.stringify(this.document));

    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){

          var dt = resp['data'];

          for(let i=0;i<dt.length;i++){
            if(dt[i]['worker_type'] == 'documents' || dt[i]['worker_type'] == 'insurance'){
              this.persons.push(dt[i]);
            }
          }
        }
    });


    if(this.bill_id == null)
    {
      this.rest.post(this.codes.GET_LAST_BILL_ID,{}).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          this.bill_id = resp['data'];
          this.bill_id = Number(this.bill_id) + 1;
        }
      });
      
    }
    var bl = this.navParams.get("bill");
    if(bl != undefined && bl != null) {
      this.is_update = true;
      this.details = bl['details'];
      this.bill_id = bl['bill_id'];
      this.worker_id = bl['worker_id'];
      this.person_shop_name =  bl['person_shop_name'];
      this.srth_id = bl['srth_id'];
      this.km_reading  = bl['km_reading'];
      this.bill_date = bl['bill_date'];
      this.worker_type = bl['worker_type'];
      this.total_bill = bl['total_bill'];
      this.bill_details = bl['bill_details'];
    }


    this.getVehicles();

  }

  addDocumentBills(br) {
    let mdl = this.modalCtrl.create('VehicleDocumentBillPage',{'action':br,'worker_type':this.worker_type,'worker_id':this.worker_id,'details':this.details});
    mdl.present();

    mdl.onDidDismiss(resp => {
      if(localStorage.getItem("vehicle_document_bills") != undefined)
        this.details = JSON.parse(localStorage.getItem("vehicle_document_bills"));

        this.changeCost({});
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

  openDetailPopup() {
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage');

    detailsModalPage.onDidDismiss(data=> {
      this.bill_details = localStorage.getItem(this.codes.DETAILS);
    });

    detailsModalPage.present();
  }

  openCameraPopup(det) {
    let cameraModalPage = this.modalCtrl.create('AllImageKhataPage',{"isselect":true,"type":"all"});

    cameraModalPage.onDidDismiss(resp => {
      det['img'] = JSON.parse(localStorage.getItem("selectedimage"));
    });
    
    cameraModalPage.present();
  }

  addNew() {
    var dtls = {
      "bill_amount":"",
      "expiry_date":"",
      "vehicle_id":"",
      "img":null
    };

    this.details.push(dtls);
  }


  changeCost(det){
    // alert(JSON.stringify(det));
    this.total_bill = 0;
    for(let i=0;i<this.details.length;i++){
      this.total_bill = Number(this.total_bill) + Number(this.details[i]['bill_amount']);
    }
  }

  saveBill(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    
    var data = {
      "person_shop_name":this.person_shop_name,
      "srth_id":json[0]['srth_id'],
      "vehicle_id":this.vehicle_id,
      "reason":this.document['document_name'],
      "km_reading":this.km_reading,
      "bill_date":this.bill_date,
      "worker_type":this.worker_type,
      "worker_id":this.worker_id,
      "total_bill":this.total_bill,
      "bill_image_id":this.img != null ? this.img['image_id'] : '0',
      "bill_details":this.bill_details,
      "last_maint_id":'srth-app',
      "opt_counter":'0',
      "expiry_date":this.expiry_date,
      "details":this.details
    };

    if(this.is_update == true)
      data['bill_id'] = this.bill_id;

    this.rest.post(this.codes.UPDATE_DOCUMENT_BILL,data).then(resp => {
      this.details = [];
      this.bill_date = '';
      this.km_reading = '';
      this.bill_details= '';
      if(resp['_ReturnCode'] == '0'){
        if(this.img != null)
            resp['data']['image_content'] = this.img['image_content'];
        this.bills.push(resp['data']);
          for(let i=0;i<this.bills.length;i++)
            this.bills[i]['selected'] = 'false';
      }
    });
  }

  change(event){
    this.vari = event;
    this.isSelectedBill = true;

    for(let i=0;i<this.persons.length;i++){
      if(this.persons[i]['worker_id'] == event){
        this.person_shop_name = this.persons[i]['name'];
        this.worker_type = this.persons[i]['worker_type'];
      }
    }

  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.bill_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  openCalendarPopup2(det) {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      det['expiry_date'] = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  selectThis(i) {
    // if ( !document.getElementById(i).classList.contains('selected')) {
    //   // do some stuff
    //   document.getElementById(i).classList.add("selected");

    // } else {
    //   document.getElementById(i).classList.add("not-selected");

    // }
 
    document.getElementById(i).classList.toggle("selected");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentRenewalPage');
  }

}
