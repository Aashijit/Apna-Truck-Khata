import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@IonicPage()
@Component({
  selector: 'page-init',
  templateUrl: 'init.html',
})
export class InitPage {

  phoneNumber : any = '';
  password : any = '';
  enterpassword : boolean = false;
  showpassword : boolean = false;
  message : any = '';
  otp  :any = '';
  srth_id : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private rest : RestProvider,
    private codes : CodesProvider, private loading : LoadingController) {

      if(localStorage.getItem(this.codes.K_ACCOUNT_INFO) != null && localStorage.getItem(this.codes.K_ACCOUNT_INFO) != undefined) {
          var json =  JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
          this.phoneNumber = json[0]['mobile_number'];
          if(json['password_salt'] != '') 
            this.enterpassword = true;
          else 
            this.showpassword = true;
      }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitPage');
  }

  updateOtp(otp){
    this.otp = otp;
  }

  updatePassword(password){
    this.password = password;
  }

  getregistrationinfo(){
  
    var data = {
      'mobile_number':this.phoneNumber
    }

    var load = this.loading.create({
      content:'Checking your mobile number ... '
    });
    load.present();
    this.rest.post(this.codes.GET_REGISTRATION_INFO,data).then(res => {
      load.dismiss();
      if(res['data']['password_salt'] == ""){
        this.showpassword = true;
        this.srth_id = res['data']['srth_id'];
      }
      else {
        var dt = [res['data']];
        localStorage.setItem(this.codes.K_ACCOUNT_INFO,JSON.stringify(dt));
        this.enterpassword = true;
      }
    });

  }

  createpassword() {

    var data = {
      "mobile_number": this.phoneNumber,
      "srth_id":this.srth_id,
      "otp_text":this.otp,
      "password": this.password
    };
    var load = this.loading.create({
      content:'Registering your account  ... '
    });
    load.present();
    this.rest.post(this.codes.SAVE_REGISTRATION_INFO,data).then(res => {
      load.dismiss();
      if(res['_ReturnCode'] == '0'){
        var dt = [res['data']];
        localStorage.setItem(this.codes.K_ACCOUNT_INFO,JSON.stringify(dt));
        this.navCtrl.setRoot('TabsPage');
      } else 
      {
        this.message = res['_ReturnMessage'];
      }
    });
  }

  login(){
    var data = {
      "mobile_number": this.phoneNumber,
      "password": this.password
    };
    var load = this.loading.create({
      content:'Logging into your account  ... '
    });
    load.present();
    this.rest.post(this.codes.LOGIN,data).then(res => {
      load.dismiss();
      if(res['_ReturnCode'] == '0'){
        localStorage.setItem(this.codes.K_ACCOUNT_INFO,JSON.stringify(res['data']));
        this.navCtrl.setRoot('TabsPage');
      } else {
        this.message = res['_ReturnMessage'];
      }
    });

  }

}
