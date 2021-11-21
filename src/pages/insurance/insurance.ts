import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-insurance',
  templateUrl: 'insurance.html',
})
export class InsurancePage {

  isShown : boolean = false;
  insurance : any = '';
  total : number = 0.00;
  type : any = '';
  due : Number = 0.00;
  selectedfilters : any = [];
  payments : any = [];
  filterpayments : any = [];
  searchTerm : any = '';

  updatebill : boolean = false;
  updatepayment : boolean = false;

  selectedbill : any = '';
  selectedpayment : any = '';


  constructor(public navCtrl: NavController, public navParams: NavParams, private rest : RestProvider, 
    private codes : CodesProvider, private alertCtrl : AlertController, private message : MessageProvider, 
    private modalCtrl : ModalController) {
    this.insurance = JSON.parse(localStorage.getItem("worker"));
    this.due = Number(this.insurance['total_bill_money']) - Number(this.insurance['paid_money']);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsurancePage');
  }

  ionViewWillEnter(){
    var data = {
      "worker_id":this.insurance['worker_id']
    };

    this.rest.post(this.codes.GET_DISPLAY_BILL_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
          this.payments = resp['data'];
          this.filterpayments = this.payments;
      } 
    });
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

    
  update(){
    this.navCtrl.push('AddDriverPage',{"update":"true"});
  }

  deleteWorker(){
    var data = {
      "worker_id":this.insurance['worker_id']
    };

    this.rest.post(this.codes.DELETE_WORKER, data).then(resp => {
      this.message.displayToast('You have successfully deleted this worker!');
      this.navCtrl.pop();
    })

  }

  checkChange() {
    
  }

  openLedgePage(){
    localStorage.setItem("worker_type","insurance");
    this.navCtrl.push('LedgerPage', {"worker":this.insurance});
  }


  presentConfirmDelete() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: "Are you sure you want to delete this worker?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteWorker();
          }
        }
      ]
    });
    alert.present();
  }


  selectThisPayment(payment) {
    this.updatebill = false;
    this.updatepayment = true;
    
    this.selectedpayment = payment;

    for(let i=0;i<this.filterpayments.length;i++){
      if(this.filterpayments[i]['payment_id'] == payment['payment_id']) {
        this.filterpayments[i]['selected'] = 'true';
      }
      this.filterpayments[i]['selected'] = 'false';
    }

    for(let i=0;i<payment.bills.length;i++){
     payment.bills[i]['selected'] = 'false';
    }

    payment['selected'] = 'true';
  }

  selectThisBill(bill,payment) {
    this.updatepayment = false;
    this.updatebill = true;

    this.selectedpayment = payment;
    this.selectedbill = bill;

    for(let i=0;i<this.filterpayments.length;i++){
      if(this.filterpayments[i]['payment_id'] == payment['payment_id']) {
        this.filterpayments[i]['selected'] = 'true';
      }
      this.filterpayments[i]['selected'] = 'false';
    }

    for(let i=0;i<payment.bills.length;i++){
     payment.bills[i]['selected'] = 'false';
    }

    bill['selected'] = 'true';

  }

  viewBill(){
    let mdl = this.modalCtrl.create('ViewPaymentPage',{'payment':this.selectedpayment});
    mdl.present();
  }

  updateBill(){
    localStorage.setItem('bill',JSON.stringify(this.selectedbill));
    console.log(JSON.stringify(this.selectedbill));
    var doc = {
      "document_name":this.selectedbill['reason']
    };
    this.navCtrl.push('DocumentRenewalPage',{'update':'true','bill':this.selectedbill,'document':doc});
  }

  deleteBill(){
      let alert = this.alertCtrl.create({
        title: 'Confirm',
        message: "Are you sure you want to delete this bill?",
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Delete',
            handler: () => {
              this.deleteBillByBillId();
            }
          }
        ]
      });
      alert.present();
  }

  deleteBillByBillId(){
  
    var data = {
      "bill_id":this.selectedbill['bill_id']
    };  

    this.rest.post(this.codes.DELETE_BILL_EXPENSE,data).then(resp=> {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have deleted a bill.'); 
        this.ionViewWillEnter();
      }
    });
  }

  viewPayment() {
    let mdl = this.modalCtrl.create('ViewPaymentPage',{'payment':this.selectedpayment});
    mdl.present();
  }
  updatePayment() {
    localStorage.setItem("worker_type","insurance");
    this.navCtrl.push('LedgerPage', {"worker":this.insurance,'payment':this.selectedpayment, 'isupdate':'true'});
  }
  deletePayment(){
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: "Are you sure you want to delete this payment?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deletePaymentByPaymentId();
          }
        }
      ]
    });
    alert.present();
  }

  deletePaymentByPaymentId() {

    var data = {
      "payment_id":this.selectedpayment['payment_id']
    };  

    this.rest.post(this.codes.DELETE_PAYMENT,data).then(resp=> {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have deleted a payment.'); 
        this.ionViewWillEnter();
      }
    });

  }



  searchBillDetails() {
    let mdl = this.modalCtrl.create('BillPaymentSearchPage',{"worker_type":"insurance","worker_id":this.insurance['worker_id']});

    mdl.onDidDismiss(data => {  

      if(localStorage.getItem("bill_payment_search") != undefined) {
        this.selectedfilters = JSON.parse(localStorage.getItem("bill_payment_search"));

        if(this.selectedfilters.length == 0) {
          this.filterpayments = this.payments;
          return;
        }
    

        this.filterpayments = [];

        for(let i=0;i<this.selectedfilters.length;i++){
            if(this.selectedfilters[i]['type'] == 'reasons') {
                for(let j=0;j<this.payments.length;j++){
                  for(let k=0;k<this.payments[j]['bills'].length;k++){
                    if(this.payments[j]['bills'][k]['reason'] == this.selectedfilters[i]['name']){
                      this.filterpayments.push(this.payments[j]);
                    }
                  }
                }
            } else if(this.selectedfilters[i]['type'] == 'payments') {
              for(let j=0;j<this.payments.length;j++){
                if(this.payments[j]['payment_id'] == this.selectedfilters[i]['id']){
                  this.filterpayments.push(this.payments[j]);
                }
              }
            } else if(this.selectedfilters[i]['type'] == 'bills') {
              for(let j=0;j<this.payments.length;j++){
                for(let k=0;k<this.payments[j]['bills'].length;k++){
                  if(this.payments[j]['bills'][k]['bill_id'] == this.selectedfilters[i]['id']){
                    this.filterpayments.push(this.payments[j]);
                  }
                }
              }
            } 
        }

        console.error(JSON.stringify(this.filterpayments));

      }

    });
    mdl.present();
  }

  removeTerm(sc) {
    var sFilters = [];
    for(let i=0;i<this.selectedfilters.length;i++){
      if(this.selectedfilters[i]['type'] == sc['type'] && this.selectedfilters[i]['id'] == sc['id']){
      } else  {
        sFilters.push(this.selectedfilters[i]);
      }
    }

    this.selectedfilters = sFilters;

    if(this.selectedfilters.length == 0) {
      this.filterpayments = this.payments;
      return;
    }


    this.filterpayments = [];

    for(let i=0;i<this.selectedfilters.length;i++){
      if(this.selectedfilters[i]['type'] == 'reasons') {
          for(let j=0;j<this.payments.length;j++){
            for(let k=0;k<this.payments[j]['bills'].length;k++){
              if(this.payments[j]['bills'][k]['reason'] == this.selectedfilters[i]['name']){
                this.filterpayments.push(this.payments[j]);
              }
            }
          }
      } else if(this.selectedfilters[i]['type'] == 'payments') {
        for(let j=0;j<this.payments.length;j++){
          if(this.payments[j]['payment_id'] == this.selectedfilters[i]['id']){
            this.filterpayments.push(this.payments[j]);
          }
        }
      } else if(this.selectedfilters[i]['type'] == 'bills') {
        for(let j=0;j<this.payments.length;j++){
          for(let k=0;k<this.payments[j]['bills'].length;k++){
            if(this.payments[j]['bills'][k]['bill_id'] == this.selectedfilters[i]['id']){
              this.filterpayments.push(this.payments[j]);
            }
          }
        }
      } 
  }



  }
  

}
