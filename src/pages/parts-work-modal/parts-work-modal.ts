import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-parts-work-modal',
  templateUrl: 'parts-work-modal.html',
})
export class PartsWorkModalPage {

  workparts : any = [];
  filterworkparts : any = [];
  work_part_type : any = '';
  name : any = '';
  detail : any = '';
  addWorkPart : Boolean = false;
  searchTerm : any = '';
  qty : any = '';

  constructor(private viewController : ViewController, public navCtrl: NavController, public navParams: NavParams, private rest : RestProvider, private codes : CodesProvider) {


    this.rest.post(this.codes.GET_WORK_PART, {}).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.workparts = resp['data'];
        this.filterworkparts = this.workparts;
      }
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartsWorkModalPage');
  }

  selectedWorkPart(workpart){
    localStorage.setItem(this.codes.SELECTED_WORK_PART,JSON.stringify(workpart));
    this.viewController.dismiss();
  }


  getworkpart(){
    this.rest.post(this.codes.GET_WORK_PART, {}).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.workparts = resp['data'];
        this.filterworkparts = this.workparts;
      }
    });
  }

  saveworkpart(){
      var data = {
        'work_part_type':this.work_part_type,
        'name':this.name,
        'details':this.detail
      };

      this.rest.post(this.codes.SAVE_WORK_PART,data).then(resp => {
          this.addWorkPart = false;
          this.getworkpart();
      });
  }

  filterList(event) {
    this.filterworkparts = this.workparts.filter(wp => {
      if (this.searchTerm != '') {
        return (wp.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      }
      else 
        return this.workparts;
    });
  }

}
