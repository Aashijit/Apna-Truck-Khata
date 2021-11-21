import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage {

  isShown : boolean = false;
  driver : any = '';
  due : Number = 0.00;
  payments : any = [];
  filterpayments : any = [];
  searchTerm : any = '';
  driverhistory : any = [];
  vehicle_number : any = '';
  vehicle_joining_date : any = '';
  type : any = '';

  updatebill : boolean = false;
  updatepayment : boolean = false;

  selectedbill : any = '';
  selectedpayment : any = '';

  selectedfilters : any = [];

  constructor( private viewController : ViewController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController, 
    private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider, 
    private alertCtrl : AlertController) {
      this.driver = JSON.parse(localStorage.getItem("worker"));

      console.log(JSON.stringify(this.driver));

      this.due = Number(this.driver['total_bill_money']) - Number(this.driver['paid_money']);
     

      var data = {
        "driver_id":this.driver['worker_id']
      };

      this.rest.post(this.codes.GET_VEHICLE_BY_WORKER_ID,data).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          this.driverhistory = resp['data'];

          for(let i=0;i<this.driverhistory.length;i++){
            if(this.driverhistory[i]['is_remove'] == '0'){
              localStorage.setItem("vehicle_details",JSON.stringify(this.driverhistory[i]['vehicle']));
              this.vehicle_number = this.driverhistory[i]['vehicle']['vehicle_number'];
              this.vehicle_joining_date = this.driverhistory[i]['vehicle']['vehicle_start_date'];
            }
          }

        }
      });
  }

  checkChange() {
    
  }

  update(){
    this.navCtrl.push('AddDriverPage',{"update":"true"});
  }

  ionViewWillEnter(){
    var data = {
      "worker_id":this.driver['worker_id']
    };

    this.rest.post(this.codes.GET_DISPLAY_BILL_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
          this.payments = resp['data'];
          this.filterpayments = this.payments;
      } 
    });
  }

  goToBillPaymentSearch() {

  }

  deleteWorker(){
    var data = {
      "worker_id":this.driver['worker_id']
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverPage');
  }


  openRemoveDriverFromKhata() {


    // let removeModal = this.modalCtrl.create(RemoveDriverFromAccountPage);
    // removeModal.present();


    let changeDriverModal = this.modalCtrl.create('RemoveDriverPage');
    changeDriverModal.present();
  
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
    localStorage.setItem("worker_type","driver");
    this.navCtrl.push('LedgerPage', {"worker":this.driver});
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
    this.navCtrl.push('AddDriverExpensesPage',{'update':'true'});
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
    localStorage.setItem("worker_type","driver");
    this.navCtrl.push('LedgerPage', {"worker":this.driver,'payment':this.selectedpayment, 'isupdate':'true'});
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
    let mdl = this.modalCtrl.create('BillPaymentSearchPage',{"worker_type":"driver","worker_id":this.driver['worker_id']});

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
