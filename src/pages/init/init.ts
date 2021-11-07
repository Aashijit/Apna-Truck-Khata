import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private rest : RestProvider,
    private codes : CodesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitPage');
  }


  getregistrationinfo(){
  
    var data = {
      'mobile_number':this.phoneNumber
    }

    this.rest.post(this.codes.GET_REGISTRATION_INFO,data).then(res => {
      if(res['data'].length == 0){
        this.showpassword = true;
      }
      else {
        localStorage.setItem(this.codes.K_ACCOUNT_INFO,JSON.stringify(res['data']));
        this.enterpassword = true;
      }
    });

  }

  createpassword() {
    var data = {
      "mobile_number": this.phoneNumber,
      "password": this.password
    };

    this.rest.post(this.codes.SAVE_REGISTRATION_INFO,data).then(res => {
      if(res['_ReturnCode'] == '0'){
        localStorage.setItem(this.codes.K_ACCOUNT_INFO,JSON.stringify(data['data']));
        this.navCtrl.setRoot('TabsPage');
      }
    });
  }

  login(){
    var data = {
      "mobile_number": this.phoneNumber,
      "password": this.password
    };

    this.rest.post(this.codes.LOGIN,data).then(res => {
      if(res['_ReturnCode'] == '0'){
        localStorage.setItem(this.codes.K_ACCOUNT_INFO,JSON.stringify(res['data']));
        this.navCtrl.setRoot('TabsPage');
      } else {
        this.message = res['_ReturnMessage'];
      }
    });

  }

}
