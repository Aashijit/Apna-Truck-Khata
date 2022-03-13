import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-bill-payment-search',
  templateUrl: 'bill-payment-search.html',
})
export class BillPaymentSearchPage {

  bills : any = [];
  isupdate : boolean = false;
  filterbills :any = '';
  searchTerm : any = '';
  billDetails : any = [];
  filterbillDetails : any = [];
  shops : any = [];
  vehicles : any = [];
  worker_type : any = '';
  worker_id : any = '';

  search:any = [];
  displayfilter : boolean = false;
  displaysearchitems : any = [];
  problems : any = [];

  selectedfilters : any = [];
  payments : any = [];
  filterpayments : any = [];
  reasons : any = [];

  // BILL NUMBER, PAYMENT NUMBER, REASONS

  constructor(private alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, 
    private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider, private modalCtrl : ModalController) {

      this.worker_type = this.navParams.get("worker_type");
      this.worker_id = this.navParams.get("worker_id");

      this.getBillsBySrthId();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bill Payment Search Page');
  }


  clickedTerm(sr){
    for(let i=0;i<this.selectedfilters.length;i++){
      if(this.selectedfilters[i]['type'] == sr['type'] && this.selectedfilters[i]['id'] == sr['id']){
        return;
      }
    }
    this.selectedfilters.push(sr);
  }

  removeTerm(sr){

    var sFilters = [];

    for(let i=0;i<this.selectedfilters.length;i++){
      if(this.selectedfilters[i]['type'] == sr['type'] && this.selectedfilters[i]['id'] == sr['id']){
      } else  {
        sFilters.push(this.selectedfilters[i]);
      }
    }

    this.selectedfilters = sFilters;
  }

  

  searchGrid(){
    localStorage.setItem("bill_payment_search",JSON.stringify(this.selectedfilters));
    this.navCtrl.pop();
  }


  getReasons(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_REASON,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){

          this.reasons = resp['data'];

          for(let i=0;i<this.reasons.length;i++){
            var searchobj = {
              "type":"reasons",
              "id":"",
              "name":this.reasons[i]['reason'],
              "amount":""
            };
            this.search.push(searchobj);
          }

        
          for(let i=0;i<this.payments.length;i++){
            var searchobj = {
              "type":"payments",
              "id":String(this.payments[i]['payment_number']),
              "name":this.payments[i]['mode_of_payment'],
              "amount":String(this.payments[i]['payment_amount'])
            };
            this.search.push(searchobj);
          }


          for(let i=0;i<this.bills.length;i++){
            var searchobj = {
              "type":"bills",
              "id":String(this.bills[i]['payment_number']),
              "name":this.bills[i]['person_shop_name'],
              "amount":String(this.bills[i]['total_bill'])
            };
            this.search.push(searchobj);
          }

          this.displaysearchitems = this.search;

          console.log(JSON.stringify(this.search));

        }
    });
  }


  getBillsBySrthId(){
    this.isupdate = false;

    var data = {
      "worker_id":this.worker_id,
      "worker_type":this.worker_type
    };

    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.bills = resp['data'];
        this.filterbills = this.bills;
        for(let i=0;i<this.bills.length;i++){
          this.bills[i]['selected'] = 'false';
          this.filterbills[i]['selected'] = 'false';
        }
        this.getPayments();
      }
    });
  }

  getPayments() {
    var data = {
      "worker_id":this.worker_id
    };

    this.rest.post(this.codes.GET_DISPLAY_BILL_BY_WORKER_ID,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
          this.payments = resp['data'];
          this.filterpayments = this.payments;

          for(let i=0;i<this.payments.length;i++){
            this.payments[i]['selected'] = 'false';
            this.filterpayments[i]['selected'] = 'false';
          }

          if(this.worker_type == 'shop' || this.worker_type == 'mechanic')
          this.getVehicles();
          else
          this.getReasons();

      } 
    });
  }

  getVehicles(){
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "vehicle_owner_srth_id":userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_VEHICLE_DETAILS,data).then(resp => {
      if(resp['_ReturnCode'] == '0') {
        this.vehicles = resp['data'];

        for(let i=0;i<this.vehicles.length;i++){
          var searchobj = {
            "type":"vehicles",
            "id":String(this.vehicles[i]['vehicle_id']),
            "name":this.vehicles[i]['vehicle_number'],
            "amount":""
          };
          this.search.push(searchobj);
        }


        for(let i=0;i<this.payments.length;i++){
          var searchobj = {
            "type":"payments",
            "id":String(this.payments[i]['payment_number']),
            "name":this.payments[i]['mode_of_payment'],
            "amount":String(this.payments[i]['payment_amount'])
          };
          this.search.push(searchobj);
        }


        for(let i=0;i<this.bills.length;i++){
          var searchobj = {
            "type":"bills",
            "id":String(this.bills[i]['bill_number']),
            "name":this.bills[i]['person_shop_name'],
            "amount":String(this.bills[i]['total_bill'])
          };
          this.search.push(searchobj);
        }
        
        this.displaysearchitems = this.search;

        console.log(JSON.stringify(this.search));

      }

    });
  }


  filterDetails(event){
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