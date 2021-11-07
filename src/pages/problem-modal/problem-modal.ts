import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-problem-modal',
  templateUrl: 'problem-modal.html',
})
export class ProblemModalPage {

  addNewField : boolean = false;

  
  constructor(private viewController : ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProblemModalPage');
  }

  addNew() {
    this.addNewField = true;
  }

  exitModal(){
    this.viewController.dismiss();
  }

}
