import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController, NavController, NavParams, AlertController } from 'ionic-angular';
import { P } from '@angular/core/src/render3';

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
  type : any = 'ano';

  updatebill : boolean = false;
  updatepayment : boolean = false;
  updatebill1 : boolean = false;

  bills : any = [];

  selectedbill : any = '';
  selectedbill1 : any = '';
  
  selectedpayment : any = '';

  selectedfilters : any = [];
  img : any = null;

 
  search:any = [];
  displayfilter : boolean = false;
  displaysearchitems : any = [];

  filterbills :any = '';
  billDetails : any = [];
  filterbillDetails : any = [];

  constructor( private viewController : ViewController, public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController, 
    private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider, 
    private alertCtrl : AlertController, private pv : PhotoViewer) {
      this.driver = JSON.parse(localStorage.getItem("worker"));

      console.log(JSON.stringify(this.driver));

      this.due = Number(this.driver['total_bill_money']) - Number(this.driver['paid_money']);
     
  }

  checkChange() {
    
  }

  update(){
    this.navCtrl.push('AddDriverPage',{"update":"true"});
  }

  viewImage(imageUrl) {
    this.pv.show(imageUrl,'Payment Image',{'share':true})
  }

  viewBillImage(imageUrl) {
    this.pv.show(imageUrl,'Bill Image',{'share':true})
  }


  ionViewWillEnter(){

    var data1 = {
      "driver_id":this.driver['worker_id']
    };

    this.rest.post(this.codes.GET_VEHICLE_BY_WORKER_ID,data1).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.driverhistory = resp['data'];

        for(let i=0;i<this.driverhistory.length;i++){
          if(this.driverhistory[i]['is_remove'] == '0'){
            localStorage.setItem("vehicle_details",JSON.stringify(this.driverhistory[i]['vehicle']));
            this.vehicle_number = this.driverhistory[i]['vehicle']['vehicle_number'];
            this.vehicle_joining_date = this.driverhistory[i]['driver_start_date'];
          }
        }

      }
    });

    var data = {
      "worker_id":this.driver['worker_id']
    };

    this.rest.post(this.codes.GET_WORKER_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0') {
        this.driver = resp['data'][0];
        this.due = Number(this.driver['total_bill_money']) - Number(this.driver['paid_money']);
      }
    });

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
      "worker_id":this.driver['worker_id'],
      "worker_type":"driver"
    };

    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.billDetails = resp['data'];
        this.filterbillDetails = this.billDetails;
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
    let changeDriverModal = this.modalCtrl.create('RemoveDriverPage');
    changeDriverModal.onDidDismiss(resp => {
      this.ionViewWillEnter();
    });
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

  addProfilePic() {
    var data = {
      "person_shop_name":this.driver['name'],
      "phone_number":this.driver['phone_number'],
      "worker_type":'driver'
    };
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
 
    var data2 = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"driver",
      "worker_id":this.driver['worker_id'],
      "document_type":"profile",
      "type":"profile",
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


  searchOnlyBillDetails() {
    let mdl = this.modalCtrl.create('AccountPaymentSearchModalPage',{'worker_type':'driver'});

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
