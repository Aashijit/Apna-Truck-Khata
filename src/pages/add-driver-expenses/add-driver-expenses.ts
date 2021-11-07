import { AllImageKhataPage } from './../all-image-khata/all-image-khata';
import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { ReasonModalPage } from './../reason-modal/reason-modal';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DetailsModalPage } from '../details-modal/details-modal';
import { CameraModalPage } from '../camera-modal/camera-modal';

/**
 * Generated class for the AddDriverExpensesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-driver-expenses',
  templateUrl: 'add-driver-expenses.html',
})
export class AddDriverExpensesPage {

  vari : any = '';
  isSelectedBill : boolean = false;
  name : any = '';

  reason : any = '';

  bills : any = [];

  drivers : any = [];

  bill_id : any = null;
  worker_id : any = '';
  person_shop_name : any = '';
  srth_id : any = '';
  vehicle_id : any = '';
  km_reading : any= '';
  bill_date : any = '';
  worker_type :any = '';
  total_bill : any = '';
  bill_image_id :any = '';
  bill_details : any = '';
  last_maint_id : any ='';
  opt_counte : any = '';
  rejoin_date : any = '';

  is_update : boolean = false;
  img : any = null;
  vehicle_number : any = '';
  

  constructor(private codes : CodesProvider,
    private viewController : ViewController,
    public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, 
    private rest : RestProvider, private message : MessageProvider) {
      var upd = this.navParams.get("update");
      if(upd == 'true'){
        var bill = JSON.parse(localStorage.getItem("bill"));
        this.bill_id  = bill['bill_id'];
        this.worker_id = bill['worker_id'];
        this.person_shop_name = bill['person_shop_name'];
        this.srth_id = bill['srth_id'];
        this.vehicle_id = bill['vehicle_id'];
        this.km_reading =bill['km_reading'];
        this.bill_date =bill['bill_date'];
        this.worker_type =bill['worker_type'];
        this.total_bill =bill['total_bill'];
        this.bill_image_id =bill['bill_image_id'];
        this.bill_details =bill['bill_details'];
        this.reason = bill['reason'];
        this.is_update = true;
      }
      this.getDrivers();


      if(this.bill_id == null)
      {
        this.rest.post(this.codes.GET_LAST_BILL_ID,{}).then(resp => {
          if(resp['_ReturnCode'] == '0'){
            this.bill_id = resp['data'];
          }
        });
        
      }

  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.bill_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  openCalendarPopup1() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.rejoin_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  getDrivers(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data= {
      "srth_id":json[0]['srth_id']
    };
    this.rest.post(this.codes.GET_WORKER, data).then(resp => {
      var workers = resp['data'];
      if(resp['_ReturnCode'] == '0'){
        for(let i=0;i<workers.length;i++){
          if(workers[i]['worker_type'] == 'driver'){
            this.drivers.push(workers[i]);
          }
        }
      }      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDriverExpensesPage');
  }

  change(event){
    this.isSelectedBill = true;
    for(let i=0;i<this.drivers.length;i++)
      if(this.drivers[i]['worker_id'] == event){
        this.name = this.drivers[i]['name'];
        this.vehicle_id = this.drivers[i]['vehicle']['vehicle_id'];
        this.vehicle_number = this.drivers[i]['vehicle']['vehicle_number'];
        break;
      }
  }

  openReasonDialog(){

    let reasonModal = this.modalCtrl.create('ReasonModalPage');
    reasonModal.present();

    reasonModal.onDidDismiss(data=> {
      //Fetch from the localstorage
      var data = JSON.parse(localStorage.getItem(this.codes.SELECTED_REASON));
      this.reason = data;
    });
  }
    

  openDetailPopup() {
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage');

    detailsModalPage.onDidDismiss(data=> {
      this.bill_details = localStorage.getItem(this.codes.DETAILS);
    });

    detailsModalPage.present();
  }

  openCameraPopup() {
    let cameraModalPage = this.modalCtrl.create('AllImageKhataPage',{"isselect":true,"type":"drbills"});

    cameraModalPage.onDidDismiss(resp => {
      this.img = JSON.parse(localStorage.getItem("selectedimage"));
    });
    
    cameraModalPage.present();
  }

  saveExpense(v){
    if(v=='1')
      this.total_bill = -1 * Number(this.total_bill);

      var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
      var data = {
        "person_shop_name":"",
        "srth_id":json[0]['srth_id'],
        "vehicle_id":this.vehicle_id,
        "reason":this.reason,
        "km_reading":this.km_reading,
        "bill_date":this.bill_date,
        "worker_type":'driver',
        "worker_id":this.worker_id,
        "total_bill":this.total_bill,
        "bill_image_id":this.img != null ? this.img['image_id'] : '0',
        "bill_details":this.bill_details,
        "last_maint_id":'srth-app',
        "opt_counter":'0'
      };

      this.rest.post(this.codes.ADD_EXPENSE_BILL,data).then(resp => {
        if(resp['_ReturnCode'] == '0'){
            this.bills.push(resp['data']);
            for(let i=0;i<this.bills.length;i++)
              this.bills[i]['selected'] = 'false';
        }
      });
  }

  selectThis(bill){
    for(let i=0;i<this.bills.length;i++)
      this.bills[i]['selected'] = 'false';
    
    bill['selected'] = 'true';
    this.bill_id  = bill['bill_id'];
    this.worker_id = bill['worker_id'];
    this.person_shop_name = bill['person_shop_name'];
    this.srth_id = bill['srth_id'];
    this.vehicle_id = bill['vehicle_id'];
    this.km_reading =bill['km_reading'];
    this.bill_date =bill['bill_date'];
    this.worker_type =bill['worker_type'];
    this.total_bill =bill['total_bill'];
    this.bill_image_id =bill['bill_image_id'];
    this.bill_details =bill['bill_details'];
    this.reason = bill['reason'];
    this.is_update = true;
  }

  updateExpense(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data = {
      "bill_id":this.bill_id,
      "person_shop_name":"",
      "srth_id":json[0]['srth_id'],
      "vehicle_id":this.vehicle_id,
      "reason":this.reason,
      "km_reading":this.km_reading,
      "bill_date":this.bill_date,
      "worker_type":'driver',
      "worker_id":this.worker_id,
      "total_bill":this.total_bill,
      "bill_image_id":this.img != null ? this.img['image_id'] : '0',
      "bill_details":this.bill_details,
      "last_maint_id":'srth-app',
      "opt_counter":'0'
    };

    this.rest.post(this.codes.UPDATE_BILL_EXPENSE,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
          this.message.displayToast('The bill has been successfully updated');
          this.navCtrl.pop();
      }
    });
  }

}
