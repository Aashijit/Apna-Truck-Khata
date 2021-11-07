import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-reason-modal',
  templateUrl: 'reason-modal.html',
})
export class ReasonModalPage {

  filterreasons : any = [];
  reasons :any = [];
  reasontext : any = '';
  searchTerm : any = '';
  addReason : boolean = false;

  constructor(private codes : CodesProvider,
    private rest : RestProvider,
    private viewController : ViewController,public navCtrl: NavController, public navParams: NavParams) {
      this.getreason();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReasonModalPage');
  }

  selectedReason(reason){
    localStorage.setItem(this.codes.SELECTED_REASON,JSON.stringify(reason['reason']));
    this.viewController.dismiss();
  }



  getreason(){
    this.rest.post(this.codes.GET_REASON, {}).then(resp => {
      if(resp['_ReturnCode'] == '0'){
        this.reasons = resp['data'];
        this.filterreasons = this.reasons;
      }
    });
  }

  savereason(){

    if(this.addReason == true) {
      var data = {
        'reason':this.reasontext
      };

      this.rest.post(this.codes.SAVE_REASON,data).then(resp => {
        if(resp['_ReturnCode'] == '0'){
          this.getreason();
        }
      });
      this.addReason = false;
    }
    else 
      this.addReason = true;
  }

  deletereason(reason){
    var data = {
      'property_id':reason['property_id']
    };

    this.rest.post(this.codes.DELETE_REASON,data).then(resp => {
        this.getreason();
    });
}

  filterList(event) {
    this.filterreasons = this.reasons.filter(wp => {
      if (this.searchTerm != '') {
        return (wp.reason.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      }
      else 
        return this.reasons;
    });
  }

}
