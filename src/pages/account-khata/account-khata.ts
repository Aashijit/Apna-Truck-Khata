import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-account-khata',
  templateUrl: 'account-khata.html',
})
export class AccountKhataPage {

  workers : any = [];
  filterworkers : any = [];
  mechanicshop : boolean = false;
  ms : any = [];
  documentinsurance : boolean = false;
  di : any = [];
  driver : boolean = false;
  dr : any = [];
  all : boolean = true;

  displayfilter : boolean = false;
  displaysearchitems : any = [];

  searchTerm : any = '';
  search : any = [];

  total_bill : any = 0.00;
  paid_money : any = 0.00;
  due_money : any = 0.00;

  constructor(public modalCtrl : ModalController, public navCtrl: NavController, public navParams: NavParams ,private rest : RestProvider, private codes : CodesProvider) {
  }

  details(worker){
    localStorage.setItem("worker",JSON.stringify(worker));
    if(worker['worker_type'] == 'driver') {
      this.navCtrl.push('DriverPage');
    } else if(worker['worker_type'] == 'mechanic') {
      this.navCtrl.push('MechanicPage');
    } else if(worker['worker_type'] == 'shop') {
      this.navCtrl.push('ShopPage');
    } else if(worker['worker_type'] == 'documents') {
      this.navCtrl.push('DocumentPage'); 
    } else if(worker['worker_type'] == 'insurance') {
      this.navCtrl.push('InsurancePage');
    } 
  }

  fullreport(){
    let modalCtrl = this.modalCtrl.create('ReportFullPage');
    modalCtrl.present();
  
  }

  clicksearchbar(){
    this.displayfilter = true;
    this.displaysearchitems = this.search;
  }

  filterWorker(event){

    if(this.searchTerm != '') {
      this.displayfilter = true;
      this.displaysearchitems = this.search;
    }

    if(this.searchTerm == '') {
      this.displayfilter = false;
      this.displaysearchitems = this.search;
      this.filterworkers = this.workers;

    }

    this.displaysearchitems = this.search.filter(wp => {
      if (this.searchTerm != '') {
        var str = wp.type+wp.name;
        return (str.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      }
      else 
        return this.search;
    });
  }

  clickedsearchitem(sr){
    this.displayfilter = false;
   
    this.displaysearchitems = this.search;
    if(sr['type'] == 'name'){
      this.searchTerm = sr['name'];
      this.filterworkers = [];
      for(let i=0;i<this.workers.length;i++){
        if(this.workers[i]['name'] == sr['name']){
         
          this.filterworkers.push(this.workers[i]);
        }
      }

    } else if(sr['type'] == 'type') {
      for(let i=0;i<this.workers.length;i++){
        if(this.workers[i]['worker_type'] == sr['name']){
          this.filterworkers = [];
          this.searchTerm = sr['name'];
          this.filterworkers.push(this.workers[i]);
        }
      }
    }
  }

  num(str){
    return Number(str);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountKhataPage');
    
  }

  selectMechanicShop(){
    this.documentinsurance = false;
    this.driver = false;
    this.all = false;
    this.mechanicshop = true;
  }

  selectDocumentInsurance(){
    this.mechanicshop = false;
    this.driver = false;
    this.all = false;
    this.documentinsurance = true;
  }

  selectDriver(){ 
    this.documentinsurance = false;
    this.mechanicshop = false;
    this.all = false;
    this.driver = true;
  }

  ionViewWillEnter(){

    var userdata = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":userdata[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.workers = resp['data'];
          this.ms = [];
          this.di = [];
          this.dr = [];

          this.total_bill = 0.00;
          this.due_money = 0.00;
          this.paid_money = 0.00;
          this.search = [];
       
        for(let i=0;i<this.workers.length;i++){
          // alert(this.workers[i]['worker_type']);
          this.total_bill = this.total_bill + Number(this.workers[i]['total_bill_money']);
          this.paid_money = this.paid_money + Number(this.workers[i]['paid_money']);
        
          this.filterworkers = this.workers;

            var searchobj = {
              "type":"name",
              "name":this.workers[i]['name'],
            };
            this.search.push(searchobj);

        



          if(this.workers[i]['worker_type'] == 'driver')
            this.dr.push(this.workers[i]);
          else if(this.workers[i]['worker_type'] == 'mechanic' || this.workers[i]['worker_type'] == 'shop')
            this.ms.push(this.workers[i]);
          else if(this.workers[i]['worker_type'] == 'documents' || this.workers[i]['worker_type'] == 'insurance')
            this.di.push(this.workers[i]);
        }
        console.debug("Drivers : "+JSON.stringify(this.dr));
        console.debug("DI : "+JSON.stringify(this.di));
        console.debug("MS : "+JSON.stringify(this.ms));
      }

      searchobj = {
        "type":"type",
        "name":"mechanic",
      };
      this.search.push(searchobj);
      searchobj = {
        "type":"type",
        "name":"shop",
      };
      this.search.push(searchobj);
      searchobj = {
        "type":"type",
        "name":"documents",
      };
      this.search.push(searchobj);
      searchobj = {
        "type":"type",
        "name":"driver",
      };
      this.search.push(searchobj);
      searchobj = {
        "type":"type",
        "name":"insurance",
      };
      this.search.push(searchobj);

      this.due_money = this.total_bill - this.paid_money;

    });

  

  }

  openDriverAddPage() {
    this.navCtrl.push('AddDriverPage',{"update":"false"});
  }

  openDriverPage() {
    this.navCtrl.push('DriverPage');
  }

  openDocumentPage() {
    this.navCtrl.push('DocumentPage');
  }

  openInsurancePage() {
    this.navCtrl.push('InsurancePage');
  }

  openShopPage() {
    this.navCtrl.push('ShopPage');
  }

  openMechanicPage() {
    this.navCtrl.push('MechanicPage');
  }


  // filterWorker(){
  //   this.filterworkers = this.workers.filter(wp => {
  //     if (this.searchTerm != '') {
  //       var str = wp.name+wp.worker_type;
  //       return (str.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
  //     }
  //     else 
  //       return this.workers;
  //   });
  // }




}
