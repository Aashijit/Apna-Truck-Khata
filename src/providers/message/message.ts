import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(public http: HttpClient, private toast : ToastController) {
    console.log('Hello MessageProvider Provider');
  }


  displayToast(message){
    let toast = this.toast.create({
      message: message,
      // duration: 3000,
      position: 'bottom',
      showCloseButton:true
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
