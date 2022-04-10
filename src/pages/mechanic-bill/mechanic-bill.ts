import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mechanic-bill',
  templateUrl: 'mechanic-bill.html',
})
export class MechanicBillPage {

  vari : any = '';
  isSelectedBill : boolean = false;
  mechanics : any = [];
  vehicles : any = [];
  vehicle_number : any = '';
  reason : any = '';

  bills : any = [];

  drivers : any = [];

  bill_id : any = null;
  bill_number : number = null;
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

  is_update : boolean = false;

  img : any = null;


  constructor(private viewController : ViewController,public navCtrl: NavController, public navParams: NavParams, 
    private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider, private modalCtrl :  ModalController) {

      var upd = this.navParams.get("update");
      if(upd == 'true'){
        var bill = JSON.parse(localStorage.getItem("bill"));
        this.bill_id  = bill['bill_id'];
        this.bill_number = bill['bill_number'];
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
        this.img = bill['image'];
        this.is_update = true;
      }

  }

  ionViewWillEnter() {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id']
    };
    this.mechanics = [];
    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){

          var dt = resp['data'];

          for(let i=0;i<dt.length;i++){
            if(dt[i]['worker_type'] == 'mechanic'){
              this.mechanics.push(dt[i]);
            }
          }
        }
    });

    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":userinfo[0]['srth_id']
    };

    if(this.bill_number == null)
    {
      this.rest.post(this.codes.GET_LAST_BILL_ID,data).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          this.bill_number = resp['data'];
          this.bill_number ++;
        }
      });
      
    }


    this.getVehicles();

  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.bill_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
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

  selectMechanic(worker_id){
    
    if(worker_id == 'add') {
      this.navCtrl.push('AddDriverPage',{'type':'mechanic'});
      return;
    }


    this.isSelectedBill = true;
    for(let i=0;i<this.mechanics.length;i++){
      if(this.mechanics[i]['worker_id'] == worker_id) {
        this.person_shop_name = this.mechanics[i]['name'];
        break;
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechanicBillPage');
  }

  selectVehicle() {
    for(let i=0;i<this.vehicles.length;i++) {
      if(this.vehicles[i]['vehicle_id'] == this.vehicle_id) {
        this.vehicle_number = this.vehicles[i]['vehicle_number'];
        break;
      }
    }
  }



  openCameraPopup() {

    if(this.person_shop_name == '' || this.person_shop_name == null) {
      this.message.displayToast("Please select shop");
      return;
    }

    if(this.vehicle_id == '' || this.vehicle_id == null) {
      this.message.displayToast("Please select vehicle");
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
      "vehicle_number":this.vehicle_number,
      "bill_date":this.bill_date,
      "worker_type":'shop',
      "bill_details":this.bill_details
    };
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data2 = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"mechanic",
      "worker_id":this.worker_id,
      "document_type":"mbill",
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

  selectThis(bill){
    for(let i=0;i<this.bills.length;i++)
      this.bills[i]['selected'] = 'false';
    
    bill['selected'] = 'true';
    this.bill_id  = bill['bill_id'];
    this.bill_number = bill['bill_number'];
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
    this.selectVehicle();
  }


  change($event){
    this.vari = $event;
    this.isSelectedBill = true;

  }
  openDetailPopup() {
    
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage',{"details":this.bill_details});

    detailsModalPage.onDidDismiss(data=> {
      this.bill_details = localStorage.getItem(this.codes.DETAILS);
    });

    detailsModalPage.present();
  }

  save(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data = {
      "person_shop_name":this.person_shop_name,
      "bill_number":this.bill_number,
      "srth_id":json[0]['srth_id'],
      "vehicle_id":this.vehicle_id,
      "reason":this.reason,
      "km_reading":this.km_reading,
      "bill_date":this.bill_date,
      "worker_type":'mechanic',
      "worker_id":this.worker_id,
      "total_bill":this.total_bill,
      "bill_image_id":this.img != null ? this.img['image_id'] : '0',
      "bill_details":this.bill_details,
      "last_maint_id":'srth-app',
      "opt_counter":'0'
    };

    this.rest.post(this.codes.ADD_EXPENSE_BILL,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        
        this.vehicle_id  = '';
        this.km_reading = '';
        this.bill_date  = '';
        this.total_bill  = '';
        this.bill_image_id  = '';
        this.bill_details  = '';
      


        this.bill_number = Number(resp['_LatestBillId']) + 1;

        
        if(this.img != null) {
          resp['data']['image_content'] = this.img['image_url'];
        }
        resp['data']['vehicle_number'] = this.vehicle_number;
        this.vehicle_number = "";
          this.img = null;
          this.bills.push(resp['data']);
          console.log(JSON.stringify(this.bills));
          for(let i=0;i<this.bills.length;i++)
            this.bills[i]['selected'] = 'false';
      }
    });
  }

  updateBill(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data = {
      "bill_id":this.bill_id,
      "person_shop_name":this.person_shop_name,
      "bill_number":this.bill_number,
      "srth_id":json[0]['srth_id'],
      "vehicle_id":this.vehicle_id,
      "reason":this.reason,
      "km_reading":this.km_reading,
      "bill_date":this.bill_date,
      "worker_type":'mechanic',
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
        this.vehicle_id  = '';
        this.km_reading = '';
        this.bill_date  = '';
        this.total_bill  = '';
        this.bill_image_id  = '';
        this.bill_details  = '';
        this.img = null;
        this.is_update = false;

        this.bill_number = Number(resp['_LatestBillId']) + 1;

        for(let i=0;i<this.bills.length;i++)
          this.bills[i]['selected'] = 'false';

          this.navCtrl.pop();
      }
    });
  }



}
