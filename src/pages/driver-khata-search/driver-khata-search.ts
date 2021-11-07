import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-driver-khata-search',
  templateUrl: 'driver-khata-search.html',
})
export class DriverKhataSearchPage {

  bills : any = [];
  isupdate : boolean = false;
  filterbills :any = '';
  searchTerm : any = '';
  billDetails : any = [];
  filterbillDetails : any = [];
  shops : any = [];
  vehicles : any = [];
  drivers :any = [];

  search:any = [];
  displayfilter : boolean = false;
  displaysearchitems : any = [];
  problems : any = [];
  reasons : any = [];

  selectedfilters : any = [];

  constructor(private alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, 
    private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider, private modalCtrl : ModalController) {
      this.getVehicles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverKhataSearchPage');
  }

  getVehicles(){
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "vehicle_owner_srth_id":userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_VEHICLE_DETAILS,data).then(resp => {
      if(resp['_ReturnCode'] == '0') {
        this.vehicles = resp['data'];
        this.getreason();
      }


    });
  }

  getreason(){
    this.rest.post(this.codes.GET_REASON, {}).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.reasons = resp['data'];
        this.getDrivers();
      }
    });
  }


  getDrivers(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER,data ).then(resp => {
        if(resp['_ReturnCode'] == '0'){

          var dt = resp['data'];

          for(let i=0;i<dt.length;i++){
            if(dt[i]['worker_type'] == 'driver'){
              this.drivers.push(dt[i]);
            }
          }



          for(let i=0;i<this.vehicles.length;i++){
            var searchobj = {
              "type":"vehicles",
              "name":this.vehicles[i]['vehicle_number'],
              "id":String(this.vehicles[i]['vehicle_id']),
              "amount":""
            };
            this.search.push(searchobj);
          }
          
          for(let i=0;i<this.drivers.length;i++){
            var searchobj = {
              "type":"driver",
              "name":this.drivers[i]['name'],
              "id":String(this.drivers[i]['worker_id']),
              "amount":""
            };
            this.search.push(searchobj);
          }

          for(let i=0;i<this.reasons.length;i++){
            var searchobj = {
              "type":"reasons",
              "id":"",
              "name":this.reasons[i]['reason'],
              "amount":""
            };
            this.search.push(searchobj);
          }

          this.displaysearchitems = this.search;

          console.log(JSON.stringify(this.search));

        }
    });
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
    localStorage.setItem("searchdriver",JSON.stringify(this.selectedfilters));
    this.navCtrl.pop();
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
