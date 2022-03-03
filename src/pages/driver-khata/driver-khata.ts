import { PhotoViewer } from '@ionic-native/photo-viewer';
import { DriverDetailsSearchPage } from './../driver-details-search/driver-details-search';
import { MessageProvider } from './../../providers/message/message';
import { CodesProvider } from './../../providers/codes/codes';
import { RestProvider } from './../../providers/rest/rest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Modal, ModalController, LoadingController } from 'ionic-angular';
import { AddDriverExpensesPage } from '../add-driver-expenses/add-driver-expenses';


@IonicPage()
@Component({
  selector: 'page-driver-khata',
  templateUrl: 'driver-khata.html',
})
export class DriverKhataPage {

  bills : any = [];
  filterbills : any = [];
  isupdate : boolean = false;
  searchTerm : any = '';
  selectedfilters : any = [];

  constructor(private alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, 
    private rest : RestProvider, private codes : CodesProvider, private message : MessageProvider, private modalCtrl : ModalController,
    private photoViewer : PhotoViewer, private ldctrl : LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverKhataPage');
  }

  ionViewWillEnter(){
    this.getBillsBySrthId();
  }

  report() {
    let modalCtrl = this.modalCtrl.create('ReportFullPage',{"worker_type":'driver'});
    modalCtrl.present();
  }


  viewImage(image) {
    this.photoViewer.show(image['image_url'],image['tag_cloud'], {share: true});
  }

  getBillsBySrthId(){
    this.isupdate = false;
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    let ld = this.ldctrl.create({
      'content':'Loading the drivers ...'
    });
    var data = {
      "srth_id":json[0]['srth_id'],
      "worker_type":"driver"
    };

    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID,data).then(resp => {
      ld.dismiss();
      if(resp['_ReturnCode'] == '0'){
        this.bills = resp['data'];
        this.filterbills = this.bills;
        for(let i=0;i<this.bills.length;i++){
          this.bills[i]['selected'] = 'false';
          this.filterbills[i]['selected'] = 'false';
        }
      }
    }, error => {
      ld.dismiss();
    });
  }

  selectThis(bill){
    for(let i=0;i<this.bills.length;i++){
      this.bills[i]['selected'] = 'false';
      this.filterbills[i]['selected'] = 'false';
    }
    bill['selected'] = 'true';
    this.isupdate = true;
    localStorage.setItem('bill',JSON.stringify(bill));
  }
  

  update(){
    this.navCtrl.push('AddDriverExpensesPage',{'update':'true'});
  }

  presentConfirmDelete() {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Are you sure you want to delete this bill?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deletebill();
          }
        }
      ]
    });
    alert.present();
  }

  searchBillDetails() {
    let mdl = this.modalCtrl.create('DriverDetailsSearchPage');

    mdl.onDidDismiss(data => {  

      if(localStorage.getItem("searchdriverdetails") != undefined) {
        this.selectedfilters = JSON.parse(localStorage.getItem("searchdriverdetails"));

        if(this.selectedfilters.length == 0) {
          this.filterbills = this.bills;
          return;
        }
    

        this.filterbills = [];

        for(let i=0;i<this.selectedfilters.length;i++){
            if(this.selectedfilters[i]['type'] == 'reasons') {
                for(let j=0;j<this.bills.length;j++){
                  if(this.bills[j]['reason'] == this.selectedfilters[i]['name']) {
                    this.filterbills.push(this.bills[j]);
                  }
                }
            } else if(this.selectedfilters[i]['type'] == 'vehicles') {
              for(let j=0;j<this.bills.length;j++){
                if(this.bills[j]['vehicle_id'] == this.selectedfilters[i]['id']) {
                  this.filterbills.push(this.bills[j]);
                }
              }

            } else if(this.selectedfilters[i]['type'] == 'drivers') {
              for(let j=0;j<this.bills.length;j++){
                if(this.bills[j]['worker_id'] == this.selectedfilters[i]['id']) {
                  this.filterbills.push(this.bills[j]);
                }
              }

            } 

        }

        console.error(JSON.stringify(this.filterbills));

      }

    });
    mdl.present();
  }

  removeTerm(sc) {
    var sFilters = [];
    for(let i=0;i<this.selectedfilters.length;i++){
      if(this.selectedfilters[i]['type'] == sc['type'] && this.selectedfilters[i]['id'] == sc['id']){
      } else  {
        sFilters.push(this.selectedfilters[i]);
      }
    }

    this.selectedfilters = sFilters;


    if(this.selectedfilters.length == 0) {
      this.filterbills = this.bills;
      return;
    }

    this.filterbills = [];

    for(let i=0;i<this.selectedfilters.length;i++){
      if(this.selectedfilters[i]['type'] == 'reasons') {
          for(let j=0;j<this.bills.length;j++){
            if(this.bills[j]['reason'] == this.selectedfilters[i]['name']) {
              this.filterbills.push(this.bills[j]);
            }
          }
      } else if(this.selectedfilters[i]['type'] == 'vehicles') {
        for(let j=0;j<this.bills.length;j++){
          if(this.bills[j]['vehicle_id'] == this.selectedfilters[i]['id']) {
            this.filterbills.push(this.bills[j]);
          }
        }

      } else if(this.selectedfilters[i]['type'] == 'drivers') {
        for(let j=0;j<this.bills.length;j++){
          if(this.bills[j]['worker_id'] == this.selectedfilters[i]['id']) {
            this.filterbills.push(this.bills[j]);
          }
        }

      } 

  }



  }

  deletebill(){
    var bill = JSON.parse(localStorage.getItem('bill'));
    var data = {
      "bill_id":bill['bill_id']
    };  

    this.rest.post(this.codes.DELETE_BILL_EXPENSE,data).then(resp=> {
      if(resp['_ReturnCode'] == '0'){
        this.message.displayToast('Congratulations! You have deleted a bill.'); 
        this.getBillsBySrthId();
      }
    });
  }


  openAddDriverExpensePage() {
    this.navCtrl.push('AddDriverExpensesPage',{'update':'false'});
  }

  getItems($event){
    this.filterbills = this.bills.filter(wp => {
      if (this.searchTerm != '') {
        var str = wp.bill_id+wp.vehicle_id+wp.reason+wp.km_reading+wp.bill_date+wp.bill_details+wp.worker_id;
        return (str.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      }
      else 
        return this.bills;
    });
  }

}
