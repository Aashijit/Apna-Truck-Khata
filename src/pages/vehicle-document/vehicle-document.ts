import { MessageProvider } from './../../../src/providers/message/message';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { RestProvider } from './../../../src/providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@IonicPage()
@Component({
  selector: 'page-vehicle-document',
  templateUrl: 'vehicle-document.html',
})
export class VehicleDocumentPage {

  isShown : boolean = false;
  vehicle : any = '';
  documents : any = [
    {
      "dc_id":"0",
      "document_name":"National Permit",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "dc_id":"1",
      "document_name":"Insurance",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "dc_id":"2",
      "document_name":"Pollution Certificate",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "dc_id":"3",
      "document_name":"Certificate of fitness",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "dc_id":"4",
      "document_name":"Tax token",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "dc_id":"5",
      "document_name":"5 Year Authorization",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "dc_id":"6",
      "document_name":"Registration Certificate",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "dc_id":"-100",
      "document_name":"Others 1X",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "dc_id":"-200",
      "document_name":"Others 2X",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    }
  ];

  constructor(private message : MessageProvider, private codes : CodesProvider, private rest : RestProvider, 
    private viewController : ViewController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController) {
      this.vehicle = this.navParams.get("vehicle");

      var req = {
        "type":"vehicle",
        "vehicle_id":this.vehicle['vehicle_id']
      };

      this.rest.post(this.codes.GET_DOCUMENT_INFO,req).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          if(resp['data'].length > 0) {
            var docs = resp['data'];
            for(let i=0;i<docs.length;i++) {
              for(let j=0;j<this.documents.length;j++) {
                if(docs[i]['document_name'] == this.documents[j]['document_name']) {
                  this.documents[j]['dc_id'] = docs[i]['document_id'];
                  this.documents[j]['document_image_id'] = docs[i]['document_image_id'];
                  this.documents[j]['document_expiry_date'] = docs[i]['document_expiry_date'];
                  this.documents[j]['document_reminder_date'] = docs[i]['document_reminder_date'];
                  this.documents[j]['previous'] = true;
                }
              }
            }
          }
        }
      });

  }

  uploadPhoto(dc) {
      var data = {
        "dodcument_name":dc['document_name'],
        "vehicle_number":this.vehicle['vehicle_number']
      };
      var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
   
      var data2 = {
        "srth_id":json[0]['srth_id'],
        "worker_type":"vehicle",
        "worker_id":this.vehicle['vehicle_id'],
        "document_type":"document",
        "type":"document",
        "file_name":json[0]['srth_id']+"_"+Date.now()+".jpg",
        "tags":JSON.stringify(data)
      }
      
      let cameraModalPage = this.modalCtrl.create('UploadImagePage',{"request":data2,'image':dc['document_image_id']});
  
      cameraModalPage.onDidDismiss(resp => {
        if(localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined)
          dc['document_image_id'] = JSON.parse(localStorage.getItem("selectedimage"));
        else
          dc['document_image_id'] = "0";
      });
      
      cameraModalPage.present();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleDocumentPage');
  }


  showMore() {
    if(this.isShown) {
      document.getElementById("fa-arrow-circle-down-vehicle").classList.remove("fa-arrow-circle-up");
      document.getElementById("fa-arrow-circle-down-vehicle").classList.add("fa-arrow-circle-down");
    } else {
      document.getElementById("fa-arrow-circle-down-vehicle").classList.remove("fa-arrow-circle-down");
      document.getElementById("fa-arrow-circle-down-vehicle").classList.add("fa-arrow-circle-up");

    }
    this.isShown = !this.isShown;
  }


  selectThis(i) {
    document.getElementById(i).classList.toggle("selected");
  }

  goToModal(){
    localStorage.setItem("vehicle_details",JSON.stringify(this.vehicle));
    let profileModal = this.modalCtrl.create('DecisionModalPage');
    profileModal.present();
  }


  addPermit() {
    let addPermit = this.modalCtrl.create('AddPermitPage');
    addPermit.present();
  }

  editDocumentName(docId) {
    let mod = this.modalCtrl.create("EditOtherDocumentNamePage");
    mod.onDidDismiss(resp => {
      for(let i=0;i<this.documents.length;i++) {
        if(this.documents[i]['dc_id'] == docId) {
          this.documents[i]['document_name'] = resp;
        }
      }
    });
    mod.present();
  }

  save(){

    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    for(let i=0;i<this.documents.length;i++){

      if(this.documents[i]['previous'] != undefined) {
        if(this.documents[i]['previous'] == true) {
          continue;
        }
      }

      if(this.documents[i]['document_expiry_date'] == "") {
        continue;
      }

      this.documents[i]['document_image_id'] = String(this.documents[i]['document_image_id']);
      this.documents[i]['worker_type'] = 'vehicle';
      this.documents[i]['srth_id'] = json[0]['srth_id'];
      this.documents[i]['vehicle_id'] = this.vehicle['vehicle_id'];
      this.documents[i]['is_active'] = '1';
      this.documents[i]['is_remove'] = '0';
      this.documents[i]['last_maint_id']='srth_app';
      this.documents[i]['opt_counter'] = '0';

      this.rest.post(this.codes.UPDATE_DOCUMENT_INFO,this.documents[i]).then(resp => {
        this.message.displayToast(this.documents[i]['document_name']+" saved.");
      }); 

    }
    this.navCtrl.pop();
    // this.message.displayToast("All the documents are saved");

  }


}
