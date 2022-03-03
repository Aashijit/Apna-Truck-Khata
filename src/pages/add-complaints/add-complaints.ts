import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-complaints',
  templateUrl: 'add-complaints.html',
})
export class AddComplaintsPage {

  vari: any = '';
  isSelectedBill: boolean = false;

  complaints_id: any = '';
  vehicle_id: any = '';
  srth_id: any = '';
  problem_id: any = '';
  date_of_complaint: any = '';
  date_of_reminder: any = '';
  details: any = '';
  km_reading: any = '';
  status: any = '';
  last_maint_id: any = '';
  opt_counter: any = '';
  vehicle_number : any = '';

  isupdate: boolean = false;

  vehicles: any = [];

  complaints: any = [];

  problems: any = [];

  img : any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController,
    private codes: CodesProvider, private rest: RestProvider, private message : MessageProvider) {

    var update = this.navParams.get("update");

    if (update == "true") {

      var comp = this.navParams.get("selectedcomplaint");

      this.complaints_id = comp['complaints_id'];
      this.vehicle_id = comp['vehicle_id'];
      this.srth_id = comp['srth_id'];
      this.problem_id = comp['problem_id'];
      this.date_of_complaint = comp['date_of_complaint'];
      this.date_of_reminder = comp['date_of_reminder'];
      this.details = comp['details'];
      this.km_reading = comp['km_reading'];
      this.status = comp['status'];
      this.img = comp['image'];
      this.isupdate = true;

    }



    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "vehicle_owner_srth_id": userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_VEHICLE_DETAILS, data).then(resp => {
      if (resp['_ReturnCode'] == '0') {
        this.vehicles = resp['data'];

      }
    });


    if(this.complaints_id == '') {
      this.rest.post(this.codes.GET_LAST_COMPLAINTS_ID,{}).then(resp => {
        this.complaints_id = Number(resp['data']) + 1;
      })
    }

    // this.getcomplaints();
  }

  updatecomplaint() {
    var data = {
      "complaints_id": this.complaints_id,
      "vehicle_id": this.vehicle_id,
      "srth_id": this.srth_id,
      "problem_id": this.problem_id,
      "date_of_complaint": this.date_of_complaint,
      "date_of_reminder": this.date_of_reminder,
      "details": this.details,
      "km_reading": this.km_reading,
      "status": this.status,
      "image":this.img,
      "last_maint_id": "srth-app",
      "opt_counter": "0",
      "problems": this.problems
    };

    this.rest.post(this.codes.UPDATE_COMPLAINTS, data).then(resp => {
      if (resp['_ReturnCode'] == '0') {
        this.navCtrl.pop();
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddComplaintsPage');
  }

  

  change(vehicleId) {
    this.isSelectedBill = true;
    for(let i=0;i<this.vehicles.length;i++){
      if(this.vehicles[i]['vehicle_id'] == vehicleId){
        this.vehicle_number = this.vehicles[i]['vehicle_number']
      }
    }
  }

  openCameraPopup() {
  

    if(this.vehicle_id == '' || this.vehicle_id == null) {
      this.message.displayToast("Please select vehicle");
      return;
    }


    if(this.date_of_complaint == '' || this.date_of_complaint == null) {
      this.message.displayToast("Please select date of complaint");
      return;
    }

    if(this.date_of_reminder == '' || this.date_of_reminder == null) {
      this.message.displayToast("Please select date of reminder");
      return;
    }

    if(this.problem_id == '' || this.problem_id == null) {
      this.message.displayToast("Please enter problem id");
      return;
    }

    if(this.details == '' || this.details == null) {
      this.message.displayToast("Please enter details");
      return;
    }

    var data = {
      "vehicle_id":this.vehicle_id,
      "complaint_date":this.date_of_complaint,
      "reminder_date":this.date_of_reminder,
      "details":this.details
    };
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data2 = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"",
      "worker_id":0,
      "document_type":"complaintimage",
      "type":"complaints",
      "file_name":json[0]['srth_id']+"_"+Date.now()+".jpg",
      "tags":JSON.stringify(data)
    }
    
    let cameraModalPage = this.modalCtrl.create('UploadImagePage',{"request":data2,'image':this.img});

    cameraModalPage.onDidDismiss(resp => {
      if(localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined) {
        var selectedImage = JSON.parse(localStorage.getItem("selectedimage"));
        this.img = selectedImage['image_url'];
      }
      else
        this.img = null;
    });
    
    cameraModalPage.present();
  }



  openProblemModal() {
    let problemModal = this.modalCtrl.create('ProblemWorkPartModalPage');

    problemModal.onDidDismiss(data => {

      if (localStorage.getItem("problem_id") != undefined) {
        this.problems = JSON.parse(localStorage.getItem("problem_id"));

        var str = "";
        var str2 = "";
        for (let i = 0; i < this.problems.length; i++) {
          str += this.problems[i]['problem_id'] + " ";
          str2 += (this.problems[i]['problem_name'] + "-" + this.problems[i]['vehicle_part_name']) + " ";
        }
        this.problem_id = str;
        this.problem_id = str2;
      }
    });

    problemModal.present();
  }

  openDetailPopup() {
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage',{'details':this.details});

    detailsModalPage.onDidDismiss(data => {
      this.details = localStorage.getItem(this.codes.DETAILS);
    });

    detailsModalPage.present();
  }

  selectThis(comp) {
    this.complaints_id = comp['complaints_id'];
    this.vehicle_id = comp['vehicle_id'];
    this.srth_id = comp['srth_id'];
    this.problem_id = comp['problem_id'];
    this.date_of_complaint = comp['date_of_complaint'];
    this.date_of_reminder = comp['date_of_reminder'];
    this.details = comp['details'];
    this.km_reading = comp['km_reading'];
    this.status = comp['status'];
    this.img =comp['image'];
    for(let i=0;i<this.complaints.length;i++)
      this.complaints[i]['selected'] = 'false';
    comp['selected'] = 'true';
    this.isupdate = true;
  }

  getcomplaints() {
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id": userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_COMPLAINTS, data).then(resp => {
      if (resp['_ReturnCode'] == '0') {
        this.complaints = resp['data'];
        
        for (let i = 0; i < this.complaints.length; i++) {
          if (this.complaints[i]['problems'] != undefined) {
            var str = "";
            for (let j = 0; j < this.complaints[i]['problems'].length; j++) {
              str += this.complaints[i]['problems'][j]['problem_id'] + " ";
            }
            this.complaints[i]['problem_id'] = str;
          }
        }
      }
    });

  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.date_of_complaint = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  openCalendarPopup2(){
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.date_of_reminder = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  savecomplaint() {
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "vehicle_id": this.vehicle_id,
      "srth_id": userinfo[0]['srth_id'],
      "problem_id": this.problem_id,
      "date_of_complaint": this.date_of_complaint,
      "date_of_reminder": this.date_of_reminder,
      "details": this.details,
      "km_reading": this.km_reading,
      "status": this.status,
      "image":this.img,
      "last_maint_id": "srth-app",
      "opt_counter": "0",
      "problems": this.problems
    };

    console.error("Check the problems : " + JSON.stringify(data));

    this.rest.post(this.codes.SAVE_COMPLAINTS, data).then(resp => {
      if (resp['_ReturnCode'] == '0') {
        data['complaints_id'] = this.complaints_id;
        alert(this.vehicle_number);
        data['vehicle_number'] = this.vehicle_number;
        data['selected'] = false;
        this.problem_id = '';
        this.date_of_complaint = '';
        this.date_of_reminder = '';
        this.details = '';
        this.km_reading = '';
        this.img = null;

        this.complaints_id ++;
        this.complaints.push(data);
        for (let i = 0; i < this.complaints.length; i++) {
          if (this.complaints[i]['problems'] != undefined) {
            var str = "";
            for (let j = 0; j < this.complaints[i]['problems'].length; j++) {
              str += this.complaints[i]['problems'][j]['problem_id'] + " ";
            }
            this.complaints[i]['problem_id'] = str;
          }
        }
      }
    });

  }


}
