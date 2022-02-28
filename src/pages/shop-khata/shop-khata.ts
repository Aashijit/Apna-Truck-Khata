import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-shop-khata',
  templateUrl: 'shop-khata.html',
})
export class ShopKhataPage {

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
    private ldctrl : LoadingController,private photoViewer: PhotoViewer) {

  }

  shopBuyReport(){
    let modalCtrl = this.modalCtrl.create('ReportModalPage');
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
            if(dt[i]['worker_type'] == 'shop'){
              this.shops.push(dt[i]);
            }
          }
          
          for(let i=0;i<this.shops.length;i++){
            var searchobj = {
              "type":"shopname",
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
    console.log('ionViewDidLoad ShopKhataPage');
  }

  openBuyFromShopPage() {
    this.navCtrl.push('BuyFromShopPage',{'update':'false'});
  }

  openShopKhata() {
    this.navCtrl.push('ShopKhataPage' );
  }

  ionViewWillEnter(){
    let ld = this.ldctrl.create({
      'content':'Loading the bills ...'
    });
    this.getBillsBySrthId(ld);
    this.getBillDetailsBySrthId();
  }

  viewImage(image) {
    this.photoViewer.show(image['image_url'],image['tag_cloud'], {share: true});
  }

  getBillsBySrthId(ld){
    this.isupdate = false;
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"shop"
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

          localStorage.setItem("shop_bills",JSON.stringify(this.bills));

          // var dt = {  
          //   "image_id":this.bills[i]['bill_image_id']
          // };

          // this.rest.post(this.codes.GET_IMAGE_BY_IMAGE_ID, dt).then(resp => {
          //   if(resp['data'].length > 0){
          //     this.bills[i]['image_content'] = resp['data'][0]['image_content'];
          //     this.filterbills[i]['image_content'] = resp['data'][0]['image_content'];
          //   }
          // });
        }
        this.getShops();
      }
    });
  }

  getBillDetailsBySrthId(){
    this.isupdate = false;
    this.isupdate1 = false;
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"shop"
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
  

  update(){
    this.navCtrl.push('BuyFromShopPage',{'update':'true'});
  }

  updateDetails(){
    this.navCtrl.push('ShopBillDetailsPage',{'update':'true','worker_type':'shop'});
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
    var data = {
      "bill_id":bill['bill_id']
    };  

    let ld = this.ldctrl.create({
      'content':'Refreshing the bill list : '+bill['bill_id']
    });

    this.rest.post(this.codes.DELETE_BILL_EXPENSE,data).then(resp=> {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have deleted a bill.'); 
        this.getBillsBySrthId(ld);
      }
    });
  }
  openShopBillDetailsPage(){
    this.navCtrl.push('ShopBillDetailsPage',{"worker_type":"shop"});
  }

  clickedsearchitem(sr){
    this.displayfilter = false;
   
    this.displaysearchitems = this.search;
    if(sr['type'] == 'shopname'){
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

  report(type) {
    let modalCtrl = this.modalCtrl.create('ReportModalPage',{"name":type});
    modalCtrl.present();
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
