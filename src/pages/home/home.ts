import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component, ViewChild } from '@angular/core';
import { NavController,IonicPage, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name : any = '';
  fuel : any = '';

  @ViewChild(Slides) slides: Slides;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };


  constructor(public navCtrl: NavController, private codes : CodesProvider,private rest : RestProvider ) {
    var acc = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    
    if(localStorage.getItem("name") != undefined && localStorage.getItem("name") != null) {
    var data = {
      "srth_id" : acc[0]['srth_id']
    };

    this.rest.post(this.codes.GET_PROFILE,data).then(resp => {
      localStorage.setItem("name",resp['data'][0]['name']);
      this.name = resp['data'][0]['name'];
    });
  }
    this.name = localStorage.getItem("name");
  }

  ionViewWillEnter(){
    this.refresh();
  }

  refresh(){
    // this.rest.get(this.codes.GET_FUEL_PRICES,{}).then(resp => {
    //   if(resp != [])
    //   this.fuel = resp[0]['products'];
    //  });
  }

  openProfilePage() {
    this.navCtrl.push('ProfilePage');
  }

  openVehicleKhata() {
    this.navCtrl.push('VehicleKhataPage');
  }

  openDriverKhata() {
    this.navCtrl.push('DriverKhataPage');
  }

  openDocumentAndInsurance() {
    this.navCtrl.push('DocumentAndInsurancePage');
  }

  openDocumentBill() {
    this.navCtrl.push('AddDocumentBillPage');
  }

  openEditProfilePage() {
    this.navCtrl.push('EditProfilePage');
  }

  openLanguagePage() {
    this.navCtrl.push('LanguagePage');
  }

  openSettingsPage() {
    this.navCtrl.push('SettingsPage');

  }

  openDriverPage() {
    this.navCtrl.push('DriverPage');
  }

  openAddNewBankPage() {
    this.navCtrl.push('AddNewBankAccountPage');
  }

  openSecurityAndBackup() {
    this.navCtrl.push('SecurityAndBackupPage');
  }

  openAddDriverPage() {
    this.navCtrl.push('AddDriverPage');
  }

  openAddMechanicPage() {
    this.navCtrl.push('AddMechanicPage');
  }

  openLedgerPage() {
    this.navCtrl.push('LedgerPage');
  }

  openVehicleDetailsPage() {
    this.navCtrl.push('VehicleDetailsPage');
  }

  openDriverDocumentPage() {
    this.navCtrl.push('DriverDocumentPage');
  }

  openAddDriverExpensePage() {
    this.navCtrl.push('AddDriverExpensesPage');
  }

  openComplaintKhata() {
    this.navCtrl.push('ComplaintsKhataPage');
  }

  openMechanicalKhata() {
    this.navCtrl.push('MechanicKhataPage');
  }

  openShopKhata() {
    this.navCtrl.push('ShopKhataPage' );
  }

  openAllImageKhata() {
    this.navCtrl.push('AllImageKhataPage');
  }

  openReportKhata() {
    this.navCtrl.push('ReportAllCompPage');
  }

  openBillDetails() {
    this.navCtrl.push('BillDetailsPage');
  }

  openAccountKhata() {
    this.navCtrl.push('AccountKhataPage');
  }

  openVehicleDocument() {
    this.navCtrl.push('VehicleDocumentPage');
  }
  

}
