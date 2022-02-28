import { MessageProvider } from './../../../src/providers/message/message';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { RestProvider } from './../../../src/providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';
import { AddMoreModalPage } from '../add-more-modal/add-more-modal';
import { AddPermitPage } from '../add-permit/add-permit';

@IonicPage()
@Component({
  selector: 'page-driver-document',
  templateUrl: 'driver-document.html',
})
export class DriverDocumentPage {

  isShown : boolean = false;
  driver : any = '';
  vehicle : any = '';
  driverJoiningDate : any = '';
  documents : any = [
    {
      "document_name":"National Permit",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "document_name":"Insurance",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "document_name":"Pollution Certificate",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "document_name":"Certificate of fitness",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "document_name":"Tax token",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "document_name":"5 Year Authorization",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "document_name":"Registration Certificate",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "document_name":"Others 1X",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    },
    {
      "document_name":"Others 2X",
      "document_image_id":"0",
      "document_expiry_date":"",
      "document_reminder_date":""
    }
  ];

  constructor(private message : MessageProvider, private codes : CodesProvider, private rest : RestProvider, 
    private viewController : ViewController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController) {
      this.driver = this.navParams.get("driver");
      this.vehicle = this.navParams.get("vehicle");
      this.driverJoiningDate = this.navParams.get('joining');
      console.error("vehicle : "+JSON.stringify(this.vehicle));

      var req = {
        "type":"driver",
        "driver_id":this.driver['worker_id']
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverDocumentPage');
  }

  showMore() {
    if(this.isShown) {
      document.getElementById("fa-arrow-circle-down-driver").classList.remove("fa-arrow-circle-up");
      document.getElementById("fa-arrow-circle-down-driver").classList.add("fa-arrow-circle-down");
    } else {
      document.getElementById("fa-arrow-circle-down-driver").classList.remove("fa-arrow-circle-down");
      document.getElementById("fa-arrow-circle-down-driver").classList.add("fa-arrow-circle-up");

    }
    this.isShown = !this.isShown;
  }

  goToModal() {
   
    let addMoreModal = this.modalCtrl.create('AddMoreModalPage');
    addMoreModal.present();
  
  }

  uploadPhoto(dc) {
    var data = {
      "document_name":dc['document_name']
    };
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data2 = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"driver",
      "worker_id":this.driver['worker_id'],
      "document_type":"document",
      "type":"document",
      "file_name":json[0]['srth_id']+"_"+Date.now()+".jpg",
      "tags":JSON.stringify(data)
    }
    
    let cameraModalPage = this.modalCtrl.create('UploadImagePage',{"request":data2,'image':dc['document_image_id']});

    cameraModalPage.onDidDismiss(resp => {
      if(localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined) {
        var img = JSON.parse(localStorage.getItem("selectedimage"));
        dc['document_image_id'] = img['image_url'];
      }
      else
        dc['document_image_id'] = "0";
    });
    
    cameraModalPage.present();
  
}

  addPermit() {
    let addPermit = this.modalCtrl.create('AddPermitPage');
    addPermit.present();
  }

  exitModal(){
    this.viewController.dismiss();
  }

  save(){

    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    for(let i=0;i<this.documents.length;i++){
      this.documents[i]['worker_type'] = 'driver';
      this.documents[i]['srth_id'] = json[0]['srth_id'];
      this.documents[i]['driver_id'] = this.driver['worker_id'];
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
