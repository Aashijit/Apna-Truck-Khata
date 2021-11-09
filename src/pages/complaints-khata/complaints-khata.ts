import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-complaints-khata',
  templateUrl: 'complaints-khata.html',
})
export class ComplaintsKhataPage {

  complaints : any = [];
  filtercomplaints : any = [];
  nocomplaints : boolean = true;
  problemcomplaints : any = [];
  solvedcomplaints : any = [];
  updatecomplaint : Boolean = false;
  complaint : any = '';

  drivers : any = [];
  vehicles : any = [];

  ok : boolean = false;
  problem : boolean = false;
  all : boolean = true;
  search:any = [];
  displayfilter : boolean = false;
  displaysearchitems : any = [];
  searchTerm : any = '';

  constructor(private alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, private rest : RestProvider, 
    private codes : CodesProvider, private mdl : ModalController) {

  }

  ionViewWillEnter(){

    this.getcomplaints();
    this. getVehicles();
    this.updatecomplaint = false;
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

  presentConfirmDelete(){
    
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to delete this complaint?',
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
            this.deleteComplaint();
          }
        }
      ]
    });
    alert.present();
  }

  deleteComplaint(){
    var data = {
      "complaints_id":this.complaint['complaints_id']
    };

    this.rest.post(this.codes.DELETE_COMPLAINTS,data).then(resp => {
      this.getcomplaints();
      this.updatecomplaint = false;
    });
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
      this.updatecomplaint = false;

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintsKhataPage');
  }

  openAddComplaintsPage() {
    this.navCtrl.push('AddComplaintsPage',{"update":"false"});
  }

  openUpdateComplaintsPage() {
    this.navCtrl.push('ComplaintsUpdatePage');
  }

  displayOk(){
    this.all = false;
    this.ok = true;
    this.problem = false;
  }

  displayProblem(){
    this.all = false;
    this.ok = false;
    this.problem = true;
  }

  displayALL(){
    this.all = true;
    this.ok = false;
    this.problem = false;
  }

  getcomplaints(){
    var userinfo = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id":userinfo[0]['srth_id']
    };
    this.rest.post(this.codes.GET_COMPLAINTS,data).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.complaints = resp['data'];

        console.error(JSON.stringify(this.complaints));

        for (let i = 0; i < this.complaints.length; i++) {
          if (this.complaints[i]['problems'] != undefined) {
            var str = "";
            // console.debug("PROBLEMS : "+JSON.stringify(this.complaints[i]['problems']));
            for (let j = 0; j < this.complaints[i]['problems'].length; j++) {
              str += ( this.complaints[i]['problems'][j]['details']['problem_name'] + " - " + this.complaints[i]['problems'][j]['details']['vehicle_part_name'] + " - " + this.complaints[i]['problems'][j]['details']['vehicle_part_id']  ) + " ";
            }
            this.complaints[i]['problem_id'] = str;
          }
        }

        
        this.filtercomplaints = this.complaints;

        if(this.complaints.length == 0) {
          this.nocomplaints = true;
        }

        this.problemcomplaints=[];
        this.solvedcomplaints = [];

        for(let i=0;i<this.complaints.length;i++){
          this.complaints[i]['selected'] = false;
          if(this.complaints[i]['status'] == null)
            this.problemcomplaints.push(this.complaints[i]);
          if(this.complaints[i]['status'] == 'solved')
            this.solvedcomplaints.push(this.complaints[i]);
        }

      }
    });

  }

  viewComplaint() {
    let mdl = this.mdl.create('ViewTransactionPage',{'complaint':this.complaint});
    mdl.present();
  }


  selectThis(cm){
    for(let i=0;i<this.complaints.length;i++)
      this.complaints[i]['selected'] = false;

    cm['selected'] = true;
    localStorage.setItem("selectedcomplaint",JSON.stringify(cm));
    this.complaint = cm;  
    this.updatecomplaint = true;

  }

  updatecomplaints(){
    this.navCtrl.push('AddComplaintsPage',{"update":"true","selectedcomplaint":this.complaint});
  }

  

}
