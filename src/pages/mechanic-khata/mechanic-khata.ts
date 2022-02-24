import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mechanic-khata',
  templateUrl: 'mechanic-khata.html',
})
export class MechanicKhataPage {

  bills : any = [];
  isupdate : boolean = false;
  isupdate1 : boolean = false;
  filterbills :any = '';
  searchTerm : any = '';
  billDetails : any = [];
  filterbillDetails : any = [];
  shops : any = [];

  search:any = [];
  displayfilter : boolean = false;
  displaysearchitems : any = [];

  selectedfilters : any = [];

  constructor(private alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, 
    private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider, private modalCtrl : ModalController,
    private ldctrl : LoadingController) {

  }

  selectThisDetails(bill){
    for(let i=0;i<this.billDetails.length;i++){
      this.billDetails[i]['selected'] = 'false';
    }

    for(let i=0;i<this.filterbillDetails.length;i++){
      this.filterbillDetails[i]['selected'] = 'false';
    }


    bill['selected'] = 'true';
    this.isupdate1 = true;


    //Fetch bill by bill id
    var data = {
      "bill_id":bill['bill_id']
    };


    this.rest.post(this.codes.GET_BILL_DETAILS_BY_BILL_ID, data).then(resp => {
      console.debug("GET BILL DETAILS : "+JSON.stringify(resp));
      var bill_details = resp['data'];
      bill_details['km_reading'] = bill['km_reading'];
      localStorage.setItem('bill_details',JSON.stringify(bill_details));
    });

    
  }

  shopBuyReport(){
    let modalCtrl = this.modalCtrl.create('ReportModalPage',{"name":"mechanicbuyreport"});
    modalCtrl.present();
  }

  shopBillReport(){
    let modalCtrl = this.modalCtrl.create('ReportModalPage',{"name":"mechanicbillreport"});
    modalCtrl.present();
  }

  getShops(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){

          var dt = resp['data'];

          for(let i=0;i<dt.length;i++){
            if(dt[i]['worker_type'] == 'mechanic'){
              this.shops.push(dt[i]);
            }
          }
          
          for(let i=0;i<this.shops.length;i++){
            var searchobj = {
              "type":"mechanic",
              "name":this.shops[i]['name'],
              "id":"",
              "amount":""
            };
            this.search.push(searchobj);
          }

          for(let i=0;i<this.bills.length;i++){
            var searchobj2 = {
              "type":"bills",
              "id":this.bills[i]['bill_id'],
              "name":this.bills[i]['person_shop_name'],
              "amount":this.bills[i]['total_bill']
            };
            this.search.push(searchobj2);
          }

        }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechanicKhataPage');
  }

  openMechanicBillPage() {
    this.navCtrl.push('MechanicBillPage',{'update':'false'});
  }
  update(){
    this.navCtrl.push('MechanicBillPage',{'update':'true'});
  }
  updateDetails(){
    this.navCtrl.push('ShopBillDetailsPage',{"worker_type":"mechanic",'update':'true'});
  }

  ionViewWillEnter(){
    let ld = this.ldctrl.create({
      'content':'Loading the bills ...'
    });
    this.getBillsBySrthId(ld);
    this.getBillDetailsBySrthId();
  }

  getBillsBySrthId(ld){
    this.isupdate = false;
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"mechanic"
    };
    ld.present();
    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID,data).then(resp => {
      ld.dismiss();
      if(resp['_ReturnCode'] == '0'){
        this.bills = resp['data'];
        this.filterbills = this.bills;
        for(let i=0;i<this.bills.length;i++){
          this.bills[i]['selected'] = 'false';
          this.filterbills[i]['selected'] = 'false';

          localStorage.setItem("mechanic_bills",JSON.stringify(this.bills));


          var dt = {  
            "image_id":this.bills[i]['bill_image_id']
          };

          this.rest.post(this.codes.GET_IMAGE_BY_IMAGE_ID, dt).then(resp => {
            if(resp['data'].length > 0){
              this.bills[i]['image_content'] = resp['data'][0]['image_content'];
              this.filterbills[i]['image_content'] = resp['data'][0]['image_content'];
            }
          });
           
        }
        this.getShops();
      }
    });
  }

  getBillDetailsBySrthId(){
    this.isupdate = false;
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"mechanic"
    };

    this.rest.post(this.codes.GET_PROBLEM_PARTS,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.billDetails = resp['data'];
        this.filterbillDetails = this.billDetails;
        for(let i=0;i<this.billDetails.length;i++){
          this.billDetails[i]['selected'] = 'false';
          this.filterbillDetails[i]['selected'] = 'false';
        }
      }
    });
  }

  

  selectThis(bill){
    for(let i=0;i<this.bills.length;i++){
      this.bills[i]['selected'] = 'false';
    }

    for(let i=0;i<this.filterbills.length;i++){
      this.filterbills[i]['selected'] = 'false';
    }

    bill['selected'] = 'true';
    this.isupdate = true;
    localStorage.setItem('bill',JSON.stringify(bill));
  }
  
  presentConfirmDelete() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to delete this bill?',
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
            this.deletebill();
          }
        }
      ]
    });
    alert.present();
  }

  deletebill(){
    var bill = JSON.parse(localStorage.getItem('bill'));
    let ld = this.ldctrl.create({
      'content':'Refreshing the bill list : '+bill['bill_id']
    });
    var data = {
      "bill_id":bill['bill_id']
    };  

    this.rest.post(this.codes.DELETE_BILL_EXPENSE,data).then(resp=> {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have deleted a bill.'); 
        this.getBillsBySrthId(ld);
      }
    });
  }
  openShopBillDetailsPage(){
    this.navCtrl.push('ShopBillDetailsPage',{"worker_type":"mechanic"});
  }

  clickedsearchitem(sr){
    this.displayfilter = false;
   
    this.displaysearchitems = this.search;
    if(sr['type'] == 'mechanic'){
      this.searchTerm = sr['name'];
      this.filterbills = [];
      for(let i=0;i<this.bills.length;i++){
        if(this.bills[i]['person_shop_name'] == sr['name']){
         
          this.filterbills.push(this.bills[i]);
        }
      }

    } else if(sr['type'] == 'bills') {
      for(let i=0;i<this.bills.length;i++){
        if(this.bills[i]['bill_id'] == sr['id']){
          this.filterbills = [];
          this.searchTerm = sr['id'];
          this.filterbills.push(this.bills[i]);
          this.selectThis(this.bills[i]);
        }
      }
    }
  }


  clicksearchbar(){
    this.displayfilter = true;
    this.displaysearchitems = this.search;
  }

  closesearchbar(){
    this.displayfilter = false;
    this.displaysearchitems = this.search;
  }

  searchBillDetails() {
    let mdl = this.modalCtrl.create('BuyDetailsSearchModalPage');

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

            } else if(this.selectedfilters[i]['type'] == 'mechanic') {
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

        } else if(this.selectedfilters[i]['type'] == 'mechanic') {
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


  getItems($event){

    if(this.searchTerm != '') {
      this.displayfilter = true;
      this.displaysearchitems = this.search;
    }

    if(this.searchTerm == '') {
      this.displayfilter = false;
      this.displaysearchitems = this.search;
      this.filterbills = this.bills;
      this.isupdate = false;

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





// import { MessageProvider } from './../../providers/message/message';
// import { CodesProvider } from './../../providers/codes/codes';
// import { RestProvider } from './../../providers/rest/rest';
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { MechanicPage } from '../mechanic/mechanic';
// import { BillDescriptionPage } from '../bill-description/bill-description';
// import { MechanicBillPage } from '../mechanic-bill/mechanic-bill';


// @IonicPage()
// @Component({
//   selector: 'page-mechanic-khata',
//   templateUrl: 'mechanic-khata.html',
// })
// export class MechanicKhataPage {


//   bills : any = [];
//   isupdate : boolean = false;
//   filterbills :any = '';
//   searchTerm : any = '';


//   constructor(private alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, 
//     private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad MechanicKhataPage');
//   }

//   ionViewWillEnter(){
//     this.getBillsBySrthId();
//   }

//   getBillsBySrthId(){
//     this.isupdate = false;
//     var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

//     var data = {
//       "srth_id":json[0]['srth_id'],
//       "worker_type":"mechanic"
//     };

//     this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID,data).then(resp => {
//       if(resp['_ReturnCode'] == '0'){
//         this.bills = resp['data'];
//         this.filterbills = this.bills;
//         for(let i=0;i<this.bills.length;i++){
//           this.bills[i]['selected'] = 'false';
//           this.filterbills[i]['selected'] = 'false';
//         }
//       }
//     });
//   }

//   openBillDescriptionPage() {
//     this.navCtrl.push(BillDescriptionPage);
//   }

//   openMechanicBillPage() {
//     this.navCtrl.push(MechanicBillPage,{'update':'false'});
//   }
//   update(){
//     this.navCtrl.push(MechanicBillPage,{'update':'true'});
//   }



//   selectThis(bill){
//     for(let i=0;i<this.bills.length;i++){
//       this.bills[i]['selected'] = 'false';
//       this.filterbills[i]['selected'] = 'false';
//     }
//     bill['selected'] = 'true';
//     this.isupdate = true;
//     localStorage.setItem('bill',JSON.stringify(bill));
//   }
  

//   presentConfirmDelete() {
//     let alert = this.alertCtrl.create({
//       title: 'Confirm',
//       message: 'Are you sure you want to delete this bill?',
//       buttons: [
//         {
//           text: 'Cancel',
//           role: 'cancel',
//           handler: () => {
//             console.log('Cancel clicked');
//           }
//         },
//         {
//           text: 'Delete',
//           handler: () => {
//             this.deletebill();
//           }
//         }
//       ]
//     });
//     alert.present();
//   }

//   deletebill(){
//     var bill = JSON.parse(localStorage.getItem('bill'));
//     var data = {
//       "bill_id":bill['bill_id']
//     };  

//     this.rest.post(this.codes.DELETE_BILL_EXPENSE,data).then(resp=> {
//       if(resp['_ReturnCode'] == '0'){
//         this.message.displayToast('Congratulations! You have deleted a bill.'); 
//         this.getBillsBySrthId();
//       }
//     });
//   }

//   getItems($event){
//     this.filterbills = this.bills.filter(wp => {
//       if (this.searchTerm != '') {
//         var str = wp.person_shop_name+wp.bill_id+wp.vehicle_id+wp.reason+wp.km_reading+wp.bill_date+wp.bill_details+wp.worker_id;
//         return (str.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
//       }
//       else 
//         return this.bills;
//     });
//   }

// }
