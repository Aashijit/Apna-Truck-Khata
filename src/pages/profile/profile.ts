import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  openEditProfilePage() {
    this.navCtrl.push('EditProfilePage');
  }

  openLanguagePage() {
    this.navCtrl.push('LanguagePage');
  }

  openAddNewBankPage() {
    this.navCtrl.push('AddNewBankAccountPage');
  }

  openSettingsPage() {
    this.navCtrl.push('SettingsPage');

  }

  openSecurityAndBackup() {
    this.navCtrl.push('SecurityAndBackupPage');
  }

}
