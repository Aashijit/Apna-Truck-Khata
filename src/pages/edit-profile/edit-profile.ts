import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile : any = {
      "srth_id":'1',
      "name":'',
      "business_name":'',
      "city":'',
      "GSTN":'',
      "pan":'',
      "address_line_1":'',
      "address_line_2":'',
      "state":'',
      "pincode":'',
      "profile_image_id":'',
      "last_maint_id":'srth_app',
      "opt_counter":'0'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private codes : CodesProvider, 
    private rest : RestProvider, private loading : LoadingController, private msg : MessageProvider) {
    var acc = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    this.profile['srth_id'] = acc[0]['srth_id'];

    var data = {
      "srth_id" : acc[0]['srth_id']
    };

    this.rest.post(this.codes.GET_PROFILE,data).then(resp => {
      this.profile = resp['data'][0];
    });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  saveDetails() {
      let lng = this.loading.create( 
        {
        content:'Saving the profile ...'
        });
        lng.present();
      this.rest.post(this.codes.UPDATE_PROFILE,this.profile).then(resp => {
          lng.dismiss();
          if(resp['_ReturnCode'] == '0') {
            this.msg.displayToast('Saved profile.');
            this.navCtrl.pop();
          }
      });
  }

}
