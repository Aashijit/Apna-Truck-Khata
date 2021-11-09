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
  dueMoney : Number = 0.00;


  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private modalCtrl : ModalController,private codes : CodesProvider, private rest : RestProvider, private message : MessageProvider ) {
    this.worker = JSON.parse(localStorage.getItem("worker"));
    this.dueMoney = Number(this.worker['total_bill_money']) - Number(this.worker['paid_money']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LedgerPage');
  }

  ionViewWillEnter(){
    this.getBillsByWorkerId();
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

  }

  save(){



    var data = {
      "paid_to_worker_id":this.worker['worker_id'],
      "date_of_payment":this.date_of_payment,
      "mode_of_payment":this.mode_of_payment,
      "payment_amount":this.payment_amount,
      "details":this.details,
      "payment_image_1_id":'0',
      "payment_image_2_id":'0',
      "payment_date":this.date_of_payment,
      "bill_ids":this.bill_ids,
      "last_maint_id":'srth-app',
      "opt_counter":'0'
    };

    this.rest.post(this.codes.CREATE_PAYMENT,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have made a payment!');
        this.worker['paid_money'] = Number(this.worker['paid_money']) + Number(this.payment_amount);
        localStorage.setItem("worker",JSON.stringify(this.worker));
        this.date_of_payment = '';
        this.mode_of_payment = '';
        this.details  = '' ;
        this.payment_amount = '';
        this.bill_ids = [];
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
        this.filterbills = this.bills;
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
