import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Modal, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  isShown : boolean = false;
  shop : any = '';
  due : Number = 0.00;
  payments : any = [];
  filterpayments : any = [];
  searchTerm : any = '';

  updatebill : boolean = false;
  updatepayment : boolean = false;

  updatebill1 : boolean = false;

  bills : any = [];

  selectedbill : any = '';
  selectedbill1 : any = '';
  
  selectedpayment : any = '';


  type : any = '';
  selectedfilters : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private codes : CodesProvider, private rest : RestProvider, private message : MessageProvider,
    private alertCtrl : AlertController, private modalCtrl : ModalController, private pv : PhotoViewer) {
      this.shop = JSON.parse(localStorage.getItem("worker"));
      this.due = Number(this.shop['total_bill_money']) - Number(this.shop['paid_money']);
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  ionViewWillEnter(){
    var data = {
      "worker_id":this.shop['worker_id']
    };

    this.rest.post(this.codes.GET_DISPLAY_BILL_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
          this.payments = resp['data'];
          this.filterpayments = this.payments;
      } 
    });


    this.getAllBillsByWorkerId();
  }

  getAllBillsByWorkerId(){
    
    var data = {
      "worker_id":this.shop['worker_id'],
      "worker_type":"shop"
    };

    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.bills = resp['data'];
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

  viewImage(imageUrl) {
    this.pv.show(imageUrl,'Payment Image',{'share':true})
  }

  viewBillImage(imageUrl) {
    this.pv.show(imageUrl,'Bill Image',{'share':true})
  }

      
  update(){
    this.navCtrl.push('AddDriverPage',{"update":"true"});
  }

  deleteWorker(){
    var data = {
      "worker_id":this.shop['worker_id']
    };

    this.rest.post(this.codes.DELETE_WORKER, data).then(resp => {
      this.message.displayToast('You have successfully deleted this worker!');
      this.navCtrl.pop();
    })

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

  getItems($event){
    this.filterpayments = this.payments.filter(wp => {
      if (this.searchTerm != '') {
        var str = wp.payment_id+wp.details;
        return (str.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      }
      else 
        return this.payments;
    });
  }

  openLedgePage(){
    localStorage.setItem("worker_type","shop");
    this.navCtrl.push('LedgerPage', {"worker":this.shop});
  }

  searchBillDetails() {
    let mdl = this.modalCtrl.create('BillPaymentSearchPage',{"worker_type":"shop","worker_id":this.shop['worker_id']});

    mdl.onDidDismiss(data => {  

      if(localStorage.getItem("bill_payment_search") != undefined) {
        this.selectedfilters = JSON.parse(localStorage.getItem("bill_payment_search"));

        if(this.selectedfilters.length == 0) {
          this.filterpayments = this.payments;
          return;
        }
    

        this.filterpayments = [];

        for(let i=0;i<this.selectedfilters.length;i++){
            if(this.selectedfilters[i]['type'] == 'vehicles') {
                for(let j=0;j<this.payments.length;j++){
                  for(let k=0;k<this.payments[j]['bills'].length;k++){
                    if(this.payments[j]['bills'][k]['vehicle_number'] == this.selectedfilters[i]['name']){
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


  selectThisPayment(payment) {
    this.updatebill = false;
    this.updatebill1 = false;
    this.updatepayment = true;
    
    this.selectedbill1 = null;
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

    if(payment == null) {
      this.selectedbill1 = bill;
      this.updatebill1 = true;
      this.selectedbill = null;
      this.updatebill = false;
      this.updatepayment = false;
      this.selectedpayment = null;

      for(let i=0;i<this.bills.length;i++){
        this.bills[i]['selected'] = 'false';
       }
   
       bill['selected'] = 'true';

      return;
    }

    this.updatepayment = false;
    this.updatebill = true;
    this.updatebill1= false;

    this.selectedpayment = payment;
    this.selectedbill = bill;
    this.selectedbill1 = null;

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
    if(this.updatebill1 == true && this.updatebill == false) {
      this.selectedpayment = {
        "bills":[
          this.selectedbill1
        ]
      }
    }
    let mdl = this.modalCtrl.create('ViewPaymentPage',{'payment':this.selectedpayment});
    mdl.present();
  }

  updateBill(){
    if(this.updatebill1 == true && this.updatebill == false) {
      this.selectedbill = this.selectedbill1;
    }
    localStorage.setItem('bill',JSON.stringify(this.selectedbill));
    this.navCtrl.push('BuyFromShopPage',{'update':'true'});
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
    if(this.updatebill1 == true && this.updatebill == false) {
      this.selectedbill = this.selectedbill1;
    }
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
    localStorage.setItem("worker_type","shop");
    this.navCtrl.push('LedgerPage', {"worker":this.shop,'payment':this.selectedpayment, 'isupdate':'true'});
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
      if(this.selectedfilters[i]['type'] == 'vehicles') {
          for(let j=0;j<this.payments.length;j++){
            for(let k=0;k<this.payments[j]['bills'].length;k++){
              if(this.payments[j]['bills'][k]['vehicle_number'] == this.selectedfilters[i]['name']){
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
