import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-document',
  templateUrl: 'document.html',
})
export class DocumentPage {

  isShown : boolean = false;
  document : any = '';
  total : number = 0.00;
  due : Number = 0.00;
  selectedfilters : any = [];
  payments : any = [];
  filterpayments : any = [];
  searchTerm : any = '';

  updatebill : boolean = false;
  updatepayment : boolean = false;

  selectedbill : any = '';
  selectedpayment : any = '';

  updatebill1 : boolean = false;

  bills : any = [];

  selectedbill1 : any = '';

  type : any = 'ano';

  search:any = [];
  displayfilter : boolean = false;
  displaysearchitems : any = [];

  filterbills :any = '';
  billDetails : any = [];
  filterbillDetails : any = [];
  
  constructor(private alertCtrl :  AlertController,private message : MessageProvider, public navCtrl: NavController, 
    public navParams: NavParams, private rest : RestProvider, private codes : CodesProvider,
    private modalCtrl : ModalController, private pv : PhotoViewer) {
      
    this.document = JSON.parse(localStorage.getItem("worker"));
    this.due = Number(this.document['total_bill_money']) - Number(this.document['paid_money']);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DocumentPage');
  }
  checkChange() {

  }

  viewImage(imageUrl) {
    this.pv.show(imageUrl,'Payment Image',{'share':true})
  }

  viewBillImage(imageUrl) {
    this.pv.show(imageUrl,'Bill Image',{'share':true})
  }


  ionViewWillEnter(){
    var data = {
      "worker_id":this.document['worker_id']
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
      "worker_id":this.document['worker_id'],
      "worker_type":"documents"
    };

    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.billDetails = resp['data'];
        this.filterbillDetails = this.billDetails;
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

  openLedgePage(){
    localStorage.setItem("worker_type","documents");
    this.navCtrl.push('LedgerPage', {"worker":this.document});
  }

  update(){
    this.navCtrl.push('AddDriverPage',{"update":"true"});
  }

  deleteWorker(){
    var data = {
      "worker_id":this.document['worker_id']
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



  searchBillDetails() {
    let mdl = this.modalCtrl.create('BillPaymentSearchPage',{"worker_type":"document","worker_id":this.document['worker_id']});

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
    localStorage.setItem("worker_type","document");
    this.navCtrl.push('LedgerPage', {"worker":this.document,'payment':this.selectedpayment, 'isupdate':'true'});
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

  searchOnlyBillDetails() {
    let mdl = this.modalCtrl.create('AccountPaymentSearchModalPage',{'worker_type':'documents'});

    mdl.onDidDismiss(data => {  

      if(localStorage.getItem("searchbilldetails") != undefined) {
        this.selectedfilters = JSON.parse(localStorage.getItem("searchbilldetails"));

        if(this.selectedfilters.length == 0) {
          this.filterbillDetails = this.billDetails;
          return;
        }
    

        this.filterbillDetails = [];

        for(let i=0;i<this.selectedfilters.length;i++){
            if(this.selectedfilters[i]['type'] == 'problems') {
                for(let j=0;j<this.billDetails.length;j++){
                  if(this.billDetails[j]['problem_id'] == this.selectedfilters[i]['id']) {
                    this.filterbillDetails.push(this.billDetails[j]);
                  }
                }
            } else if(this.selectedfilters[i]['type'] == 'vehicles') {
              for(let j=0;j<this.billDetails.length;j++){
                if(this.billDetails[j]['vehicle_id'] == this.selectedfilters[i]['id']) {
                  this.filterbillDetails.push(this.billDetails[j]);
                }
              }

            } else if(this.selectedfilters[i]['type'] == 'shopname') {
              for(let j=0;j<this.billDetails.length;j++){
                if(this.billDetails[j]['person_shop_name'] == this.selectedfilters[i]['name']) {
                  this.filterbillDetails.push(this.billDetails[j]);
                }
              }

            } else if(this.selectedfilters[i]['type'] == 'bills') {
              for(let j=0;j<this.billDetails.length;j++){
                if(this.billDetails[j]['bill_id'] == this.selectedfilters[i]['id']) {
                  this.filterbillDetails.push(this.billDetails[j]);
                }
              }
            }

        }

        console.error(JSON.stringify(this.filterbillDetails));

      }

    });
    mdl.present();
  }

  removeOnlyTerm(sc) {
    var sFilters = [];
    for(let i=0;i<this.selectedfilters.length;i++){
      if(this.selectedfilters[i]['type'] == sc['type'] && this.selectedfilters[i]['id'] == sc['id']){
      } else  {
        sFilters.push(this.selectedfilters[i]);
      }
    }

    this.selectedfilters = sFilters;


    if(this.selectedfilters.length == 0) {
      this.filterbillDetails = this.billDetails;
      return;
    }

    this.filterbillDetails = [];

    for(let i=0;i<this.selectedfilters.length;i++){
        if(this.selectedfilters[i]['type'] == 'problems') {
            for(let j=0;j<this.billDetails.length;j++){
              if(this.billDetails[j]['problem_id'] == this.selectedfilters[i]['id']) {
                this.filterbillDetails.push(this.billDetails[j]);
              }
            }
        } else if(this.selectedfilters[i]['type'] == 'vehicles') {
          for(let j=0;j<this.billDetails.length;j++){
            if(this.billDetails[j]['vehicle_id'] == this.selectedfilters[i]['id']) {
              this.filterbillDetails.push(this.billDetails[j]);
            }
          }

        } else if(this.selectedfilters[i]['type'] == 'shopname') {
          for(let j=0;j<this.billDetails.length;j++){
            if(this.billDetails[j]['person_shop_name'] == this.selectedfilters[i]['name']) {
              this.filterbillDetails.push(this.billDetails[j]);
            }
          }

        } else if(this.selectedfilters[i]['type'] == 'bills') {
          for(let j=0;j<this.billDetails.length;j++){
            if(this.billDetails[j]['bill_id'] == this.selectedfilters[i]['id']) {
              this.filterbillDetails.push(this.billDetails[j]);
            }
          }
        }
    }



  }


  getOnlyItems($event){

    if(this.searchTerm != '') {
      this.displayfilter = true;
      this.displaysearchitems = this.search;
    }

    if(this.searchTerm == '') {
      this.displayfilter = false;
      this.displaysearchitems = this.search;
      this.filterbills = this.bills;

      for(let i=0;i<this.bills.length;i++){
        this.bills[i]['selected'] = 'false';
      }
  
      for(let i=0;i<this.filterbills.length;i++){
        this.filterbills[i]['selected'] = 'false';
      }

    }

    this.displaysearchitems = this.search.filter(wp => {
      if (this.searchTerm != '') {
        var str = wp.id+wp.name;
        return (str.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      }
      else 
        return this.search;
    });
  }

  

}
