import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-ledger',
  templateUrl: 'ledger.html',
})
export class LedgerPage {

  isPaymentOptionShown : boolean = false;
  worker : any = '';
  total : number = 0.00;
  img : any = null;

  payment_id : any = '';
  payment_number : number = null;
  payid : any = '';
  paid_to_worker_id : any = '';
  date_of_payment : any = '';
  mode_of_payment : any = '';
  details : any = '' ;
  payment_amount : any = '';
  payment_image_1_id : any = '0';
  payment_image_2_id : any = '0';
  payment_date : any = '';
  last_maint_id : any = 'srth-app';
  opt_counter : any = '0';
  bill_ids : any = [];
  bills : any = [];
  filterbills : any = [];

  money_to_pay : any = 0.00;
  totalBill : Number = 0.00;
  paidMoney : Number = 0.00;
  dueMoney : number = 0.00;

  payment : any = '';

  isUpdate : boolean = false;

  


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private modalCtrl : ModalController,private codes : CodesProvider, private rest : RestProvider, private message : MessageProvider ) {
    this.worker = JSON.parse(localStorage.getItem("worker"));
    this.dueMoney = Number(this.worker['total_bill_money']) - Number(this.worker['paid_money']);

    if(this.navParams.get("payment") != undefined) {
      this.getAllBillsByWorkerId();
      this.payment = this.navParams.get("payment");
      this.payment_id = this.payment['payment_id'];
      this.payment_number = this.payment['payment_number'];
      this.payment_amount = this.payment['payment_amount'];
      this.date_of_payment = this.payment['date_of_payment'];
      this.mode_of_payment = this.payment['mode_of_payment'];
      this.details = this.payment['details'];
      this.img = this.payment['payment_image_1_id'];

      var bilds = [];
      for(let i=0;i<this.payment['bills'].length;i++) {
          bilds.push(String(this.payment['bills'][i]['bill_id']));
      }
      this.bill_ids  = bilds;
      console.log("BUILD ID  : "+JSON.stringify(this.bill_ids));
      this.isUpdate = true;
    } else {
      this.getBillsByWorkerId();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LedgerPage');
  }

  ionViewWillEnter(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id": json[0]['srth_id']
    };
    this.rest.post(this.codes.GET_LAST_PAYMENT_ID,data).then(resp => {
      this.payment_number= Number(resp['data']) + 1;
    });
  }

  openCalendarPopup() {
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {
      this.date_of_payment = localStorage.getItem(this.codes.DATE);
    });

    calendarModalPage.present();
  }

  showPaymentOption() {
    this.isPaymentOptionShown = true;
  }

  openDetailPopup() {
    let detailsModalPage = this.modalCtrl.create('DetailsModalPage',{'details':this.details});

    detailsModalPage.onDidDismiss(data=> {
      this.details = localStorage.getItem(this.codes.DETAILS);
    });

    detailsModalPage.present();
  }
  openCameraPopup() {
    
    if(this.date_of_payment == '' || this.date_of_payment == null) {
      this.message.displayToast("Please select date of payment");
      return;
    }

    if(this.mode_of_payment == '' || this.mode_of_payment == null) {
      this.message.displayToast("Please select mode of payment");
      return;
    }

    if(this.details == '' || this.details == null) {
      this.message.displayToast("Please enter payment details");
      return;
    }

    var data = {
      "payment_details":this.details,
      "mode_of_payment":this.mode_of_payment,
      "date_of_payment":this.date_of_payment,
      "worker_type":this.worker['worker_type'],
      "payment_id":this.payment_number
    };
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data2 = {
      "srth_id":json[0]['srth_id'],
      "worker_type":this.worker['worker_type'],
      "worker_id":this.worker['worker_id'],
      "document_type":"payment",
      "type":"bills",
      "file_name":json[0]['srth_id']+"_"+Date.now()+".jpg",
      "tags":JSON.stringify(data)
    }
    
    let cameraModalPage = this.modalCtrl.create('UploadImagePage',{"request":data2,'image':this.img});

    cameraModalPage.onDidDismiss(resp => {
      if(localStorage.getItem("selectedimage") != null && localStorage.getItem("selectedimage") != undefined) {
        var image = JSON.parse(localStorage.getItem("selectedimage")); 
        this.img = image['image_url'];
      }
      else
        this.img = null;
    });
    
    cameraModalPage.present();
  }

  update() {
    var data = {
      'payment_id':this.payment_id,
      "payment_number":this.payment_number,
      "paid_to_worker_id":this.worker['worker_id'],
      "date_of_payment":this.date_of_payment,
      "mode_of_payment":this.mode_of_payment,
      "payment_amount":this.payment_amount,
      "details":this.details,
      "payment_image_1_id":this.img != undefined ? this.img['image_url'] : "0",
      "payment_image_2_id":'0',
      "payment_date":this.date_of_payment,
      "bill_ids":this.bill_ids,
      "last_maint_id":'srth-app',
      "opt_counter":'0'
    };

    this.rest.post(this.codes.UPDATE_PAYMENT,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have updated a payment!');
        this.worker['paid_money'] = Number(this.worker['paid_money']) + Number(this.payment_amount);
        this.dueMoney = Number(this.worker['total_bill_money']) - Number(this.worker['paid_money']);
        localStorage.setItem("worker",JSON.stringify(this.worker));
        this.date_of_payment = '';
        this.mode_of_payment = '';
        this.details  = '' ;
        this.payment_amount = '';
        this.bill_ids = [];
      }
    });
  }

  save(){
    var data = {
      "paid_to_worker_id":this.worker['worker_id'],
      "payment_number":this.payment_number,
      "date_of_payment":this.date_of_payment,
      "mode_of_payment":this.mode_of_payment,
      "payment_amount":this.payment_amount,
      "details":this.details,
      "payment_image_1_id":this.img != undefined ? this.img['image_url'] : "0",
      "payment_image_2_id":'0',
      "payment_date":this.date_of_payment,
      "bill_ids":this.bill_ids,
      "last_maint_id":'srth-app',
      "opt_counter":'0'
    }; 

    console.log(JSON.stringify(this.bill_ids));

    this.rest.post(this.codes.CREATE_PAYMENT,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have made a payment!');
        this.worker['paid_money'] = Number(this.worker['paid_money']) + Number(this.payment_amount);
        this.dueMoney = Number(this.worker['total_bill_money']) - Number(this.worker['paid_money']);
        localStorage.setItem("worker",JSON.stringify(this.worker));
        this.date_of_payment = '';
        this.mode_of_payment = '';
        this.details  = '' ;
        this.payment_amount = '';
        this.bill_ids = [];
        var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
        var data1 = {
          "srth_id": json[0]['srth_id']
        };

        this.rest.post(this.codes.GET_LAST_PAYMENT_ID,data1).then(resp => {
          this.payment_number= Number(resp['data']) + 1;
        });
      }
    });
  }

  updateAmount() {
    this.money_to_pay = this.payment_amount;
  }

  getAllBillsByWorkerId(){
    
    var data = {
      "worker_id":this.worker['worker_id'],
      "worker_type":localStorage.getItem('worker_type')
    };

    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.bills = resp['data'];
      }
    });
  }

  getBillsByWorkerId(){
    // this.isupdate = false;
    var data = {
      "worker_id":this.worker['worker_id'],
      "worker_type":localStorage.getItem('worker_type')
    };

    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_WORKER_ID_UNPAID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.bills = resp['data'];
      }
    });
  }

  change(billIds){
    if(this.payment_amount != '')
      return;

    this.totalBill = 0.00;
    for(let i=0;i<billIds.length;i++){
      this.totalBill = Number(this.totalBill) +  Number(this.getBillMoney(billIds[i]));
    }

      this.payment_amount = this.totalBill;
      this.money_to_pay = this.payment_amount;
  }

  getBillMoney(billId) : Number{
    for(let i=0;i<this.bills.length;i++){
      if(this.bills[i]['bill_id'] == billId){
        return Number(this.bills[i]['total_bill']);
      }
    }
  }

}
