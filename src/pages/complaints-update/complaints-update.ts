import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private codes : CodesProvider, private rest : RestProvider) {
    this.getcomplaints();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintsUpdatePage');
  }

  ionViewWillEnter(){
    this.getcomplaints();
  }

  change($event){
    this.vari = $event;
    this.isSelectedBill = true;
  }

  solved(){

    this.complaint['status'] = 'solved';

    var dt = [];

    console.error(JSON.stringify(this.problems));

    for(let i=0;i<this.problems.length;i++) {
      var data = {
        "complaints_id":this.complaint['complaints_id'],
        "problem_id":this.problems[i]
      };
      dt.push(data);
    }


    this.rest.post(this.codes.SOLVE_COMPLAINTS,dt).then(resp => {

      if(resp['_ReturnCode'] == '0'){

      }
    });

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

  getcomplaints(){
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

      }
    });

  }
    

}
