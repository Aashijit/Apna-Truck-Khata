import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';


@IonicPage()
@Component({
  selector: 'page-add-driver',
  templateUrl: 'add-driver.html',
})
export class AddDriverPage {

  gender : any = '';
  myDate : any = '';
  vari : any = '';
  typeOfPerson : any = '';
  addMore : boolean = false;

    worker_id : any = '';
    worker_type : any = '';
    name : any = '';
    salary : any = '';
    phone_number : any = '';
    start_date : any = '';
    city : any = '';
    aadhar_card_number : any = '';
    aadhar_card_front_image_id : any = '0';
    aadhar_card_back_image_id : any = '0';
    pan_card_number : any = '';
    pan_card_front_image_id : any = '0';
    pan_card_back_image_id : any = '0';
    license_number : any ='';
    license_card_front_image_id : any = '0';
    license_card_back_image_id : any = '0';
    account_number :any = '';
    ifsc : any = '';
    reference_person :any = '';
    GSTN : any = '';
    pan : any = '';
    address_line_1 : any = '';
    address_line_2 : any = '';
    state : any = '';
    pincode : any = '';
    paid_money : any = '0';
    due_money : any = '0';
    profile_image_id : any = '0';
    extra_image_1_id : any = '0';
    extra_image_2_id : any = '0';
    last_maint_id : any = 'srth-app';
    opt_counter : any = '0';

    is_update :boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private contacts: Contacts, private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider, 
    private modalCtrl : ModalController) {
      
      var update = this.navParams.get("update");

      if(this.navParams.get('type') != undefined && this.navParams.get('type') != null) {
        this.worker_type = this.navParams.get('type');
        this.typeOfPerson = this.worker_type;
      }

      if(update == "true"){
        this.is_update = true;
        this.addMore = true;
        var worker = JSON.parse(localStorage.getItem("worker"));

        this.worker_id = worker['worker_id'];
        this.worker_type = worker['worker_type'];
        this.name = worker['name'];
        this.salary = worker['salary'];
        this.phone_number = worker['phone_number'];
        this.start_date  = worker['start_date'];
        this.city = worker['city'];
        this.aadhar_card_number = worker['aadhar_card_number'];
        this.aadhar_card_front_image_id = worker['aadhar_card_front_image_id'];;
        this.aadhar_card_back_image_id = worker['aadhar_card_back_image_id'];;
        this.pan_card_number = worker['pan_card_number'];
        this.pan_card_front_image_id = worker['pan_card_front_image_id'];
        this.pan_card_back_image_id = worker['pan_card_back_image_id'];
        this.license_number = worker['license_number'];
        this.license_card_front_image_id  = worker['license_card_front_image_id'];
        this.license_card_back_image_id = worker['license_card_back_image_id'];
        this.account_number  = worker['account_number'];
        this.ifsc = worker['ifsc'];
        this.reference_person = worker['reference_person'];
        this.GSTN = worker['GSTN'];
        this.pan = worker['pan'];
        this.address_line_1 = worker['address_line_1'];
        this.address_line_2 = worker['address_line_2'];
        this.state = worker['state'];
        this.pincode = worker['pincode'];
        this.paid_money = worker['paid_money'];
        this.due_money = worker['due_money'];
        this.profile_image_id = worker['profile_image_id'];
        this.extra_image_1_id = worker['extra_image_1_id'];
        this.extra_image_2_id = worker['extra_image_2_id'];
        this.last_maint_id  = 'srth-app';
        this.opt_counter = '0';
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDriverPage');
  }

  change($event){
    this.vari = $event;
  }

  choosePerson($event){
    this.typeOfPerson = $event;
  }

  storeImage(num, type){

    let cameraModalPage = this.modalCtrl.create('AllImageKhataPage',{"isselect":true,"type":"profile"});

    cameraModalPage.onDidDismiss(resp => {

      if(type == 'Pancard') {
        if(num == 1) {
          this.pan_card_front_image_id = JSON.parse(localStorage.getItem("selectedimage"));
        } else {
          this.pan_card_back_image_id = JSON.parse(localStorage.getItem("selectedimage"));
        }

      } else if(type == 'Aadharcard') {
        if(num == 1) {
          this.aadhar_card_front_image_id = JSON.parse(localStorage.getItem("selectedimage"));
        } else {
          this.aadhar_card_back_image_id = JSON.parse(localStorage.getItem("selectedimage"));
        }

      }
      else if(type == 'LicenseImage') {
        if(num == 1) {
          this.license_card_front_image_id = JSON.parse(localStorage.getItem("selectedimage"));
        } else {
          this.license_card_back_image_id = JSON.parse(localStorage.getItem("selectedimage"));
        }
      }
      else if(type == 'Profile') {
        if(num == 0) {
          this.profile_image_id = JSON.parse(localStorage.getItem("selectedimage"));
        } 
      } else if(type == 'CancelledCheque') {
        if(num == 0) {
          this.profile_image_id = JSON.parse(localStorage.getItem("selectedimage"));
        } 
      }
    });
    
    cameraModalPage.present();
    


  }


  viewContact() {
    this.contacts.pickContact().then((resp) => {
     this.name = resp['displayName'];
     this.phone_number = resp['phoneNumbers'][0]['value'];
    });
  }

  addMoreDetails() {
    this.addMore = !this.addMore;
  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.start_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  savePerson() {

    var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));


    var data = {
    "srth_id":userdata[0]['srth_id'],
    "worker_type":this.worker_type,
    "name":this.name,
    "salary":this.salary,
    "phone_number":this.phone_number,
    "start_date":this.start_date,
    "city":this.city,
    "aadhar_card_number":this.aadhar_card_number,
    "aadhar_card_front_image_id":this.aadhar_card_front_image_id != '0' ? this.aadhar_card_front_image_id['image_id'] : '0',
    "aadhar_card_back_image_id":this.aadhar_card_back_image_id != '0' ? this.aadhar_card_back_image_id['image_id'] : '0',
    "pan_card_number":this.pan_card_number,
    "pan_card_front_image_id":this.pan_card_front_image_id != '0' ? this.pan_card_front_image_id['image_id'] : '0',
    "pan_card_back_image_id":this.pan_card_back_image_id != '0' ? this.pan_card_back_image_id['image_id'] : '0',
    "license_number":this.license_number,
    "license_card_front_image_id":this.license_card_front_image_id != '0' ? this.license_card_front_image_id['image_id'] : '0',
    "license_card_back_image_id":this.license_card_back_image_id != '0' ? this.license_card_back_image_id['image_id'] : '0',
    "account_number":this.account_number,
    "ifsc":this.ifsc,
    "reference_person":this.reference_person,
    "GSTN":this.GSTN,
    "pan":this.pan,
    "address_line_1":this.address_line_1,
    "address_line_2":this.address_line_2,
    "state":this.state,
    "pincode":this.pincode,
    "paid_money":this.paid_money,
    "due_money":this.due_money,
    "profile_image_id":this.profile_image_id,
    "extra_image_1_id":this.extra_image_1_id,
    "extra_image_2_id":this.extra_image_2_id,
    "last_maint_id":this.last_maint_id,
    "opt_counter":this.opt_counter
    };

    this.rest.post(this.codes.CREATE_WORKER, data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have added a '+this.worker_type+' successfully!');
        this.navCtrl.pop();
      }
    });




  } 

    updateworker(){
      
    var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
    "worker_id":this.worker_id,
    "worker_type":this.worker_type,
    "name":this.name,
    "salary":this.salary,
    "phone_number":this.phone_number,
    "start_date":this.start_date,
    "city":this.city,
    "aadhar_card_number":this.aadhar_card_number,
    "aadhar_card_front_image_id":this.aadhar_card_front_image_id,
    "aadhar_card_back_image_id":this.aadhar_card_back_image_id,
    "pan_card_number":this.pan_card_number,
    "pan_card_front_image_id":this.pan_card_front_image_id,
    "pan_card_back_image_id":this.pan_card_back_image_id,
    "license_number":this.license_number,
    "license_card_front_image_id":this.license_card_front_image_id,
    "license_card_back_image_id":this.license_card_back_image_id,
    "account_number":this.account_number,
    "ifsc":this.ifsc,
    "reference_person":this.reference_person,
    "GSTN":this.GSTN,
    "pan":this.pan,
    "address_line_1":this.address_line_1,
    "address_line_2":this.address_line_2,
    "state":this.state,
    "pincode":this.pincode,
    "paid_money":this.paid_money,
    "due_money":this.due_money,
    "profile_image_id":'0',
    "extra_image_1_id":'0',
    "extra_image_2_id":'0',
    "last_maint_id":this.last_maint_id,
    "opt_counter":this.opt_counter
    };

    this.rest.post(this.codes.UPDATE_WORKER, data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have updated a '+this.worker_type+' successfully!');
        localStorage.setItem("worker",JSON.stringify(data));
        this.navCtrl.pop();
      }
    });


    }

}
