import { PhotoViewer } from '@ionic-native/photo-viewer';
import { MessageProvider } from './../../providers/message/message';
import { RestProvider } from './../../../src/providers/rest/rest';
import { CodesProvider } from './../../../src/providers/codes/codes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
import { DocumentRenewalPage } from '../document-renewal/document-renewal';

@IonicPage()
@Component({
  selector: 'page-add-document-bill',
  templateUrl: 'add-document-bill.html',
})
export class AddDocumentBillPage {

  document: any = '';
  bills: any = [];
  isupdate: boolean = false;

  filterbillDetails: any = [];
  shops: any = [];

  search: any = [];
  displayfilter: boolean = false;
  displaysearchitems: any = [];
  searchTerm: any = '';
  selectedfilters: any = [];
  filterbills: any = [];

  ok: boolean = false;
  expired: boolean = false;
  all: boolean = true;


  constructor(public navCtrl: NavController, public navParams: NavParams, private codes: CodesProvider, private rest: RestProvider,
    private message: MessageProvider, private alertCtrl: AlertController, private ldl: LoadingController,
    private pv : PhotoViewer) {
    this.document = this.navParams.get("document");
    console.log(JSON.stringify(this.document));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDocumentBillPage');
    // this.getBillsBySrthId();
  }

  ionViewWillEnter(){
    this.getBillsBySrthId();
  }

  clicksearchbar() {
    this.displayfilter = true;
    this.displaysearchitems = this.search;
  }

  closesearchbar() {
    this.displayfilter = false;
    this.displaysearchitems = this.search;
  }

  displayOk() {
    this.all = false;
    this.ok = true;
    this.expired = false;
  }

  displayExpired() {
    this.all = false;
    this.ok = false;
    this.expired = true;
  }

  displayALL() {
    this.all = true;
    this.ok = false;
    this.expired = false;
  }



  getItems($event) {

    if (this.searchTerm != '') {
      this.displayfilter = true;
      this.displaysearchitems = this.search;
    }

    if (this.searchTerm == '') {
      this.displayfilter = false;
      this.displaysearchitems = this.search;
      this.filterbills = this.bills;
      this.isupdate = false;

      for (let i = 0; i < this.bills.length; i++) {
        this.bills[i]['selected'] = 'false';
      }

      for (let i = 0; i < this.filterbills.length; i++) {
        this.filterbills[i]['selected'] = 'false';
      }

    }

    this.displaysearchitems = this.search.filter(wp => {
      if (this.searchTerm != '') {
        var str = wp.id + wp.name;
        return (str.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1);
      }
      else
        return this.search;
    });
  }

  clickedsearchitem(sr) {
    this.displayfilter = false;
    this.displaysearchitems = this.search;
    if (sr['type'] == 'shopname') {
      this.searchTerm = sr['name'];
      this.filterbills = [];
      for (let i = 0; i < this.bills.length; i++) {
        if (this.bills[i]['person_shop_name'] == sr['name']) {
          this.filterbills.push(this.bills[i]);
        }
      }
    } else if (sr['type'] == 'bills') {
      for (let i = 0; i < this.bills.length; i++) {
        if (this.bills[i]['bill_id'] == sr['id']) {
          this.filterbills = [];
          this.searchTerm = sr['id'];
          this.filterbills.push(this.bills[i]);
          this.selectThis(this.bills[i]);
        }
      }
    }
  }


  getShops() {
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));
    var data = {
      "srth_id": json[0]['srth_id']
    };

    this.rest.post(this.codes.GET_WORKER, data).then(resp => {
      if (resp['_ReturnCode'] == '0') {

        var dt = resp['data'];

        for (let i = 0; i < dt.length; i++) {
          if (dt[i]['worker_type'] == 'documents' || dt[i]['worker_type'] == 'insurance') {
            this.shops.push(dt[i]);
          }
        }

        for (let i = 0; i < this.shops.length; i++) {
          var searchobj = {
            "type": "shopname",
            "name": this.shops[i]['name'],
            "id": "",
            "amount": ""
          };
          this.search.push(searchobj);
        }

        for (let i = 0; i < this.bills.length; i++) {
          var searchobj2 = {
            "type": "bills",
            "id": this.bills[i]['bill_id'],
            "name": this.bills[i]['person_shop_name'],
            "amount": this.bills[i]['total_bill']
          };
          this.search.push(searchobj2);
        }

      }
    });
  }


  viewBillImage(imageUrl) {
    this.pv.show(imageUrl,'Bill Image',{'share':true})
  }




  getBillsBySrthId() {
    // this.isupdate = false;
    let ld = this.ldl.create({
      'content': 'Loading the bills ...'
    });
    var json = JSON.parse(localStorage.getItem(this.codes.K_ACCOUNT_INFO));

    var data = {
      "srth_id": json[0]['srth_id'],
      "reason": this.document['document_name']
    };
    ld.present();
    this.bills = [];
    this.rest.post(this.codes.GET_EXPENSE_BILL_BY_SRTH_ID, data).then(resp => {
      ld.dismiss();
      if (resp['_ReturnCode'] == '0') {
        var bls = resp['data'];
        for (let i = 0; i < bls.length; i++) {
          if (bls[i]['reason'] == this.document['document_name']) {
            bls[i]['selected'] = 'false';
            this.bills.push(bls[i]);
          }
        }
        this.filterbills = this.bills;
        for (let i = 0; i < this.filterbills.length; i++) {
          this.filterbills[i]['is_expired'] = false;
          if (this.filterbills[i]['details'] != undefined) {
            for (let j = 0; j < this.filterbills[i]['details'].length; j++) {
              var dt = new Date(this.filterbills[i]['details'][j]['document_expiry_date']);
              if (dt.getTime() < new Date().getTime()) {
                this.filterbills[i]['is_expired'] = true;
              }
            }
          }
        }
        this.getShops();

      }
    });
  }


  openRenewalDocumentPage() {
    this.navCtrl.push('DocumentRenewalPage', { "document": this.document });
  }

  selectThis(bill) {
    this.isupdate = true;
    for (let i = 0; i < this.bills.length; i++)
      this.bills[i]['selected'] = 'false';

    bill['selected'] = 'true';
    localStorage.setItem("bill", JSON.stringify(bill));
  }

  update() {
    var bill = JSON.parse(localStorage.getItem("bill"));
    this.navCtrl.push('DocumentRenewalPage', { "document": this.document, "bill": bill });
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

  deletebill() {
    var bill = JSON.parse(localStorage.getItem('bill'));
    var data = {
      "bill_id": bill['bill_id']
    };

    this.rest.post(this.codes.DELETE_BILL_EXPENSE, data).then(resp => {
      if (resp['_ReturnCode'] == '0') {
        this.message.displayToast('Congratulations! You have deleted a bill.');
        this.getBillsBySrthId();
      }
    });
  }

}
