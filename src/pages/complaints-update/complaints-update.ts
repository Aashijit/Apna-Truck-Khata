import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-complaints-update',
  templateUrl: 'complaints-update.html',
})
export class ComplaintsUpdatePage {

  vari : any = '';
  isSelectedBill : boolean = false;
  complaints : any = [];
  filtercomplaints : any = [];
  complaint : any = '';
  problems : any = [];
  selectedProblem : any = [];

  drivers : any = [];
  search : any = [];
  vehicles : any = [];


  displayfilter : boolean = false;
  displaysearchitems : any = [];
  searchTerm : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private codes : CodesProvider, 
    private rest : RestProvider, private modalCtrl : ModalController, 
    private ldl : LoadingController) {
    this.getcomplaints(0,null);
    this.getVehicles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintsUpdatePage');
  }

  ionViewWillEnter(){
    this.getcomplaints(0,null);
  }

  change($event){
    this.vari = $event;
    this.isSelectedBill = true;
  }


  getProblemNames(problems) {
    var pname = "";
    for(let i=0;i<problems.length;i++) {
      pname += problems[i]['details']['problem_name']+" ";
    }
    return pname;
  }

  getVehicles() {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "vehicle_owner_srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_VEHICLE_DETAILS,data).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          this.vehicles = resp['data'];
          this.getDrivers();
        }
    });
  }

  clicksearchbar(){
    this.displayfilter = true;
    this.displaysearchitems = this.search;
  }

  closesearchbar(){
    this.displayfilter = false;
    this.displaysearchitems = this.search;
  }

  getItems($event){

    if(this.searchTerm != '') {
      this.displayfilter = true;
      this.displaysearchitems = this.search;
    }

    if(this.searchTerm == '') {
      this.displayfilter = false;
      this.displaysearchitems = this.search;
      this.filtercomplaints = this.complaints;

      for(let i=0;i<this.filtercomplaints.length;i++){
        this.filtercomplaints[i]['selected'] = 'false';
      }
  
      for(let i=0;i<this.complaints.length;i++){
        this.complaints[i]['selected'] = 'false';
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


  clickedsearchitem(sr){
    this.displayfilter = false;
   
    this.displaysearchitems = this.search;
    if(sr['type'] == 'driver'){
      this.searchTerm = sr['name'];
      this.filtercomplaints = [];
      for(let i=0;i<this.complaints.length;i++){
        if(this.complaints[i]['driver'] != null && this.complaints[i]['driver']['driver_id'] == sr['id']){
          this.filtercomplaints.push(this.complaints[i]);
        }
      }

    } else if(sr['type'] == 'vehicle') {
      this.filtercomplaints = [];
      this.searchTerm = sr['id'];
      for(let i=0;i<this.complaints.length;i++){
        if(this.complaints[i]['vehicle_id'] == sr['id']){
          this.filtercomplaints.push(this.complaints[i]);
        }
      }
    }
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
          
          for(let i=0;i<this.drivers.length;i++){
            var searchobj = {
              "type":"driver",
              "name":this.drivers[i]['name'],
              "id":this.drivers[i]['worker_id']
            };
            this.search.push(searchobj);
          }

          for(let i=0;i<this.vehicles.length;i++){
            var searchobj2 = {
              "type":"vehicle",
              "id":this.vehicles[i]['vehicle_id'],
              "name":this.vehicles[i]['vehicle_number']
            };
            this.search.push(searchobj2);
          }

        }
    });
  }


  solved(){

    this.complaint['status'] = 'solved';

    var dt = [];
    this.problems = [];

    for(let i=0;i<this.complaint['problems'].length;i++){
      if(this.complaint['problems'][i]['selected']) { 
      this.problems.push(this.complaint['problems'][i]['problem_id']);
      }
    }

    console.error(JSON.stringify(this.problems));

    for(let i=0;i<this.problems.length;i++) {
      var data = {
        "complaints_id":this.complaint['complaints_id'],
        "problem_id":this.problems[i]
      };
      dt.push(data);
    }

    let lc = this.ldl.create({
      content:'Solving the problems ...'
    });

    lc.present();
    this.rest.post(this.codes.SOLVE_COMPLAINTS,dt).then(resp => {

      if(resp['_ReturnCode'] == '0'){

          this.getcomplaints(1,this.complaint);
          lc.dismiss();
      }
    });

  }

  openCalendarPopup2(){
    let calendarModalPage = this.modalCtrl.create('CalendarModalPage');

    calendarModalPage.onDidDismiss(data=> {

      var dt = [];
      this.problems = [];

      for(let i=0;i<this.complaint['problems'].length;i++){
        if(this.complaint['problems'][i]['selected']) { 
        this.problems.push(this.complaint['problems'][i]['problem_id']);
        }
      }
  

  
      for(let i=0;i<this.problems.length;i++) {
        var dt2 = {
          "complaints_id":this.complaint['complaints_id'],
          "problem_id":this.problems[i],
          "reminder_date":localStorage.getItem(this.codes.DATE)
        };
        dt.push(dt2);
      }

      console.error(JSON.stringify(dt));

      let lc = this.ldl.create({
        content:'Reminding later ...'
      });
  
      lc.present();

      this.rest.post(this.codes.REMIND_LATER, dt).then(resp => {
        if(resp['_ReturnCode'] == '0'){

          this.getcomplaints(1,this.complaint);
          lc.dismiss();
      }
      });


    });

    calendarModalPage.present();
  }


  filterItems(event){

  }

  selectThis(cm){

    for(let i=0;i<this.complaints.length;i++){
      this.complaints[i]['selected'] = false;
    }

    cm['selected'] = true;
    this.complaint = cm;
    

  }

  getcomplaints(v,cm){
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_COMPLAINTS,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.complaints = resp['data'];
        for (let i = 0; i < this.complaints.length; i++) {
          this.complaints[i]['selected'] = false;
          if (this.complaints[i]['problems'] != undefined) {
            var str = "";
            for (let j = 0; j < this.complaints[i]['problems'].length; j++) {
              str += this.complaints[i]['problems'][j]['problem_id'] + " ";
            }
            this.complaints[i]['problem_id'] = str;
          }
        }

        if(v == 1) {
          cm['selected'] = true;
          for(let i=0;i<this.complaints.length;i++) {
            if(this.complaints[i]['complaints_id'] == cm['complaints_id']) {
              this.complaint = this.complaints[i];
            }
          }
          // this.complaint = cm;
        }

      }
    });

  }
    

}
