import { MessageProvider } from './../../../src/providers/message/message';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { RestProvider } from './../../../src/providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, ViewController } from 'ionic-angular';


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
      this.vehicle = this.navParams.get("vehicle");

      var req = {
        "type":"vehicle",
        "vehicle_id":this.vehicle['vehicle_id']
      };

      this.rest.post(this.codes.GET_DOCUMENT_INFO,req).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          if(resp['data'].length > 0)
          this.documents = resp['data'];
        }
      });

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

  save(){

    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    for(let i=0;i<this.documents.length;i++){
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
