import { CodesProvider } from './../../providers/codes/codes';
import { CalendarComponentOptions } from 'ion2-calendar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-calendar-modal',
  templateUrl: 'calendar-modal.html',
})
export class CalendarModalPage {

  dt = new Date(2000,1,1);
  selectedDate : any = '';
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'single',
    from:this.dt,
    to:0,
    showMonthPicker:true,
    showToggleButtons:true,
    color:'primary'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private codes : CodesProvider, private view : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarModalPage');
  }

  select() {
    localStorage.setItem(this.codes.DATE,this.selectedDate);
    this.view.dismiss();
  }

  dismiss() {
    this.view.dismiss();
  }

}
