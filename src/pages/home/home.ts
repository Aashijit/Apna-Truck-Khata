import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { RestProvider } from './../../providers/rest/rest';
import { CodesProvider } from './../../providers/codes/codes';
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Slides, Platform } from 'ionic-angular';
import { convertToObject } from 'typescript';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 

  name : any = '';
  fuel : any = '';
  notifications : Number = 0;

  @ViewChild(Slides) slides: Slides;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };


  constructor(public navCtrl: NavController, private codes : CodesProvider,private rest : RestProvider, 
    private push : Push, private platform : Platform) {
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
    this.initPushNotification();
  }

  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    const options: PushOptions = {
      android: {
        senderID: '1092655619979'
      },
      ios: {
        alert: 'true',
        badge: false,
        sound: 'true'
      },
      windows: {}
    };
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      console.log('device token -> ' + data.registrationId);

      var acc = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    
      data = {
        "srth_id" : acc[0]['srth_id'],
        "fcm" : data.registrationId,
        "last_maint_id":"srth_ws",
        "opt_counter":"0"
      };

      this.rest.post(this.codes.SAVE_NOTIFICATION_FCM_TOKEN,data).then(resp => {
        console.log("Successfully Stored");
      });

    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  }


  refresh(){

    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id":json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_NOTIFICATIONS,data).then(resp=> {
      if(resp != null) {
        if(resp['data'] != []) {
          var n = resp['data'];
          this.notifications = n.length;
        }
      }
    });


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
