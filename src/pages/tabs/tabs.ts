import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'AboutPage';
  tab3Root = '';
  tab4Root = 'ContactPage';

  notifications : Number = 0;

  constructor(private rest : RestProvider, private codes : CodesProvider) {
  }

  ionViewWillEnter(){

  }
}