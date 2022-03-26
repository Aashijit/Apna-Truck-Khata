import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@IonicPage()
@Component({
  selector: 'page-add-new-bank-account',
  templateUrl: 'add-new-bank-account.html',
})
export class AddNewBankAccountPage {

  bankDetails : any = {
    "srth_id":"1",
    "account_number":"",
    "account_holder_name":"",
    "ifsc_code":"",
    "bank_name":"",
    "chequebook_passbook_pic_id":"",
    "last_maint_id":"srth_app",
    "opt_counter":"0"
};

bankDetailsTemp : any = {
  "srth_id":"1",
  "account_number":"",
  "account_holder_name":"",
  "ifsc_code":"",
  "bank_name":"",
  "chequebook_passbook_pic_id":"",
  "last_maint_id":"srth_app",
  "opt_counter":"0"
};

  constructor(public navCtrl: NavController, public navParams: NavParams, private codes : CodesProvider, 
    private rest : RestProvider, private loading : LoadingController, private msg : MessageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewBankAccountPage');
  }

  ionViewWillEnter(){
    var acc = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    this.bankDetails['srth_id'] = acc[0]['srth_id'];
    var data = {
      "srth_id" : acc[0]['srth_id']
    };

    this.rest.post(this.codes.GET_BANK_DETAILS,data).then(resp => {
      this.bankDetails = resp['data'][0];
      if(this.bankDetails == undefined || this.bankDetails == null) {
        this.bankDetails = this.bankDetailsTemp;
      }
    });

  }

  updateBankDetails() {
    var acc = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    this.bankDetails['srth_id'] = acc[0]['srth_id'];
    let lng = this.loading.create( 
        {
        content:'Saving the bank details ...'
        });
        lng.present();
      this.rest.post(this.codes.UPDATE_BANK_DETAILS,this.bankDetails).then(resp => {
          lng.dismiss();
          if(resp['_ReturnCode'] == '0') {
            this.msg.displayToast('Saved bank details.');
            this.navCtrl.pop();
          }
      });
  }

}
