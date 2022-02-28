import { PhotoViewer } from '@ionic-native/photo-viewer';
import { AllImageKhataPage } from './../all-image-khata/all-image-khata';
import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddDocumentBillPage } from '../add-document-bill/add-document-bill';
import { BillDescriptionPage } from '../bill-description/bill-description';
import { BillDetailsPage } from '../bill-details/bill-details';
import { ShopBillDetailsPage } from '../shop-bill-details/shop-bill-details';
import { DetailsModalPage } from '../details-modal/details-modal';
import { CameraModalPage } from '../camera-modal/camera-modal';


@IonicPage()
@Component({
  selector: 'page-buy-from-shop',
  templateUrl: 'buy-from-shop.html',
})
export class BuyFromShopPage {

  vari : any = '';
  isSelectedBill : boolean = false;
  shops : any = [];
  vehicles : any = [];

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

  is_update : boolean = false;

  img : any = null;

  

  constructor(private viewController : ViewController,public navCtrl: NavController, public navParams: NavParams, 
    private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider, private modalCtrl :  ModalController,
    private pv : PhotoViewer) {
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
        this.img = bill['image'];
        this.is_update = true;
      }


      if(this.bill_id == null)
      {
        this.rest.post(this.codes.GET_LAST_BILL_ID,{}).then(resp => {
          if(resp['_ReturnCode'] == '0'){
            this.bill_id = resp['data'];
            this.bill_id ++;
          }
        });
        
      }
  }

  ionViewWillEnter(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id']
    };
    this.shops = [];
    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){

          var dt = resp['data'];

          for(let i=0;i<dt.length;i++){
            if(dt[i]['worker_type'] == 'shop'){
              this.shops.push(dt[i]);
            }
          }
        }
    });

    this.getVehicles();
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyFromShopPage');
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


  change($event){
    this.vari = $event;
    this.isSelectedBill = true;

  }
    

  addVehicleBill(){
    this.navCtrl.push('ShopBillDetailsPage');
  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.bill_date = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  openDetailPopup() {
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage',{"details":this.bill_details});

    detailsModalPage.onDidDismiss(data=> {
      this.bill_details = localStorage.getItem(this.codes.DETAILS);
    });

    detailsModalPage.present();
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

  save(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data = {
      "person_shop_name":this.person_shop_name,
      "srth_id":json[0]['srth_id'],
      "vehicle_id":this.vehicle_id,
      "reason":this.reason,
      "km_reading":this.km_reading,
      "bill_date":this.bill_date,
      "worker_type":'shop',
      "worker_id":this.worker_id,
      "total_bill":this.total_bill,
      "bill_image_id":this.img != null ? this.img['image_id'] : '0',
      "bill_details":this.bill_details,
      "last_maint_id":'srth-app',
      "opt_counter":'0'
    };

    this.rest.post(this.codes.ADD_EXPENSE_BILL,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        if(this.img != null)
            resp['data']['image_content'] = this.img['image_url'];
        this.bills.push(resp['data']);
        // this.worker_id  = '';
        // this.person_shop_name  = '';
        this.vehicle_id  = '';
        this.km_reading = '';
        this.bill_date  = '';
        // this.worker_type  = '';
        this.total_bill  = '';
        this.bill_image_id  = '';
        this.bill_details  = '';
        this.img = null;

        this.bill_id = Number(resp['_LatestBillId']) + 1;

          for(let i=0;i<this.bills.length;i++)
            this.bills[i]['selected'] = 'false';
      }
    });
  }

  selectShop(shop){

    if(shop == 'add') {
      this.navCtrl.push('AddDriverPage',{'type':'shop'});
      return;
    }

    this.isSelectedBill = true;
    for(let i=0;i<this.shops.length;i++){
      if(this.shops[i]['worker_id'] == shop) {
        this.person_shop_name = this.shops[i]['name'];
        break;
      }
    }
    
  }

  viewImage(imageUrl) {
    this.pv.show(imageUrl,'Bill Image',{'share':true})
  }

  updateBill(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data = {
      "bill_id":this.bill_id,
      "person_shop_name":this.person_shop_name,
      "srth_id":json[0]['srth_id'],
      "vehicle_id":this.vehicle_id,
      "reason":this.reason,
      "km_reading":this.km_reading,
      "bill_date":this.bill_date,
      "worker_type":'shop',
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
          // this.navCtrl.pop();

          this.vehicle_id  = '';
          this.km_reading = '';
          this.bill_date  = '';
          // this.worker_type  = '';
          this.total_bill  = '';
          this.bill_image_id  = '';
          this.bill_details  = '';
          this.img = null;
          this.is_update = false;


          this.bill_id = Number(resp['_LatestBillId']) + 1;


          for(let i=0;i<this.bills.length;i++)
            this.bills[i]['selected'] = 'false';

      }
    });
  }

}
