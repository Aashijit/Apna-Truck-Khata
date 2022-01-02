import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { P } from '@angular/core/src/render3';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  notifications : any = [];

  constructor(public navCtrl: NavController, private rest : RestProvider, private codes : CodesProvider) {

  }

  ionViewWillEnter(){
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_NOTIFICATIONS,data).then(resp=> {
      if(resp != null) {
        if(resp['data'] != []) {
          var n = resp['data'];
          this.notifications = n;
        }
      }
    });
  }

  goToActionPage(page, objectId) {
    if(page=='DocumentAddBill') {
      var dt = {
        "document_id":objectId
      }
      this.rest.post(this.codes.GET_DOCUMENT_INFO_BY_DOCUMENT_ID,dt).then(resp => {
        this.navCtrl.push('DocumentRenewalPage',{'document':resp['data']});
      });
    }
  }

}