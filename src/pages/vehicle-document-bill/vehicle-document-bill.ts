import { RestProvider } from './../../../src/providers/rest/rest';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, LoadingController } from 'ionic-angular';
import { tmp } from 'npm';

@IonicPage()
@Component({
  selector: 'page-vehicle-document-bill',
  templateUrl: 'vehicle-document-bill.html',
})
export class VehicleDocumentBillPage {

  vehicles : any = [];
  bill_amount : any = '';
  expiry_date : any = '';
  img : any = null;
  total_bill : any = 0;
  vehicle_id : any = '';

  person_shop_name : any = '';
  document_name : any = '';
  worker_type : any = '';
  worker_id : any = '';
  details : any = [];
  document : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private codes : CodesProvider, private rest : RestProvider, 
    private modalCtrl : ModalController, private viewC : ViewController, private ldc : LoadingController) {
      this.getVehicles();
      this.worker_id = this.navParams.get("worker_id");
      this.worker_type = this.navParams.get("worker_type");
      var action = this.navParams.get("action");
      this.document = this.navParams.get('document');
      if(action == 'edit') {
        this.details = this.navParams.get('details');
        console.error(JSON.stringify(this.details));
        for(let i=0;i<this.details.length;i++){
          this.details[i]['vehicle_number'] = this.details[i]['vehicle_detail'] == undefined ? this.details[i]['vehicle_number'] : this.details[i]['vehicle_detail']['vehicle_number'];
          this.details[i]['expiry_date'] = this.details[i]['document_expiry_date'] != undefined ? this.details[i]['document_expiry_date'] : this.details[i]['expiry_date'];
        }
        this.changeCost();
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleDocumentBillPage');
  }

  dismiss(){
    this.viewC.dismiss();
  }

  getVehicles(){
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    let lc = this.ldc.create({
      content:'Loading the vehicles...'
    });
    lc.present();
    var data = {  
      "vehicle_owner_srth_id":userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_VEHICLE_DETAILS,data).then(resp => {
      lc.dismiss();
      if(resp['_ReturnCode'] == '0') {
        this.vehicles = resp['data'];
      }
    });
  }

  addItem(){
    var vno = "";
    for(let i=0;i<this.vehicles.length;i++){
      if(this.vehicles[i]['vehicle_id'] == this.vehicle_id) 
        vno = this.vehicles[i]['vehicle_number'];
    }

    var item = 
      {
        "bill_amount":this.bill_amount,
        "expiry_date":this.expiry_date,
        "vehicle_id":this.vehicle_id,
        "vehicle_number":vno
      };

      if(this.img != null) {
        item["img"]=this.img['image_id'];
        item['image_url'] = this.img['image_url'];
      }

      this.details.push(item);

      this.changeCost();


      this.bill_amount = "";
      this.vehicle_id = "";
      this.expiry_date = "";
      this.img = null;

  }

  removeItem(it){
    var tmpdetails = [];
    for(let i=0;i<this.details.length;i++) {
      if(this.details[i]['vehicle_id'] == it['vehicle_id'] && this.details[i]['bill_amount'] == it['bill_amount']) {
      }else {
        tmpdetails.push(this.details[i]);
      }
    }
    this.details = tmpdetails;
    this.changeCost();
  }

  saveBills(){
    localStorage.setItem("vehicle_document_bills",JSON.stringify(this.details));
    this.viewC.dismiss();
  }

  changeCost(){
    // alert(JSON.stringify(det));
    this.total_bill = 0;
    for(let i=0;i<this.details.length;i++){
      this.total_bill = Number(this.total_bill) + Number(this.details[i]['bill_amount']);
    }
  }

  openCameraPopup(det) {
    var data = {
      "person_shop_name":this.person_shop_name,
      "document_name":this.document_name
    };
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data2 = {
      "srth_id":json[0]['srth_id'],
      "worker_type":this.worker_type,
      "worker_id":this.worker_id,
      "document_type":"documentbill",
      "type":"bills",
      "file_name":json[0]['srth_id']+"_"+Date.now()+".jpg",
      "tags":JSON.stringify(data)
    }
   
    let cameraModalPage = this.modalCtrl.create('UploadImagePage',{"request":data2});

    cameraModalPage.onDidDismiss(resp => {
      this.img = JSON.parse(localStorage.getItem("selectedimage"));
    });
    
    cameraModalPage.present();
  }

  openCalendarPopup2(det) {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.expiry_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

}
