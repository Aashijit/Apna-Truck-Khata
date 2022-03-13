import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../../src/providers/rest/rest';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddDocumentBillPage } from '../add-document-bill/add-document-bill';
import { ThrowStmt } from '@angular/compiler';
import { FromEventObservable } from 'rxjs/observable/FromEventObservable';


@IonicPage()
@Component({
  selector: 'page-document-renewal',
  templateUrl: 'document-renewal.html',
})
export class DocumentRenewalPage {

  // UPDATE_DOCUMENT_BILL

  gender: any = '';
  myDate: any = '';
  vari: any = '';
  isSelectedBill: boolean = false;
  persons: any = [];

  vehicles: any = [];

  vehicle_string: any = "";

  saveupdatebillid : any = null;


  bill_id: any = null;
  bill_number : number = null;
  worker_id: any = '';
  person_shop_name: any = '';
  srth_id: any = '';
  vehicle_id: any = '';
  km_reading: any = '';
  bill_date: any = '';
  worker_type: any = '';
  total_bill: any = 0;
  bill_image_id: any = '';
  bill_details: any = '';
  last_maint_id: any = '';
  opt_counte: any = '';
  expiry_date: any = '';
  total_bill_full: Number = 0;

  bills: any = [];

  details: any = [];

  is_update: boolean = false;

  document: any = '';

  img: any = null;

  displayBills : any = [];




  constructor(public navCtrl: NavController, public navParams: NavParams, private codes: CodesProvider, private rest: RestProvider,
    private modalCtrl: ModalController, private message : MessageProvider, private pv : PhotoViewer) {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    this.document = this.navParams.get("document");
    console.log(JSON.stringify(this.document));

    var data = {
      "srth_id": json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER, data).then(resp => {
      if (resp['_ReturnCode'] == '0') {

        var dt = resp['data'];

        for (let i = 0; i < dt.length; i++) {
          if (dt[i]['worker_type'] == 'documents' || dt[i]['worker_type'] == 'insurance') {
            this.persons.push(dt[i]);
          }
        }
      }
    });

    var bl = this.navParams.get("bill");
      if (bl != undefined && bl != null) {
      this.is_update = true;
      this.details = bl['details'];
      this.bill_id = bl['bill_id'];
      this.bill_number = bl['bill_number'];
      this.worker_id = bl['worker_id'];
      this.person_shop_name = bl['person_shop_name'];
      this.srth_id = bl['srth_id'];
      this.km_reading = bl['km_reading'];
      this.bill_date = bl['bill_date'];
      this.worker_type = bl['worker_type'];
      this.total_bill = bl['total_bill'];
      this.bill_details = bl['bill_details'];
      this.img = bl['image'];
      if(this.details != undefined) {
      for(let i=0;i<this.details.length;i++){
        this.details[i]['expiry_date'] = this.details[i]['document_expiry_date'];
      }
      }
    }


    if (this.bill_number == null) {
      this.rest.post(this.codes.GET_LAST_BILL_ID, data).then(resp => {
        if (resp['_ReturnCode'] == '0') {
          this.bill_number = resp['data'];
          this.bill_number = Number(this.bill_number) + 1;
        }
      });

    }


    if (this.details == undefined || this.details == null) {
      this.details = [];
    }


    this.getVehicles();

  }

  addDocumentBills(br) {
    let mdl = this.modalCtrl.create('VehicleDocumentBillPage', { 'action': br, 'worker_type': this.worker_type, 'worker_id': this.worker_id, 'details': this.details, "document": this.document });
    mdl.present();

    mdl.onDidDismiss(resp => {
      if (localStorage.getItem("vehicle_document_bills") != undefined)
        this.details = JSON.parse(localStorage.getItem("vehicle_document_bills"));
      this.bills = [];
      var vhcls = "";
      for (let i = 0; i < this.details.length; i++) {
        var bill = {
          "bill_id": this.bill_id,
          "vehicle_id": this.details[i]['vehicle_id'],
          "expiry_date": this.details[i]['expiry_date'],
          "total_bill": this.details[i]['bill_amount'],
          "person_shop_name":this.person_shop_name,
          "vehicle_number":this.details[i]['vehicle_number'],
          "image":this.details[i]['image_url']
        };
        // console.error("Vehicle number : " + JSON.stringify(this.details[i]));
        // if (this.details[i]['vehicle_number'] == undefined || this.details[i]['vehicle_number'] == "undefined")
        //   vhcls += " ";
        // else
        //   vhcls += this.details[i]['vehicle_number'] + " ";
        this.bills.push(bill);
        for (let i = 0; i < this.bills.length; i++)
          this.bills[i]['selected'] = 'false';
      }

      if(this.displayBills.length > 0) {
        this.displayBills.push(this.bills);
      } else 
        this.displayBills = this.bills;
      this.vehicle_string = vhcls.replace("undefined", "");
      this.changeCost({});
    });
  }

  getVehicles() {
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "vehicle_owner_srth_id": userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(resp => {
      if (resp['_ReturnCode'] == '0') {
        this.vehicles = resp['data'];
      }
    });
  }

  viewBillImage(imageUrl) {
    this.pv.show(imageUrl,'Document Image',{'share':true})
  }

  updateBill() {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "person_shop_name": this.person_shop_name,
      "bill_number":this.bill_number,
      "srth_id": json[0]['srth_id'],
      "vehicle_id": this.vehicle_id,
      "reason": this.document['document_name'],
      "km_reading": this.km_reading,
      "bill_date": this.bill_date,
      "worker_type": this.worker_type,
      "worker_id": this.worker_id,
      "total_bill": this.total_bill,
      "bill_image_id": this.img != null ? this.img['image_id'] : '0',
      "bill_details": this.bill_details,
      "last_maint_id": 'srth-app',
      "opt_counter": '0',
      "expiry_date": this.expiry_date,
      "details": this.details
    };

    if (this.is_update == true) {
      data['bill_id'] = this.bill_id;
      this.saveupdatebillid = this.bill_id;
    }

    this.rest.post(this.codes.UPDATE_DOCUMENT_BILL, data).then(resp => {
      this.bill_date = '';
      this.km_reading = '';
      this.bill_details = '';
      this.total_bill = 0;
      if (resp['_ReturnCode'] == '0') {
        this.is_update = false;
        resp['data']['bill_number'] = this.bill_number;
        this.bill_number = Number(resp['data']['bill_number']) + 1;

        if (this.img != null)
          resp['data']['image_content'] = this.img['image_content'];

        this.bills = [];
        resp['data']['details'] = this.details; 

        var exp_date = "";
        for(let j=0;j<this.details.length;j++) {
          exp_date += this.details[j]['expiry_date'] + " ";
        }

        resp['data']['expiry_date'] = exp_date;
        resp['data']['bill_id'] = this.saveupdatebillid;

        this.bills.push(resp['data']);
        for (let i = 0; i < this.bills.length; i++)
          this.bills[i]['selected'] = 'false';

          this.details = [];
      }
    });
  }

  openDetailPopup() {
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage',{"details":this.bill_details});

    detailsModalPage.onDidDismiss(data => {
      this.bill_details = localStorage.getItem(this.codes.DETAILS);
    });

    detailsModalPage.present();
  }

  openCameraPopup() {

    if(this.person_shop_name == '' || this.person_shop_name == null) {
      this.message.displayToast("Please select shop");
      return;
    }

    if(this.bill_date == '' || this.bill_date == null) {
      this.message.displayToast("Please enter bill date");
      return;
    }

    if(this.bill_details == '' || this.bill_details == null) {
      this.message.displayToast("Please enter bill details");
      return;
    }

    var data = {
      "person_shop_name":this.person_shop_name,
      "vehicle_id":this.vehicle_id,
      "bill_date":this.bill_date,
      "worker_type":this.worker_type,
      "bill_details":this.bill_details
    };
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data2 = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"document",
      "worker_id":this.worker_id,
      "document_type":"dbill",
      "type":"bills",
      "file_name":json[0]['srth_id']+"_"+Date.now()+".jpg",
      "tags":JSON.stringify(data)
    }
    
    let cameraModalPage = this.modalCtrl.create('UploadImagePage',{"request":data2,'image':this.img});

    cameraModalPage.onDidDismiss(resp => {
      if(localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined)
        this.img = JSON.parse(localStorage.getItem("selectedimage"));
      else
        this.img = null;
    });
    
    cameraModalPage.present();
  }

  addNew() {
    var dtls = {
      "bill_amount": "",
      "expiry_date": "",
      "vehicle_id": "",
      "img": null
    };

    this.details.push(dtls);
  }


  changeCost(det) {
    // alert(JSON.stringify(det));
    this.total_bill = 0;
    for (let i = 0; i < this.details.length; i++) {
      this.total_bill = Number(this.total_bill) + Number(this.details[i]['bill_amount']);
    }
  }

  saveBill() {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    // alert(JSON.stringify(this.img));
    var data = {
      "person_shop_name": this.person_shop_name,
      "bill_number":this.bill_number,
      "srth_id": json[0]['srth_id'],
      "vehicle_id": this.vehicle_id,
      "reason": this.document['document_name'],
      "km_reading": this.km_reading,
      "bill_date": this.bill_date,
      "worker_type": this.worker_type,
      "worker_id": this.worker_id,
      "total_bill": this.total_bill,
      "bill_image_id": this.img != null ? this.img['image_id'] : '0',
      "bill_details": this.bill_details,
      "last_maint_id": 'srth-app',
      "opt_counter": '0',
      "expiry_date": this.expiry_date,
      "details": this.details
    };

    if (this.is_update == true)
      data['bill_id'] = this.bill_id;

    this.rest.post(this.codes.UPDATE_DOCUMENT_BILL, data).then(resp => {
      this.bill_date = '';
      this.km_reading = '';
      this.bill_details = '';
      this.total_bill = 0;
      if (resp['_ReturnCode'] == '0') {
        
        resp['data']['bill_number'] = this.bill_number;

        this.bill_number = Number(resp['data']['bill_number']) + 1;

        if (this.img != null)
          resp['data']['image_content'] = this.img['image_content'];

        this.bills = [];
        var exp_date = "";
        for(let j=0;j<this.details.length;j++) {
          exp_date += this.details[j]['expiry_date'] + " ";
        }

        resp['data']['expiry_date'] = exp_date;
        

        resp['data']['details'] = this.details;
        this.bills.push(resp['data']);
        for (let i = 0; i < this.bills.length; i++)
          this.bills[i]['selected'] = 'false';

          this.details = [];
      }
    });
  }

  change(event) {
    this.vari = event;
    this.isSelectedBill = true;

    for (let i = 0; i < this.persons.length; i++) {
      if (this.persons[i]['worker_id'] == event) {
        this.person_shop_name = this.persons[i]['name'];
        this.worker_type = this.persons[i]['worker_type'];
      }
    }

  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data => {
      this.bill_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  openCalendarPopup2(det) {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data => {
      det['expiry_date'] = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  selectThis(bl) {
    if (bl != undefined && bl != null) {
      this.is_update = true;
      
      this.details = bl['details'] == undefined ? this.details : bl['details'];
      // alert(JSON.stringify(this.details));
      this.bill_id = bl['bill_id'];
      this.bill_number = bl['bill_number'];
      this.worker_id = bl['worker_id'];
      this.person_shop_name = bl['person_shop_name'];
      this.srth_id = bl['srth_id'];
      this.km_reading = bl['km_reading'];
      this.bill_date = bl['bill_date'] == undefined ? this.bill_date : bl['bill_date'];
      this.worker_type = bl['worker_type'];
      this.total_bill = bl['total_bill'];
      this.bill_details = bl['bill_details'] == undefined ? this.bill_details : bl['bill_details'];
    }

    for (let i = 0; i < this.bills.length; i++)
      if (this.bills[i]['bill_id'] == bl['bill_id'])
        this.bills[i]['selected'] = 'true';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentRenewalPage');
  }

}